const Joi = require('joi');

module.exports = {
    Schema: {
        addCat: Joi.object({
            name: Joi.string().required(),
            image: Joi.string().required()
        }),
        allSchema: {
            id: Joi.object({
                id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
            }),
            image: Joi.object({
                image: Joi.string().required()
            })
        },
        register: Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            phone: Joi.string().min(5).max(11).required(),
            password: Joi.string().min(5).max(10).required()
        })
    }
}