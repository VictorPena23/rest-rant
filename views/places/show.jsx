const React = require("react");
const Def = require("../default");

function show(data) {
  let place = data.place;
  return (
    <Def>
      <main>
        <h1>{place.name}</h1>

        <div>
          {/* Image with fallback to kitten pic if no image provided */}
          <img src={place.pic || 'https://placekitten.com/400/400'} alt={place.name} />
          <h3>Located in {place.city}, {place.state}</h3>
        </div>

        <div>
          <h3>Description</h3>
          <h4>{place.showEstablished()}</h4>
          <h4>Cuisines served: {place.cuisines}</h4>
        </div>

        <div>
          <h3>Comments</h3>
          <p>No comments yet!</p>
        </div>

        <a href={`/places/${place._id}/edit`}>
          <button className="btn btn-warning">Edit</button>
        </a>

        <form method="POST" action={`/places/${place._id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">Delete</button>
        </form>

      </main>
    </Def>
  );
}

module.exports = show;
