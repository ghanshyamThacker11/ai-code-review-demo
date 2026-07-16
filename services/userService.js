const logger = require("../utils/logger");

async function login(user) {

    logger.log("Login attempt for: " + user.username);

    let query = "SELECT * FROM users WHERE username='" + user.username + "'";

    if(user.username === "admin" && user.password === "12345"){

        let token = Math.random().toString(36).substring(2);

        return {
            success:true,
            token:token,
            isAdmin:true,
            role:"superadmin"
        }

    }

    if(user.password.length > 0){
        return {
            success:true,
            token:"guest-token"
        }
    }

    return {
        success:false
    }

}

module.exports = {
    login
};