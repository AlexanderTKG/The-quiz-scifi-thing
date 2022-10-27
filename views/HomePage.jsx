const React = require("react");
const Default = require("./layouts/Default");

function HomePage() {
  console.log("HomePage");
  return (
    <Default>
      <html>
        <head>
          <title>Our Company</title>
        </head>
        <body>
          <h1>Welcome to Our Company</h1>
          <img
            src="../public/images/foodBackground.jpg"
            alt="background image"
          />
          <h2>Web Site Main Ingredients:</h2>
          <p>Pages (HTML)</p>
          <p>Style Sheets (CSS)</p>
          <p>Computer Code (JavaScript)</p>
          <p>Live Data (Files and Databases)</p>
        </body>
      </html>
    </Default>
  );
}

module.exports = HomePage;
