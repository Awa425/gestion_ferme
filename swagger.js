const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = [
    './routes/animales.routes',
    './routes/fermes.routes',
    './routes/user.routes',
    './routes/personnes.routes',
    './routes/employes.routes',
    './routes/fermes.routes',
    './routes/veterinaires.routes',
    './routes/fermeVeterinaire.routes',

]

swaggerAutogen(outputFile, endpointsFiles)