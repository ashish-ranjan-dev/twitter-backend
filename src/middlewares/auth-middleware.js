import passport from "passport";

async function authenticateUser(req, res, next) {
    passport.authenticate("jwt", (err, user) => {
        if (err) {
            next(err);
        }
        if (!user) {
            return res.status(401).json({
                "message": "Unauthorized access"
            })
        }
        // adding user to request 
        req.user = user;
        next();
    })(req, res, next);
};

export default authenticateUser;