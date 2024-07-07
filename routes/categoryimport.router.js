const express = require('express');

const category = require("../model/category.model");
const categories = require("../data/categories");

const router = express.Router();

router.route("/")
    router.route("/")
    .get(async (req, res) => {
        try {
            const categoriesInDB = await category.find({});
            res.json(categoriesInDB);
        } catch (err) {
            console.log(err);
            res.json({ message: "Could not retrieve categories from DB" });
        }
    })
    .post(async (req, res) => {
        try {
            await category.deleteMany({});
            const categoriesInDB = await category.insertMany(categories.data);
            res.json(categoriesInDB);
        } catch (err) {
            console.log(err); 
            res.json({ message: "Could not add categories to DB" });
        }
    });

module.exports = router;