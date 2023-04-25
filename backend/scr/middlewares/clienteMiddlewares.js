const validateName = (req, res, next) => {
    const {body} = req;

    if (body.nome === undefined) {
        return res.status(400).json({message: 'O campo "nome" é obrigatório'});
    }

    if (body.nome === '') {
        return res.status(400).json({message: 'O campo "nome" não pode ser vazio'});
    }
    next();
};

const validateSex = (req, res, next) => {
    const {body} = req;

    if (body.sexo === undefined) {
        return res.status(400).json({message: 'O campo "sexo" é obrigatório'});
    }

    if (body.sexo === '') {
        return res.status(400).json({message: 'O campo "sexo" não pode ser vazio'});
    }
    next();
};

const validateAge = (req, res, next) => {
    const {body} = req;

    if (body.idade === undefined) {
        return res.status(400).json({message: 'O campo "idade" é obrigatório'});
    }

    if (body.idade === '') {
        return res.status(400).json({message: 'O campo "idade" não pode ser vazio'});
    }
    next();
};

const validateAdress = (req, res, next) => {
    const {body} = req;

    if (body.endereco === undefined) {
        return res.status(400).json({message: 'O campo "endereço" é obrigatório'});
    }

    if (body.endereco === '') {
        return res.status(400).json({message: 'O campo "endereço" não pode ser vazio'});
    }
    next();
};

const validateTelephone = (req, res, next) => {
    const {body} = req;

    if (body.telefone === undefined) {
        return res.status(400).json({message: 'O campo "telefone" é obrigatório'});
    }

    if (body.telefone === '') {
        return res.status(400).json({message: 'O campo "telefone" não pode ser vazio'});
    }
    next();
};

module.exports = {
    validateName,
    validateSex,
    validateAge,
    validateAdress,
    validateTelephone
};