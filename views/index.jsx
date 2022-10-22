const React = require('react')
const Default = require('./layouts/Default')

function Index ({main, title}) {
    return (
        <Default title = {title}>
            <h2>Something Random</h2>
        </Default>
    )
}

// function Index ({main, bakers, title}) {
//     return (
//         <Default title = {title}>
//             <h2>Index Page</h2>
//             <h3>Bakers</h3>
//             <ul>
//                 {
//                     bakers.map((baker) => {
//                         return(
//                             <li key = {baker._id}>
//                                 <a href = {`/bakers/${baker._id}`}>{baker.name}</a> 
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//             <h3>main</h3>
//             {/* <p>I have {main[0].name} bread!</p> */}
//             <div className = "newButton">
//                 <a href = "/main/new"><button>Add a new bread</button></a>
//             </div>
//             <ul>
//                 {
//                     main.map((bread, index) => {
//                         return (
//                             <li key = {bread.id}>
//                                 <a href = {`/main/${bread._id}`}>
//                                     {bread.name}
//                                 </a>
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//         </Default>
//     )
// }

module.exports = Index