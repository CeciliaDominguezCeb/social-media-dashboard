import React from 'react'
import Header from './components/Header'
import Social from './components/Social'
import Interactions from './components/Interactions'
import dataSocial from './data-social'
import interactions from './data-interactions'




function App() {
  


  return (
    <>
    <Header/>
      <div className="card-container">
        {dataSocial.map((social)=>(
          <Social 
          key = {social.id}
          {...social}
          />
        ))}
      </div>
      <div className= "title-second-grid">
        <h2 >Overview - Today</h2>
      </div>
      <div className="small-cards-container">
      {interactions.map((interaction)=>(
        <Interactions
        key={interaction.id}
        {...interaction}
        />
      ))}
      </div> 
  </>
  );
}

export default App;
