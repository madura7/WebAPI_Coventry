function authenticate(req,res,next) {
    console.log("Authenticating user...");
    next(); // need this to move to route handler
}


module.exports = authenticate;


