const React = require('react')
const Default = require('./layouts/Default')

function New ({recipes}) {
    return (
        <Default>
            <h2>Add a new bakery</h2>
            <div className = "backButton">
                <a href = "/bakery"><button>Go back to the index</button></a>
            </div>
            <form action = "/bakery" method = "POST">
                <label htmlFor = "name">Name</label>
                <input
                    type = "text"
                    name = "name"
                    id = "name"
                    required
                />
                <label htmlFor = "image">Image</label>
                <input
                    type = "text"
                    name = "image"
                    id = "image"
                />
                <label htmlFor="recipe">Recipe</label>
                    <select name="recipe" id="recipe">
                        {recipes.map((recipe) => {
                            return(
                                <option value = {recipe.id} key = {recipe.id} > {recipe.name}</option>
                            )
                        })}
                    </select>
                <label htmlFor = "hasGluten">Has Gluten?</label>
                <input
                    type = "checkbox"
                    name = "hasGluten"
                    id = "hasGluten"
                    defaultChecked
                />
                <br />
                <input type = "submit" />
            </form>
        </Default>
    )
}

module.exports = New