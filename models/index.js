// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// TODO: Create:
// Products belongsTo Category

// TODO: Create:
// Categories have many Products

// TODO: Create:
// Products belongToMany Tags (through ProductTag)

// TODO: Create:
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
