const Wishlist = require("../model/wishlist.model");


const createWishlistHandler = async (req, res) => {
    try {
        const newWishlist = new Wishlist({
            hotelId: req.body.hotelId,
        });

        const savedWishlist = await newWishlist.save();
        res.status(201).json(savedWishlist);
    } catch (err) {
        res.status(500).json({ message: "Error creating a wishlist" });
    }
};

const deleteWishlistHandler = async (req, res) => {
    try {
        await Wishlist.findByIdAndDelete(req.params.id);
        res.json({ message: "Hotel removed from wishlist" });
    } catch (err) {
        res.status(500).json({ message: "Error removing hotel from wishlist" });
    }
};

const getWishlistHandler = async (req, res) => {
    try {
        const wishlist = await Wishlist.find({});
        wishlist
            ? res.json(wishlist)
            : res.status(404).json({ message: "No Data Found" });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

module.exports = { createWishlistHandler, deleteWishlistHandler, getWishlistHandler };