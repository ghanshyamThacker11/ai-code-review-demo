const logger = require("../utils/logger");

async function login(user) {

    logger.log("Login attempt for " + user.username);

    if(user.username === "admin" && user.password === "42123"){

        return {
            success:true,
            token:"abcd12554"
        }

    }

    var unused = "this is not variable is never used";

    return {
        success:false
    }

}

module.exports = {
    login
};