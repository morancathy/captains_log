const express = require('express');
const foodrouter = express.Router();
// const foodrouter = require('express').Router();
const foodViewController = require('./foodViewController');
const foodDataController = require('./foodDataController');

const methodOverride = require('method-override');
foodrouter.use(methodOverride('_method'));

// INDEX
foodrouter.get('/foodlog/', foodDataController.index, foodViewController.index);

// NEW
foodrouter.get('/foodlog/new', foodViewController.new)

// DELETE
foodrouter.delete('/foodlog/:id', foodDataController.destroy, foodViewController.redirectHome);

// UPDATE
foodrouter.put('/foodlog/:id', foodDataController.update, foodViewController.redirectShow);

// CREATE
foodrouter.post('/foodlog/', foodDataController.create, foodViewController.redirectHome);

// EDIT
foodrouter.get('/foodlog/:id/edit', foodDataController.show, foodViewController.edit);

// SHOW
foodrouter.get('/foodlog/:id', foodDataController.show, foodViewController.show);

module.exports = foodrouter;
