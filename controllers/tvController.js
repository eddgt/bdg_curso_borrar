const mongoose = require('mongoose');
const TVShow = mongoose.model('TVShow');
const obj = {};

const todos = (callback)=>{
    TVShow.find((err, tvshows) => { 
        if(err){
            return callback({error: err}, null);
        }
        callback(null, tvshows);
    });
};

obj.getArray =  (req, res, next)=>{
    /*TVShow.find((err, tvshows) => { 
        if(err){
            return res.send({error: err});
        }
        res.send(tvshows);
    });*/
    todos((error, result) =>{
        if(error){
            return res.send({error: error});
        }
        res.send(result);
    });
};

obj.postArray = (req, res, next)=>{
    let newTVShow = new TVShow({
        titulo: req.body.titulo,
        anio: req.body.anio,
        pais: req.body.pais
    });

    newTVShow.save((err, result) => {
        if(err){
            return res.send({error: err});
        }
        res.send(result);
    });
};

obj.getById = (req, res, next)=>{
    TVShow.findById(req.params.id, (err, tvshow) => {
        if(err){
            return res.send({error: err});
        }
        res.send(tvshow);
    });
}

obj.deleteTVShow = (req, res, next) => {
    TVShow.findByIdAndRemove(req.params.id, (err, result) => {
        if(err){
            return res.send({error: err});
        }
        res.send(result);
    });
}

obj.updateTVShow = (req, res, next) => {
    TVShow.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        if(err){
            return res.send(err);
        }
        res.send(result);
    });
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