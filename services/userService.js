const logger = require("../utils/logger");

async function login(user) {

    logger.log("Testing webhook");

    if(user.username == "admin" && user.password == "wohoo"){

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