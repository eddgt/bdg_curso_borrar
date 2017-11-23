const jwt = require('jwt-simple');
const secret = '123456';
const objToken = {};

objToken.crearToken = (req, res, next) => {

    let token = jwt.encode(req.body, secret);    
    res.send({token});

};

objToken.validarToken = (req, res, next) => {
    
    let payload = jwt.decode(req.params.token, secret);    
    res.send({payload});

};

module.exports = objToken