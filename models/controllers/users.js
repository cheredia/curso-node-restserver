const {response} = require('express');

const userGet = (req, res = response) => {

  const { q, nombre, apikey } = req.query;

  res.json({
    msg: 'get API - controller ',
    query
  })
}

const userPost = (req, res = response) => {

  const { nombre, edad } = req.body;

  res.json({
    msg: 'post API - controller ',
    nombre,
    edad
  })
}

const userPut = (req, res = response) => {
  const id = req.params.id;
  res.json({
    msg: 'put API - controller ',
    id

  })
}

const userPatch = (req, res = response) => {
  res.json({
    msg: 'patch API - controller '
  })
}

const userDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - controller '
  })
}

module.exports = {
  userGet,
  userPost,
  userPut,
  userPatch,
  userDelete
}