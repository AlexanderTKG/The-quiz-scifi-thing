const React = require('react')
const Default = require('./layouts/Default')

function New ({recipes}) {
    console.log('new recipe form')
    return (
        <Default>
            <h4>New recipe in mind? Add it to Grandma's list!</h4>
            {/* <div className = "backButton">
                <a href = "/bakery"><button>Go back to the index</button></a>
            </div> */}
            <form action = "/bakery" method = "POST">
                <label htmlFor = "name">Recipe Name</label>
                <input
                    type = "text"
                    name = "name"
                    id = "name"
                    required
                />
                <label htmlFor = "image">Image URL</label>
                <input
                    type = "text"
                    name = "image"
                    id = "image"
                />
                <br />
                <input type = "submit" />
            </form>
        </Default>
    )
}

module.exports = New