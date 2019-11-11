"use strict"

const express = require("express"),
    app = express(),
    errorController = require("./controllers/errorController"),
    homeController = require("./controllers/homeController"),
    subscribersController = require("./controllers/subscribersController"),
    layouts = require("express-ejs-layouts"),
    mongoose = require("mongoose"),
    Subscriber = require("./models/subscriber");

mongoose.Promise = global.Promise;
mongoose.connect(
    "mongodb://localhost:27017/recipe_db", {
        useNewUrlParser: true
    }
);
const db = mongoose.connection;
db.once("open", () => {
    console.log("mongodb is connected")
});

let myQuery = Subscriber.find({});
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

app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
    console.log(req.data, "sb");
    res.render("subscribers", {
        subscribers: req.data
    });
});

app.get("/", homeController.showIndex);
app.get("/courses", homeController.showCoures);
app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);


app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
    console.log(app.get("port:localhost"));
});