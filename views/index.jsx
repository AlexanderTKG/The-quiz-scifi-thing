const React = require('react')
const Default = require('./layouts/Default')

function Index ({bakery, recipes, title}) {
    console.log('main page')
    return (
      <Default title={title}>
        <h3>Bakery Collection</h3>
        <ul>
          <style>
            {`
                a:link { 
                        text-decoration: none; 
                }
            `}
          </style>
          {bakery.map((bakery, index) => {
            return (
              <li key={bakery.id}>
                <a href={`/bakery/${bakery._id}`}>{bakery.name}</a>
              </li>
            );
          })}
        </ul>
      </Default>
    );
}

module.exports = Index