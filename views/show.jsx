const React = require('react')
const Default = require('./layouts/Default')

function Show ({bakery, index}) {
    console.log('showpage')
        return (
            <Default>
                <h3>{bakery.name}</h3>
                <img src = {bakery.image} alt = {bakery.name} />
                <p>{bakery.comments}</p>
                {/* <p>{bakery.getBakedBy()}</p> */}
                <a href={`/bakery/${bakery.id}/EDIT`}><button>EDIT</button></a>
                <form action = {`/bakery/${bakery.id}?_method=DELETE`} method='POST'>
                    <input type = 'submit' value = 'DELETE' />
                </form>
            </Default>
        )
}

module.exports = Show