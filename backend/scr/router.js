const express = require('express');

const clienteController = require('./controllers/clienteController');
const clienteMiddleware = require('./middlewares/clienteMiddlewares');

const router = express.Router();

router.get('/cliente', clienteController.getALL);
router.post('/cliente',
    clienteMiddleware.validateName,
    clienteMiddleware.validateName,
    clienteMiddleware.validateSex,
    clienteMiddleware.validateAge,
    clienteMiddleware.validateAdress,
    clienteMiddleware.validateTelephone, clienteController.createCliente);
router.delete('/cliente/:id', clienteController.deleteCliente);
router.put('/cliente/:id',
    clienteMiddleware.validateName,
    clienteMiddleware.validateName,
    clienteMiddleware.validateSex,
    clienteMiddleware.validateAge,
    clienteMiddleware.validateAdress,
    clienteMiddleware.validateTelephone, clienteController.updateCliente);

module.exports = router;
