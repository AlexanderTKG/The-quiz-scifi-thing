const React = require('react')
const Default = require('./layouts/Default')

function Show ({recipe}) {
    return (
      <Default>
          <h3>{recipe.name}</h3>
            <p>{recipe.name} has been baking with us since {recipe.startDate.getFullYear()}</p>
            <p>About {recipe.name}: {recipe.bio}</p>
          <h3>Bakery {recipe.name} has baked</h3>
            <ul>
                {
                recipe.bakery.map((bakery)=> {
                    return (
                        <li key={bakery.id}>
                            {bakery.name}
                        </li>
                    )
                })
                }
                <form action = {`/recipes/${recipe.id}?_method=DELETE`} method='POST'>
                    <input type = 'submit' value = 'DELETE' />
                </form>
            </ul>
      </Default>
    )
}

module.exports = Show