const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // TODO: Find all categories
  // Be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // TODO: Find one category by its `id` value
  // Be sure to include its associated Products
});

router.post('/', (req, res) => {
  // TODO: Create a new category
});

router.put('/:id', (req, res) => {
  // TODO: Update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // TODO: Delete a category by its `id` value
});

module.exports = router;
