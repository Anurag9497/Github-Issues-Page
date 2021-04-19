import React,{useState} from 'react';
import './index.css';

function Search({setIssues, setPage, setShow, setFlag}) {
    const [repo, setRepo] = useState({username: " ", reponame: " "});

    const handleChange = (event) => {
        let {id, value} = event.target;
        setRepo({
            ...repo,
            [id] : value
        });
    };

    const handleRepo = () => {
        if(repo.username!==" " && repo.reponame!==" ")
        {
            fetch(`http://api.github.com/repos/${repo.username}/${repo.reponame}/issues`)
            .then(res => {
                if(res.status===200)
                    return res.json();
                else
                    throw Error(`${res.status} occurred`);
            })
            .then(data => {
                // console.log(data);
                setIssues(data);
                const totalPage = data.length%8===0 ? data.length/8 : Math.floor(data.length/8) + 1;
                let defaultIssue = data.slice(0,9);
                setShow(defaultIssue);
                setPage(totalPage);
                setFlag(true);
            })
            .catch(err => alert(err));
        }
        else
            alert("Input fields are empty!");
    };

    return (
        <div id="search">
            <div>
                <input 
                    type="text" 
                    placeholder="GitHub Username" 
                    className="github-input" 
                    id="username" 
                    onChange={handleChange}
                />{" "}
                <input 
                    type="text" 
                    placeholder="GitHub Repo Name" 
                    className="github-input"
                    id="reponame" 
                    onChange={handleChange}
                />
            </div>
            <div>
                <button type="button" id="search-issue" onClick={handleRepo}>Search Issues</button>
            </div>
        </div>
    );
}

export default Search;
