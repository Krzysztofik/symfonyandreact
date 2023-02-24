import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/recipes')
            .then(response => {
                setRecipes(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Recipe List</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Ingredients</th>
                    <th>Calories</th>
                </tr>
                </thead>
                <tbody>
                {recipes.map(recipe => (
                    <tr key={recipe.id}>
                        <td>{recipe.name}</td>
                        <td>{recipe.ingredients}</td>
                        <td>{recipe.calories}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecipeList;