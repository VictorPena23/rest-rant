const router = require("express").Router();
const db = require("../models");

// INDEX
router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

// CREATE
router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("Validation error:", err);

      if (err && err.name === "ValidationError") {
        // Use your custom message instead of parsing individual fields
        const message = "Oops, seems to be a time error";

        res.render("places/new", { errorMsg: message });
      } else {
        res.render("error404");
      }
    });
});

// NEW
router.get("/new", (req, res) => {
  res.render("places/new");
});

// SHOW
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .populate("comments")
    .then((place) => {
      console.log(place.comments);
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// EDIT
router.get("/:id/edit", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/edit", { place });
    })
    .catch((err) => {
      res.render("error404");
    });
});

// UPDATE
router.put("/:id", (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/places/${req.params.id}`);
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// DELETE
router.delete("/:id", (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/places"))
    .catch((err) => {
      console.log(err);
      res.status(404).render("error404");
    });
});

// COMMENT
router.post("/:id/comment", (req, res) => {
  console.log(req.body);
  req.body.rant = req.body.rant ? true : false;

  db.Place.findById(req.params.id)
    .then((place) => {
      db.Comment.create(req.body)
        .then((comment) => {
          place.comments.push(comment.id);
          place.save().then(() => {
            res.redirect(`/places/${req.params.id}`);
          });
        })
        .catch((err) => {
          console.log("err", err);
          res.render("error404");
        });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

module.exports = router;
