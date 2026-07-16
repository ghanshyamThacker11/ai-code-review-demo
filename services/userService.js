const logger = require("../utils/logger");

async function login(user) {

    logger.log("User Login");

    //toodo 

    if(user.username == "admin" && user.password == "123456"){

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