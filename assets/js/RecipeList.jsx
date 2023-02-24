import React, { useState } from "react";

function RecipeForm() {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [calories, setCalories] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/recipe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, ingredients, calories }),
        })
            .then((response) => {
                if (response.ok) {
                    setMessage("Recipe added successfully!");
                    setName("");
                    setIngredients("");
                    setCalories("");
                } else {
                    setMessage("Adding recipe failed!");
                }
            })
            .catch((error) => {
                console.error(error);
                setMessage("Adding recipe failed!");
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>
            <label>
                Ingredients:
                <input
                    type="text"
                    value={ingredients}
                    onChange={(event) => setIngredients(event.target.value)}
                />
            </label>

            <label>
                Calories:
                <input
                    type="text"
                    value={calories}
                    onChange={(event) => setCalories(event.target.value)}
                />
            </label>
            <button type="submit">Add Recipe</button>
            <p>{message}</p>
        </form>
    );
}

export default RecipeForm;
