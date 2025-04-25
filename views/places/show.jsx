const React = require('react');
const Def = require('../default');

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        
        <div>
          <img src={data.place.pic} alt={data.place.name} />
          <p>Located in {data.place.city}, {data.place.state}</p>
        </div>

        <hr />

        {/* Highlight showEstablished() */}
        <h3>{data.place.showEstablished()}</h3>

        {/* Demoted cuisines from h3 to h4 */}
        <h4>Cuisines served: {data.place.cuisines}</h4>

        <hr />

        <h3>Comments</h3>
        <p>No comments yet!</p>
      </main>
    </Def>
  );
}

module.exports = show;
