import React from 'react';
import recipes from '../APIs/Recipes';
function SpecialsSection() {
    const handleOrder = () => {
        alert("Order placed!");
    }
    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This weeks specials!</h2>
                <button>Online Menu</button>
            </div>
            <div className="cards">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="menu-items">
                        <img src={recipe.image} alt="" />
                        <div className="menu-content">
                            <div className="heading">
                                <h5>{recipe.title}</h5>
                                <p>${recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className="orderbtn" onClick={handleOrder}>Order Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SpecialsSection;
