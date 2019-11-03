// exports.showCoures = (req, res) => {
//     res.render("courses");
// };

exports.showSignUp = (req, res) => {
    res.render("contact");
}
exports.showIndex = (req, res) => {
    // console.log;
    res.render("index");
}
exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
};

let courses = [{
        title: "easy",
        cost: 50
    },
    {
        title: "nomal",
        cost: 70,
    },
    {
        title: "head",
        cost: 90
    }
];

exports.showCoures = (req, res) => {
    res.render("courses", {
        offendCourses: courses
    });
};