const express = require('express');
const logrouter = express.Router();
const viewController = require('./viewController');
const dataController = require('./dataController');

// INDEX
logrouter.get('/', dataController.index, viewController.index);

// NEW
logrouter.get('/newlog', viewController.new);

// DELETE
logrouter.delete('/:id', dataController.destroy, viewController.redirectHome);

// UPDATE
logrouter.put('/:id', dataController.update, viewController.redirectShow);

// CREATE
logrouter.post('/', dataController.create, viewController.redirectHome);

// EDIT
logrouter.get('/:id/edit', dataController.show, viewController.edit);

// SHOW
logrouter.get('/:id', dataController.show, viewController.show);

module.exports = logrouter;
