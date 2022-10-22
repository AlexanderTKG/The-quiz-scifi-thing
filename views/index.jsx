const React = require('react')
const Default = require('./layouts/Default')

function Index ({bakery, bakers, title}) {
    return (
        <Default title = {title}>
            <h2>Index Page</h2>
            <h3>Bakers</h3>
            <ul>
                {
                    bakers.map((baker) => {
                        return(
                            <li key = {baker._id}>
                                <a href = {`/bakers/${baker._id}`}>{baker.name}</a> 
                            </li>
                        )
                    })
                }
            </ul>
            <h3>Bakery</h3>
            {/* <p>I have {breads[0].name} bread!</p> */}
            <div className = "newButton">
                <a href = "/bakery/new"><button>Add a new bread</button></a>
            </div>
            <ul>
                {
                    bakery.map((bakery, index) => {
                        return (
                            <li key = {bakery.id}>
                                <a href = {`/bakery/${bakery._id}`}>
                                    {bakery.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </Default>
    )
}

module.exports = Index