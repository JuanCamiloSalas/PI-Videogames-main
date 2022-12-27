const { Router } = require('express');
// const { Op, Videogame } = require('../db.js');
const router = Router();
const controller = require('../controllers/index.js');

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        //const { createdInDb } = req.query;//se va mandar este valor desde el front
        const result = await controller.getVideogameDetails(id/* , createdInDb */);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;