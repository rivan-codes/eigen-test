const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    failOnErrors: true,
    openapi: '3.0.0',
    info: {
        title: 'Eigen API',
        version: '1.0.0',
        description: '',
    },
};
const options = {
    swaggerDefinition,
    apis: ['./routes/api.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;