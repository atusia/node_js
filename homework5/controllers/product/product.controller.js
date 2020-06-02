const {productService} = require('../../service');
const {hashPassword} = require('../../helpers');
const ErrorHandler = require('../../error/ErrorHandler');

module.exports = {
    createProduct: async (req, res) => {
        try {
            const product = req.body;
            product.discountPass = await hashPassword(product.discountPass);

            await productService.createProduct(req.body);
            res.sendStatus(201);
        } catch (e) {
            res.json(e)
        }
    },

    getAllProducts: async (req, res) => {
        try {
            const products = await productService.getAllProducts();

            res.json(products)
        } catch (e) {
            res.json(e)
        }
    },

    getSingleProduct: async (req, res) => {
        try {
            const {id} = req.params;
            const product = await productService.getSingleProduct(id);

            res.json(product)
        } catch (e) {
            res.json(e)
        }
    },

    updateProduct: async (req, res) => {
        try {
            const {id} = req.params;
            const product = req.body;

            const [isUpdated] = await productService.updateProduct(id, product);

            isUpdated ? res.sendStatus(200) : res.json({updated: false})
        } catch (e) {
            res.json(e)
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const {id} = req.params;
            const isDeleted = await productService.deleteProduct(id);

            isDeleted ? res.sendStatus(204) : res.json({deleted: false});
        } catch (e) {
            res.json(e)
        }
    },
};
