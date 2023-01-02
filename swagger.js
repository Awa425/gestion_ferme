const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = [
    './routes/animales.routes',
    './routes/fermes.routes',
    './routes/user.routes'
]

swaggerAutogen(outputFile, endpointsFiles)