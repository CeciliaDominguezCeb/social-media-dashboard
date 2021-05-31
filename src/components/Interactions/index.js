import React from 'react'


function Interactions(props){
    const {id,pageviews,icon,count,iconCount,percentage}= props;
    return(
        <div className="card-small" key={id}>
            <p>
            <span className="views">{pageviews}</span>
            <span className="count">{count}</span>
                
            </p>
            <p>
            <img className="icon" src={icon} alt="" />
            <span>
                <img src={iconCount} alt="" />
                <small className="percentage">{percentage}</small>

            </span>
            </p>
        </div>
    )
}

export default Interactions;