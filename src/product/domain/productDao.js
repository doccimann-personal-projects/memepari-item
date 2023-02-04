const Product = require('./productSchema');

const productDao = {
  async findAll() {
    return await Product.find({});
  },

  async createProduct({
    name,
    price,
    description,
    detailDescription,
    author,
    imageUrl,
    category,
  }) {
    const newProduct = new Product({
      name,
      price,
      description,
      detailDescription,
      author,
      imageUrl,
      category,
    });

    return await newProduct.save();
  },
  async existsByName(name) {
    const foundProduct = await Product.findOne({
      name,
    });
    return foundProduct ? true : false; 
  },

  async getOneById(id) {
    return await Product.findById(id);
  },

  async findOneById(id) {
    return await Product.findById(id);
  },

  async deleteOneById(id) {
    return await Product.deleteOne({ id }); 
  },  
};

module.exports = productDao;
