const db = require('../dataBase').getInstance();

module.exports = {
    getAllProducts: () => {
        const ProductModel = db.getModel('Product');
        return ProductModel.findAll({})
    },

    getSingleProduct: (id) => {
        const ProductModel = db.getModel('Product');
        return ProductModel.findByPk(id);
    },

    createProduct: (product) => {
        const ProductModel = db.getModel('Product');
        return ProductModel.create(product)
    },

    deleteProduct: (id) => {
        const ProductModel = db.getModel('Product');
        return ProductModel.destroy({where: {id}});
    },

    updateProduct: (id, product) => {
        const ProductModel = db.getModel('Product');
        return ProductModel.update(product, {where: {id}})
    }
};
