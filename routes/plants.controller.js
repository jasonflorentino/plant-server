const express = require('express');
const plantsService = require('./plants.service');
const router = express.Router();

// routes
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', createPlant);
router.delete('/:id', deletePlant);
router.put('/edit/:id', editPlant);
router.put('/water/:id', waterPlant);

module.exports = router;

function getAll(_req, res, next) {
  plantsService.getAll()
    .then(plants => res.status(200).json(plants))
    .catch(err => next(err));
}

function getById(req, res, next) {
  plantsService.getById(req.params.id)
    .then(plant => res.status(200).json(plant))
    .catch(err => next(err));
}

function createPlant(req, res, next) {
  plantsService.createPlant(req.body)
    .then(newPlant => res.status(201).json(newPlant))
    .catch(err => next(err));
}

function deletePlant(req, res, next) {
  plantsService.deletePlant(req.params.id)
    .then(newPlant => res.status(200).json(newPlant))
    .catch(err => next(err));
}

function editPlant(req, res, next) {
  plantsService.editPlant(req.params.id, req.body)
    .then(plant => res.status(200).json(plant))
    .catch(err => next(err));
}

function waterPlant(req, res, next) {
  plantsService.waterPlant(req.params.id)
    .then(plant => res.status(200).json(plant))
    .catch(err => next(err));
}