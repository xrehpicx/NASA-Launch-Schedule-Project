const {planets} = require('../../model/planets.model.js');
// all i needed to do is destructure the planets import
function getAllPlanets (req, res){
    res.json(planets);
}

module.exports = {
    getAllPlanets
}