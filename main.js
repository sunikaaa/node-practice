const express = require("express"),
    app = express(),
    errorController = require("./controllers/errorController"),
    homeController = require("./controllers/homeController"),
    subscribersController = require("./controllers/subscribersController"),
    layouts = require("express-ejs-layouts"),
    mongoose = require("mongoose"),
    Subscriber = require("./models/subscriber");

mongoose.connect(
    "mongodb://localhost:27017/recipe_db", {
        useNewUrlParser: true
    }
);
const db = mongoose.connection;
db.once("open", () => {
    console.log("mongodb is connected")
});

let myQuery = Subscriber.findOne({
    name: "sunicaa"
}).where("email", /wexler/);

myQuery.exec((error, data) => {
    if (data) console.log(data.name);
})

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());


app.get("/", homeController.showIndex);
app.get("/courses", homeController.showCoures);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);
app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
    res.render("subscribers", {
        subscribers: req.data
    });
});


app.use(errorController.logErrors);
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(app.get("port:localhost"));
});