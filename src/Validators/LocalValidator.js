const {celebrate ,Segments, Joi} = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            country: Joi.string().required(),
            price: Joi.string().required(),
            itinerary: Joi.string().required(),
        }),
    }),
    getByLocal: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            local_id: Joi.string().required(),
        }),
    }),
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            local_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().optional(),
            country: Joi.string().optional(),
            price: Joi.string().optional(),
            itinerary: Joi.string().optional(),
        })
        .min(1),
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            local_id: Joi.string().required(),
        }),
    }),
};