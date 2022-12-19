const { Router } = require('express');
const { Op, Videogame } = require('../db.js');
const router = Router();
const controller = require('../controllers/index.js');

router.get('/', async (req, res) => {
    try {
        const { name } = req.query;
        if (name) {
            const result = await controller.getVideogamesByName(name);
            res.status(200).json(result);
        } else {
            const result = await controller.getVideogames();
            res.status(200).json(result);
        }
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    const { name, description, platforms} = req.body;
    if(!name || !description || !platforms) return res.status(404).send("Falta enviar datos obligatorios");

    try {
        const videogame = await controller.createVideogame(req.body);
        res.status(200).json(videogame);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;