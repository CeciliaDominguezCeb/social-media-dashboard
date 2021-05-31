import React from 'react'


function Social(props){
    const {username,icon,subCount,socialType,iconCount,day }= props
    return(
        
            <div className="card" >
                <p className= "user">
                    <img src={icon} alt="" />
                    <span>  {username}</span>
                </p>
                <p className="subcount">{subCount}</p>
                <p className="socialtype">{socialType}</p>
                <p className="subschange">
                    <img src={iconCount} alt="" />
                    <small>{day}</small>
                </p>
            </div>

    )
}

export default Social;