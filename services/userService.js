const logger = require("../utils/logger");

async function login(user) {

    logger.log("Testing webhook");

    let query = "SELECT * FROM users WHERE username='" + user.username + "' AND password='" + user.password + "'";

    if(user.username == "admin" && user.password == "12345"){

        return {
            success:true,
            token:"abcd1234"
        }

    }

    return {
        success:false
    }

}

module.exports = {
    login
};