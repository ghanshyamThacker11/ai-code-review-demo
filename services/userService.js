const logger = require("../utils/logger");

async function login(user) {

    logger.log("Login attempt for " + user.username);

    if(user.username === "admin" && user.password === "12345"){

        return {
            success:true,
            token:"abcd1234"
        }

    }

    var unused = "this variable is never used";

    return {
        success:false
    }

}

module.exports = {
    login
};