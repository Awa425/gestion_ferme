const express = require('express')
const cors = require('cors');
const routes = require('./routes')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const models = require('./models')
const morgan = require('morgan');
const app = express()
const port = 8080

app.use('*', cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
})
app.use(express.json())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('/', (req, res) => res.send('Hello World!'))
models.sequelize.sync()
app.use('/api', routes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))