import React from 'react'




function Toggle({darkMode,setDarkMode}){

function handleChange(){
        if(darkMode){
            document.body.classList.remove('dark-mode')
            setDarkMode(false)
        }else{
            document.body.classList.add('dark-mode')
            setDarkMode(true)
        }
    }


    return(
        <div className="toggle-container">
            <span className="darkmode">Dark Mode</span>
            
            <label className="switch" >
                <input type="checkbox" onChange={handleChange}  />
                <span className="slider"></span>
            </label>
        </div>
    )
}

export default Toggle;