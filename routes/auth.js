const express = require("express");
const router = express.Router();

const { login } = require("../services/userService");

router.post("/login", async (req, res) => {

    const result = await login(req.body);

    res.json(result);

});

module.exports = router;