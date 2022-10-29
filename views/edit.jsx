const React = require('react')
const Default = require('./layouts/Default')

function Edit ({bakery, recipes}) {
  console.log('edit')
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
          <br />
          <input type="submit"/>
        </form>
      </Default>
    )
}

module.exports = Edit