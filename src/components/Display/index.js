import React,{useState} from 'react';
import './index.css';
import Page from '../Page';

function Display({issues, page, show, setShow, flag}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [activePage, setActivePage] = useState(1);

    const handleDisplay = (event) => {
        let newIssues = [];
        if(event.target.id==="increment" || event.target.id==="decrement")
        {
            if(activePage%5===0)
            {
                const newPage = event.target.id==="increment" ? currentPage + 1 : currentPage -1 ;
                setCurrentPage(newPage);
            }
        }
        else
        {
            let startPage = (Number(event.target.id) - 1)*8;
            let endPage = Number(event.target.id)*8;
            if(issues.length>=endPage)
                newIssues = issues.slice(startPage, endPage);
            else 
                newIssues = issues.slice(startPage);

            setShow(newIssues);
            setActivePage(Number(event.target.id));
        }
    };

    return (
        <>
            <div id="display">
                {show.map((item,itemIndex) => {
                    return  <div key={itemIndex} className="display-item">
                                <p className="upper-para">{item.title}</p>
                                <p className="bottom-para"># {item.number} {item.state}ed on {item.created_at} by {item.user.login}</p>            
                            </div>
                })}
            </div>
            { flag && <div id="pagination">
                        <Page 
                            currentPage={currentPage}
                            activePage={activePage} 
                            handleDisplay={handleDisplay} 
                            page={page}
                        />
                      </div>
            }
        </>
    );
}

export default Display;
