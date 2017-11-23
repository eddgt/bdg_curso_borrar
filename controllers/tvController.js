const mongoose = require('mongoose');
const TVShow = mongoose.model('TVShow');
const obj = {};

obj.getArray =  (req, res, next)=>{
    TVShow.find()
    .then(resultado => res.send(resultado))
    .catch(err => res.send({error: err}));
};

obj.postArray = (req, res, next)=>{
    let newTVShow = new TVShow({
        titulo: req.body.titulo,
        anio: req.body.anio,
        pais: req.body.pais
    });

    newTVShow.save()
    .then(result => res.send(result))
    .catch(err => res.send({error: err}));
};

obj.getById = (req, res, next)=>{

    TVShow.findById(req.params.id)
    .then(result => res.send(result))
    .catch(err => res.send({error: err}));
}

obj.deleteTVShow = (req, res, next) => {
    TVShow.findByIdAndRemove(req.params.id)
    .then(result => res.send(result))
    .catch(err => res.send({error: err}));
}

obj.updateTVShow = (req, res, next) => {

    TVShow.findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.send(result))
    .catch(err => res.send({error: err}));
};

const buildTVShow = (id, body) => {
    return {
        Id: id,
        anio: body.anio,
        pais: body.pais,
        titulo: body.titulo
    };
}

module.exports = obj;