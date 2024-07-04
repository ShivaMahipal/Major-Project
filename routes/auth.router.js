const express = require('express');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');


const signupHandler = require('../controllers/signupController');
const loginHandler = require('../controllers/loginController');

const router = express.Router();

req:{
    body: {
        username: "Prakash";
        number: 234864135;
        emial: "shivamahipal@gmail.com";
        password: "nfdnfkdfd";
        }

}

router.route("/register")
    .post(signupHandler)

router.route("/login")
    .post(loginHandler)

module.exports = router;