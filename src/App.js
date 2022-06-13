import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import data from './components/data';

const App = () => {

    const cardData = data.map(item => 
        <Cards
            key={item.id} 
            {...item}
        />)

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="card-list" >
                {cardData}
            </div>
            
        </div>
    )
}

export default App;