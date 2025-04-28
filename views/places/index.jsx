const React = require("react");
const Def = require("../default");

function getRandomImage() {
  const images = [
    'https://placekitten.com/400/400',
    'https://placedog.net/400/400',
    'https://loremflickr.com/400/400/food'
  ];
  return images[Math.floor(Math.random() * images.length)];
}

function index(data) {
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div key={index} className="col-sm-6">
        <h2>
          <a href={`/places/${place._id}`}>
            {place.name}
          </a>
        </h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img 
          src={place.pic && place.pic.length > 0 ? place.pic : getRandomImage()} 
          alt={place.name} 
          className="img-fluid"
        />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });

  return (
    <Def>
      <main>
        <h1>Places to Rant About</h1>
        <div className="row">{placesFormatted}</div>

        <div>
          <a href="/">
            <button className="btn btn-primary">HOME</button>
          </a>
        </div>
      </main>
    </Def>
  );
}

module.exports = index;
