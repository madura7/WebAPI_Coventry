function emailJob(req,res,next) {
    console.log("Sending Email...");
    next(); // need this to move to route handler
}


module.exports = emailJob;
