const obj = {};
const tvShows = [
    {  
        Id: 1,
        titulo: 'LQ1',
        anio: 2017,
        pais: 'USA'
    },{
        Id: 2,
        titulo: 'LQ2',
        anio: 2015,
        pais: 'GT'
    },{
        Id: 3,
        titulo: 'LQ2',
        anio: 2015,
        pais: 'GT'
    }
];

obj.getArray =  (req, res, next)=>{       
    res.send(tvShows);
};

obj.postArray = (req, res, next)=>{ 
    tvShows.push(buildTVShow(tvShows.length, req.body));      
    res.send(tvShows);
};

obj.getById = (req, res, next)=>{
    let tvFind = tvShows.find((tvShow) => tvShow.Id === Number.parseInt(req.params.id));

    if(!tvFind){
        return res.send({error: `Show: ${req.params.id}, no encontrado`});
        //return res.send({error: 'Show: ' + req.params.id +', no encontrado'});
    }

    res.send(tvFind);
}

obj.deleteTVShow = (req, res, next) => {
    let indexTvShow = tvShows.findIndex((tvShow) => tvShow.Id === Number.parseInt(req.params.id));
    if(indexTvShow < 0){
        return res.send({error: `Id: ${req.params.id}, no encontrado`});
    }    
    res.send(tvShows.splice(indexTvShow, 1));
}

obj.updateTVShow = (req, res, next) => {
    let indexTvShow = tvShows.findIndex((tvShow) => tvShow.Id === Number.parseInt(req.params.id));
    if(indexTvShow < 0){
        return res.send({error: `Id: ${req.params.id}, no encontrado`});
    }
    let tvShow = tvShows[indexTvShow];

    tvShow = buildTVShow(indexTvShow, req.body);
    tvShows[indexTvShow] = tvShow;
    res.send(tvShows);
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