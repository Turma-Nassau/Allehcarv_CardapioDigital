const connection = require('./connection');

const getAll = async () =>{
    const [cliente] = await connection.execute('SELECT * FROM cliente');
    return cliente;
};

const createCliente = async (cliente) => {
    const { nome } = cliente;

    const query = 'INSERT INTO cliente(nome, sexo, idade, endereco, telefone) VALUES (?, ?, ?, ?, ?)';
    const [createdCliente] = await connection.execute(query, [nome, cliente.sexo, cliente.idade, cliente.endereco, cliente.telefone]);
    return {insertId: createdCliente.insertId};
};

const deleteCliente = async(id) => {
    const [removedCliente] = await connection.execute('DELETE FROM cliente WHERE id_cliente= ?', [id]);
    return removedCliente;
};

const updateCliente = async(id, cliente) => {
    const {nome} = cliente;
    const [updatedCliente] = await connection.execute('UPDATE cliente SET nome = ?, sexo = ?, idade = ?, endereco = ?, telefone = ? WHERE id_cliente = ?', [nome, cliente.sexo, cliente.idade, cliente.endereco, cliente.telefone, id]);
    return updatedCliente;
};

module.exports = {
    getAll,
    createCliente,
    deleteCliente,
    updateCliente,
};