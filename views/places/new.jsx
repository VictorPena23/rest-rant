const React = require("react");
const Def = require("../default");

function newForm(data) {
  return (
    <Def>
      <main>
        <h1>Add a New Place</h1>

        {data.errorMsg && (
          <div className="alert alert-danger" role="alert">
            {data.errorMsg}
          </div>
        )}

        <form method="POST" action="/places">
          <div className="form-group">
            <label htmlFor="name">Place Name</label>
            <input className="form-control" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="pic">Place Picture</label>
            <input className="form-control" id="pic" name="pic" />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input className="form-control" id="city" name="city" />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input className="form-control" id="state" name="state" />
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines</label>
            <input
              className="form-control"
              id="cuisines"
              name="cuisines"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="founded">Founded Year</label>
            <input
              className="form-control"
              id="founded"
              name="founded"
              type="number"
              min="1673"
              max={new Date().getFullYear()}
              defaultValue={new Date().getFullYear()}
              required
            />
          </div>

          <input className="btn btn-primary" type="submit" value="Add Place" />
        </form>
      </main>
    </Def>
  );
}

module.exports = newForm;
