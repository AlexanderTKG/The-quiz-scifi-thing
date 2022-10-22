const React = require('react')
const Default = require('./layouts/Default')

<<<<<<< HEAD
function Edit ({bakery, bakers}) {
=======
function Edit ({bread, recipes}) {
>>>>>>> 8e5dd6784bbcf8abf6f9cb00e370fdc2265e7efe
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
<<<<<<< HEAD
          <label htmlFor="baker">Baker</label>
          <select name="baker" id="baker" defaultValue={bakery.baker}>
            {bakers.map((baker) => {
=======
          <label htmlFor="recipe">Recipe</label>
          <select name="recipe" id="recipe" defaultValue={bread.recipe}>
            {recipes.map((recipe) => {
>>>>>>> 8e5dd6784bbcf8abf6f9cb00e370fdc2265e7efe
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