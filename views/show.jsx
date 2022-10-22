const React = require('react')
const Default = require('./layouts/Default')

function Show ({bakery, index}) {
    // Confirm getting bread data in terminal.
    // console.log(bread.name)
        return (
            <Default>
                <h2>Show Page</h2>
                <h3>{bakery.name}</h3>
                <p>
                    and it
                    {
                        bakery.hasGluten
                        ? <span> does </span>
                        : <span> does NOT </span>
                    }
                    have gluten.
                </p>
                <li><a href = '/bakery'>Go home</a></li>
                <img src = {bakery.image} alt = {bakery.name} />
                <p>{bakery.getBakedBy()}</p>
                <a href={`/bakery/${bakery.id}/edit`}><button>Edit</button></a>
                <form action = {`/bakery/${bakery.id}?_method=DELETE`} method='POST'>
                    <input type = 'submit' value = 'DELETE' />
                </form>
            </Default>
        )
}

module.exports = Show