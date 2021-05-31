import React, {useState}  from 'react'
import Toggle from '../Toggle'

function Header(){
    const [darkMode,setDarkMode] = useState(false)


return(

    <header >
        <div className="title-dashboard">
        <h1>Social Media Dashboard</h1>
        <p>Total followers: 23,004</p>
        </div>
        <Toggle 
        darkMode ={darkMode}
        setDarkMode={setDarkMode}
        />
        
    </header>
)
}


export default Header;