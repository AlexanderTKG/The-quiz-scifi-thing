const React = require('react')
const Default = require('./layouts/Default')

function Edit ({bread, recipes}) {
    return (
      <Default>
        <h2>Edit a bakery</h2>
        <form action={`/bakery/${bakery.id}?_method=PUT`} method="POST">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={bakery.name}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue={bakery.image}
          />
          <label htmlFor="recipe">Recipe</label>
          <select name="recipe" id="recipe" defaultValue={bread.recipe}>
            {recipes.map((recipe) => {
              return(
                <option value = {recipe.id} key = {recipe.id} > {recipe.name}</option>
              )
            })}
          </select>
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked={bakery.hasGluten}
          />
          <br />
          <input type="submit"/>
        </form>
      </Default>
    )
}

module.exports = Edit