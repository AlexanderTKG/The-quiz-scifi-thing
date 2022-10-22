const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, recipes, title}) {
    return (
        <Default title = {title}>
            <h2>Index Page</h2>
            <h3>Recipes</h3>
            <ul>
                {
                    recipes.map((baker) => {
                        return(
                            <li key = {baker._id}>
                                <a href = {`/recipes/${baker._id}`}>{baker.name}</a> 
                            </li>
                        )
                    })
                }
            </ul>
            <h3>Breads</h3>
            {/* <p>I have {breads[0].name} bread!</p> */}
            <div className = "newButton">
                <a href = "/breads/new"><button>Add a new bread</button></a>
            </div>
            <ul>
                {
                    breads.map((bread, index) => {
                        return (
                            <li key = {bread.id}>
                                <a href = {`/breads/${bread._id}`}>
                                    {bread.name}
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