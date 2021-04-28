const { response } = require('express');


const usuariosGet = (req, res = response ) => {
    res.json({
        msg: 'get API - contro get'
    });
}

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - contro put',
        id
    });
}

const usuariosPost = (req, res) => {

    const body = req.body;

    res.json({
        msg: 'post API - contro post',
        body
    });
}

const usuariosPAtch = (req, res) => {
    res.json({
        msg: 'patch API - contro patch'
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - contro delete'
    });
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPAtch,
    usuariosDelete
}