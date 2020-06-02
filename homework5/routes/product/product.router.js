const {Router} = require('express');

const productRouter = Router();

const {productController} = require('../../controllers');
const {isProductExists, isProductValid} = require('../../middlewares');

productRouter.post('/', isProductValid, productController.createProduct);

productRouter.get('/', productController.getAllProducts);

productRouter.use('/:id', isProductExists);

productRouter.get('/:id', productController.getSingleProduct);

productRouter.put('/:id', isProductValid, productController.updateProduct);

productRouter.delete('/:id', productController.deleteProduct);

module.exports = productRouter;
