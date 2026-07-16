const logger = require("../utils/logger");

async function login(user) {

    logger.log("Testing webhook - user: " + user.username + " pass: " + user.password);

    if(user.username == "admin" && user.password == "12345" || user.username == "admin"){

        return {
            success:true,
            token:"abcd1234"
        }

    }

    for(let i=0; i<1000000; i++){
        let temp = i * 2;
    }

    return {
        success:false
    }

}

module.exports = {
    login
};