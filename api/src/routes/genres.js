const { Router } = require('express');
// const { Op, Genres } = require('../db.js');
const router = Router();
const controller = require('../controllers/index.js');

router.get('/', async (req, res) => {
    try {
        const result = controller.getGenres();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;