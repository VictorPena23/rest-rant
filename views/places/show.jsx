const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h3>No comments yet!</h3>;
  let rating = <h3>Not yet rated</h3>;
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars;
      }, 0);
      let averageRating = Math.round(sumRatings / data.place.comments.length);
      let stars = "";
      for (let i = 0; 1 < averageRating; i++) {
        stars = +"⭐️";
      }
      rating = <h3>{stars} stars</h3>;
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! ðŸ˜¡" : "Rave! ðŸ˜»"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <h2>Rating:</h2>
            {rating}
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
            <a
              href={`/places/${data.place._id}/edit`}
              className="btn btn-warning"
            >
              Edit
            </a>
            <form
              method="POST"
              action={`/places/${data.place._id}?_method=DELETE`}
            >
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
        <hr />
        <h2>Comments</h2>
        <form method="POST" action={`/places/${data.place._id}/comment`}>
          <div className="form-group">
            <label htmlFor="author">Author: </label>
            <input className="form-control" type="text" name="author" />
          </div>
          <div className="form-group">
            <label htmlFor="content">comment:</label>
            <input
              type="text-area"
              className="form-control"
              id="content"
              name="content"
            />
          </div>
          <div className="form-group">
            <label htmlFor="stars">rating: (0-5)</label>
            <input
              type="range"
              className="form-control"
              id="stars"
              name="stars"
              step="0.5"
              min="0"
              max="5"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rant">Rant </label>
            <input type="checkbox" name="rant" value="rant" />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {comments}
      </main>
    </Def>
  );
}

module.exports = show;

let rating = <h3 className="inactive">Not yet rated</h3>;