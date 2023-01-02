const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const morgan = require('morgan');
const app = express()
const port = 8080


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api', routes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))