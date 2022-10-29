const React = require('react')
const Default = require('./layouts/Default')

function New ({recipes}) {
    console.log('new recipe form')
    return (
        <Default>
            <h1>New Gourmet Recipes</h1>
            <form action = "/bakery" method = "POST">
                <label htmlFor = "name">Recipe Name<a style={{ marginLeft: '2rem' , lineHeight: '100px'}}></a></label>
                <input
                    type = "text"
                    name = "name"
                    id = "name"
                    required
                />
                <br />
                <label htmlFor = "image">Image URL<a style={{ marginLeft: '3rem' , lineHeight: '100px' }}></a></label>
                <input
                    type = "text"
                    name = "image"
                    id = "image"
                    required
                />
                <br />
                <label htmlFor = "comments">Comments<a style={{ marginLeft: '3rem' , lineHeight: '100px' }}></a></label>
                <input
                    type = "text"
                    name = "text"
                    id = "text"
                />
                <br />
                <input type = "submit" />
            </form>
        </Default>
    )
}

module.exports = New