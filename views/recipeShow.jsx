// const React = require('react')
// const Default = require('./layouts/Default')

// function recipeShow ({recipe}) {
//     console.log(recipe)
//     return (
//       <Default>
//           <h3>{recipe.name}</h3>
//             <p>About {recipe.name}: {recipe.bio}</p>
//             <ul>
//                 {
//                 recipe.bakery.map((bakery)=> {
//                     return (
//                         <li key={bakery.id}>
//                             {bakery.name}
//                         </li>
//                     )
//                 })
//                 }
//                 <form action = {`/recipes/${recipe.id}?_method=DELETE`} method='POST'>
//                     <input type = 'submit' value = 'DELETE' />
//                 </form>
//             </ul>
//       </Default>
//     )
// }

// module.exports = recipeShow