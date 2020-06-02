const Joi = require('joi');

module.exports = Joi.object().keys({
    title: Joi.string().trim().alphanum().min(2).max(150).required().allow(''),
    price: Joi.number().integer().min(0).required(),
    description: Joi.string().trim().optional().allow(null, ''),
    discountPass: Joi.string().trim().min(8).optional(),
});
