const React = require('react')
const Def = require('../default')

function edit_form ({place}) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
                <form method="POST" action= {`/places/${place._id}?_method=PUT`}>
                    <div className="form-group">
                        <label htmlFor="name"> Name</label>
                            <input className="form-control" id="name" name="name" defaultValue={place.name} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic"> Picture</label>
                            <input className="form-control" type="pic" id="pic" name="pic" defaultValue={place.pic} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city"> City</label>
                            <input className="form-control" type="city" id="city" name="city" defaultValue={place.city}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state"> State</label>
                            <input className="form-control" type="state" id="state" name="state" defaultValue={place.state}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                            <input className="form-control" type="cuisines" id="cuisines" name="cuisines" defaultValue={place.cuisines} required/>
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor= "founded">Founded Year</label>
                        <input
                            type ="number"
                            className = "form-control"
                            id = "founded"
                            name = "founded"
                            defaultValue = {new Date().getFullYear()}
                        />
                    </div> 
                        <input className="btn btn-primary" type="submit" value="Update Place"/>
                </form>
          </main>
        </Def>
    )
}


module.exports = edit_form