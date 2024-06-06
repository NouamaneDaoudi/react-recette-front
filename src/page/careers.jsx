import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import foodItems from '../data/data';

function Careers() {
    const [showRecipe, setShowRecipe] = useState({});

    // Function to toggle recipe visibility
    const toggleRecipe = (index) => {
        setShowRecipe(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 px-4 lg:px-5 py-8">
            {foodItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img className="object-cover w-full h-48" src={item.imageSrc} alt={item.name} />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">{item.name}</h2>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        {showRecipe[index] ? (
                            <p className="text-sm text-gray-600 mt-2">{item.recipe}</p>
                        ) : null}
                        
                        <Link to={`/receip/${item.slug}`} className="mt-4 flex justify-center">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                View Recipe
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Careers;
