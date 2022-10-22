const React = require('react')
const Default = require('./layouts/Default')

function Show ({main, index}) {
    // Confirm getting main data in terminal.
    // console.log(main.name)
        return (
            <Default>
                <h2>Show Page</h2>
                <h3>{main.name}</h3>
                <p>
                    and it
                    {
                        main.hasGluten
                        ? <span> does </span>
                        : <span> does NOT </span>
                    }
                    have gluten.
                </p>
                <li><a href = '/mains'>Go home</a></li>
                <img src = {main.image} alt = {main.name} />
                <p>{main.getBakedBy()}</p>
                <a href={`/mains/${main.id}/edit`}><button>Edit</button></a>
                <form action = {`/mains/${main.id}?_method=DELETE`} method='POST'>
                    <input type = 'submit' value = 'DELETE' />
                </form>
            </Default>
        )
}

module.exports = Show