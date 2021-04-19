import React from 'react';
import './index.css';

function Page({currentPage, activePage, handleDisplay, page}) {
    const pageGroup = [];

    const handlepageGroup = () => {
        for(let i=0;i<Number(page);i++) {
            pageGroup.push(<button 
                                key={currentPage + i} 
                                type="button" 
                                id={currentPage + i} 
                                onClick={handleDisplay}
                                className={(currentPage+i)===activePage ? "pageActive" : "pageitem"}
                            >
                                {currentPage + i}
                            </button>);
        }
        return pageGroup;
    };

    return (
        <div>
            <button type="button" id="decrement" onClick={handleDisplay}>{"<<"}</button>
            {handlepageGroup()}
            <button type="button" id="increment" onClick={handleDisplay}>{">>"}</button>
        </div>
    );
}

export default Page;
