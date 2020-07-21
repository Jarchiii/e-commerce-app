import React from 'react'

function Advantage() {
    return (
        <div className="advantage">
           <div className="argument">
               <img className="icons" src="./green.png"></img>
               <h3>eco-responsable</h3>
               <p>Nos equipe font le maximum pour vous garantir un vent d'une origine à 99% issus de fabrication de biologique.</p>
           </div>
           <div className="argument"> 
               <img className="icons" src="./wind.png"></img>
               <h3>Fort</h3>
               <p>Nous garantissons la force de nos vent car ils sont tous testé et approuvé en usisne avant livraison</p>
           </div>
           <div className="argument">
               <img className="icons" src="./architecture-and-city.png"></img>
               <h3>Modulable</h3>
               <p>A chaque personne correspont son vent. Venez découvrir notre game de vent issu du monde entier !</p>
           </div>
        </div>
    )
}

export default Advantage
