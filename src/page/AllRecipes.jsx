import React from 'react';
import foodItems from '../data/data';
import { useParams } from 'react-router-dom';

function AllRecipes() {
    const { slug } = useParams()
    // methode pour chercher element par slug
    const item = foodItems.find(food => food.slug === slug); 

    console.log(slug)
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto p-6">
                
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                        <h1 className="text-2xl font-bold mb-4">
                            {item.name}
                        </h1>
                        
                        <img className="max-w-sm mx-auto my-4 rounded-lg shadow" src={"/public/" + item.imageSrc} alt={item.name} />

                        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                        <ul className="list-disc list-inside mb-4">
                            {item.ingredients.map((ingredient, i) => (
                                <li key={i} className="mb-2">{ingredient}</li>
                            ))}
                        </ul>

                        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
                        <ol className="list-decimal list-inside mb-6">
                            {item.instructions.map((instruction, i) => (
                                <li key={i} className="mb-2">{instruction}</li>
                            ))}
                        </ol>

                        <p className="text-gray-700 mb-4">Serve the {item.name} with your favorite frosting or enjoy it plain!</p>

                        <div className="text-center">
                            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">Print Recipe</button>
                        </div>
                    </div>
            
            </div>
        </div>
    );
}

export default AllRecipes;
