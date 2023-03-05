const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="https://i.etsystatic.com/34466454/r/il/e77f12/4204041465/il_fullxfull.4204041465_6z4e.jpg" alt="Error Kitty" />
          </main>
      </Def>
    )
  }
  

module.exports = error404

