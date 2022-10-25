const React = require('react')
const Default = require('./layouts/Default')

function Aboutus () {
    console.log('About Us Page')
    return (
      <Default>
        <html>
          <head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <style>
              {`
                body {
                  font-family: Arial, Helvetica, sans-serif;
                  margin: 0;
                }

                html {
                  box-sizing: border-box;
                }

                *, *:before, *:after {
                  box-sizing: inherit;
                }

                .column {
                  float: left;
                  width: 33.3%;
                  margin-bottom: 16px;
                  padding: 0 8px;
                }

                .card {
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                  margin: 8px;
                }

                .about-section {
                  padding: 50px;
                  text-align:center;
                  background-color: #474e5d;
                  color: white;
                }

                .container {
                  padding: 0 16px;
                }

                .container::after, row::after {
                  contact:"";
                  clear:both;
                  display: table;
                }

                .title {
                  color: grey;
                }

                .button {
                  border: none;
                  outline: 0;
                  display: inline-block;
                  padding: 8px;
                  color: white;
                  background-color: #000;
                  text-align:center;
                  cursor: pointer;
                  width: 100%;
                }

                .button:hover {
                  background-color: #555
                }

                @media screen and (max-width: 650px) {
                  .column {
                    width: 100%;
                    display: block;
                  }
                }
              `}
            </style>
          </head>
          <body>
            <div class="about-section">
              <h1>About Us Page</h1>
              <p>Some text</p>
              <p>resize the browser</p>
            </div>

            <h2
              style={{
                textAlign: "center",
              }}
            >
              Our Team
            </h2>
            <div class="row">
              <div class="column">
                <div class="card">
                  <img
                    src="https://www.w3schools.com/w3images/team1.jpg"
                    alt="Jane"
                    style={{
                      width: "100%",
                    }}
                  />
                  <div class="container">
                    <h2>Jane Doe</h2>
                    <p class="title">CEO & founder</p>
                    <p>Some text</p>
                    <p>jane@example.com</p>
                    <p>
                      <button class="button">Contact</button>
                    </p>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  <img
                    src="https://www.w3schools.com/w3images/team1.jpg"
                    alt="Jane"
                    style={{
                      width: "100%",
                    }}
                  />
                  <div class="container">
                    <h2>Jane Doe</h2>
                    <p class="title">CEO & founder</p>
                    <p>Some text</p>
                    <p>jane@example.com</p>
                    <p>
                      <button class="button">Contact</button>
                    </p>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  <img
                    src="https://www.w3schools.com/w3images/team1.jpg"
                    alt="Jane"
                    style={{
                      width: "100%",
                    }}
                  />
                  <div class="container">
                    <h2>Jane Doe</h2>
                    <p class="title">CEO & founder</p>
                    <p>Some text</p>
                    <p>jane@example.com</p>
                    <p>
                      <button class="button">Contact</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      </Default>
    );
}

module.exports = Aboutus