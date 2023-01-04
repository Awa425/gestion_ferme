const personneRoutes = require('./personnes.routes');
const userRoutes = require('./user.routes');
const employeRoutes = require('./employes.routes');
const veterinaireRoutes = require('./veterinaires.routes');
const fermierRoutes = require('./fermiers.routes');
const fermeRoutes = require('./fermes.routes');
const animalesRoutes = require('./animales.routes');
const fermeFermier = require('./fermeFermier.routes');
const fermeVet = require('./fermeVeterinaire.routes');

module.exports = [
    personneRoutes,
    userRoutes,
    veterinaireRoutes,
    fermierRoutes,
    employeRoutes,
    fermeRoutes,
    animalesRoutes,
    fermeFermier,
    fermeVet,
]