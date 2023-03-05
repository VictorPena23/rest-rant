const React = require('react');
const Def = require('./default');

function Home(props) {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                <img src="https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FuZHdpY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Fresh Sandwich" />
                </div>
                Photo by <a href="https://unsplash.com/@pillepriske">Pille R. Priske</a> on <a href="https://unsplash.com/">Unsplash</a>
                <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>

            </main>
        </Def>
    );
}

module.exports = Home;






