const express = require("express");
const router = express.Router();
const passport = require("./passport");

passport.authenticate();

const auth = () => {
    return (req, res, next) => {
        passport.authenticate('local', (error, user, info) => {
            if(error) res.status(400).json({"statusCode" : 200 ,"message" : error});
            req.login(user, function(error) {
                if (error) return next(error);
                next();
            });
        })(req, res, next);
    }
}

const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return next()
    }
    return res.status(400).json({"statusCode" : 400, "message" : "not authenticated"})
}

router.get('/', (req, res) => {
    res.json("data");
})
router.get('/getData', isLoggedIn, (req, res) => {
    res.json("data")
})

router.post('/api/authenticate', auth(), (req, res) => {
    console.log("Potato1");
    res.status(200).json({"statusCode" : 200 ,"message" : "hello"});
    console.log("Potato2");
});

module.exports = router;