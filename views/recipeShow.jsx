const React = require('react')
const Default = require('./layouts/Default')

function Show ({recipe}) {
    return (
      <Default>
<<<<<<< HEAD:views/bakerShow.jsx
          <h3>{baker.name}</h3>
            <p>{baker.name} has been baking with us since {baker.startDate.getFullYear()}</p>
            <p>About {baker.name}: {baker.bio}</p>
          <h3>Bakery {baker.name} has baked</h3>
=======
          <h3>{recipe.name}</h3>
            <p>{recipe.name} has been baking with us since {recipe.startDate.getFullYear()}</p>
            <p>About {recipe.name}: {recipe.bio}</p>
          <h3>Breads {recipe.name} has baked</h3>
>>>>>>> 8e5dd6784bbcf8abf6f9cb00e370fdc2265e7efe:views/recipeShow.jsx
            <ul>
                {
                recipe.breads.map((bread)=> {
                    return (
                        <li key={bread.id}>
                            {bread.name}
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