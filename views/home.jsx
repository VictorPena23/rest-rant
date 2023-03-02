const React = require('react');
const Def = require('./default');

function Home(props) {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>
<link rel="stylesheet" href="/style.css" />

            </main>
        </Def>
    );
}

module.exports = Home;






