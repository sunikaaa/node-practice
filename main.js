const express = require("express"),
    app = express(),
    homeController = require("./controllers/homeController")

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.set("port", process.env.PORT || 3000);
app.get("/", (req, res) => {
    res.send("hello!");
});
app.get("/courses", homeController.showCoures);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);


app.listen(app.get("port"), () => {
    console.log(app.get("port:localhost"));
});