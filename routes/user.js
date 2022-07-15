const { Router } = require('express');
const { userGet, userPost, userPut, userPatch, userDelete } = require('../models/controllers/users');

const router = Router();

router.get('/', userGet )
router.post('/', userPost )
router.put('/:id', userPut )
router.patch('/', userPatch )
router.delete('/', userDelete )




module.exports = router;

