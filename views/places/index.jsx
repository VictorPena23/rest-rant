const React = require("react");
const Def = require("../default");

function index ({ places }) {
  const placesList = places.map(place => (
    <div key={place.name}>
      <h2>{place.name}</h2>
      <p>{place.city}, {place.state}</p>
      <p>{place.cuisines}</p>
      <img src={place.pic} alt={place.name} />
    </div>
  ));

  return (
    <Def>
      <main>
        <h1>PLACES INDEX PAGE</h1>
        {placesList}
      </main>
    </Def>
  );
}

module.exports = index;
