const express = require('express');
const Wishlist = require('../model/wishlist.model');
const { route } = require('./auth.router');

const verifyUser = require('../middleware/verifyUser');

const WishlistController = require('../controllers/wishlistController');

const { createWishlistHandler, deleteWishlistHandler, getWishlistHandler } = WishlistController;

const router = express.Router();

router.route("/")
    .post(verifyUser, createWishlistHandler)


router.route("/:id")
    .delete(verifyUser, deleteWishlistHandler)

router.route("/")
    .get(verifyUser, getWishlistHandler)

module.exports = router;

// error route and 404 route are not added in this file.