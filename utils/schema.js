const Joi = require('joi');

module.exports = {
    Schema: {
        addCat: Joi.object({
            name: Joi.string().required(),
            image: Joi.string().required()
        })
    }
}