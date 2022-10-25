const React = require('react')
const Default = require('./layouts/Default')

function Index ({bakery, recipes, title}) {
    console.log('main page')
    return (
        <Default title = {title}>
            {/* <h3>Recipes</h3> */}
            {/* <ul>
                {
                    recipes.map((recipe) => {
                        return(
                            <li key = {recipe._id}>
                                <a href = {`/recipes/${recipe._id}`}>{recipe.name}</a> 
                            </li>
                        )
                    })
                }
            </ul> */}
            <h3>Bakery</h3>
            {/* <p>I have {breads[0].name} bread!</p> */}
            <div className = "newButton">
                <a href = "/bakery/new"><button>Add new recipe</button></a>
            </div>
            <ul>
                {
                    bakery.map((bakery, index) => {
                        return (
                            <li key = {bakery.id}>
                                <a href = {`/bakery/${bakery._id}`}>
                                    {bakery.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </Default>
    )
}

module.exports = Index