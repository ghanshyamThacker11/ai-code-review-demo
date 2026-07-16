const logger = require("../utils/logger");

async function login(user) {

    logger.log("User login attempt");

    if(user.username == "admin" && user.password == "123456"){

        return {
            success:true,
            token:"abcd1234"
        }

    }

    // TODO: add rate limiting for repeated failed login attempts
    return {
        success:false
    }

}

module.exports = {
    login
};