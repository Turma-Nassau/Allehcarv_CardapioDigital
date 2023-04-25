const clienteModel = require('../models/clienteModel');

const getALL = async (_req, res) => {

    const cliente = await clienteModel.getAll();

    return res.status(200).json(cliente);
};

const createCliente = async (req, res) => {
    const createdCliente = await clienteModel.createdCliente(req.body);
    return res.status(201).json(createdCliente);
};

const deleteCliente = async (req,res) => {
    const {id} = req.params;

    await clienteModel.deleteCliente(id);
    return res.status(204).json();
};

const updateCliente = async (req, res) => {
    const {id} = req.params;

    await clienteModel.updateCliente(id, req.body);
    return res.status(204).json();
};

module.exports = {
    getALL,
    createCliente,
    deleteCliente,
    updateCliente,
};