const fetchAll = (model) => {
    return model.find();
};

const findById = (model, id) => {
    return model.findById(id);
};

const create = (model, data) => {
    return model.create(data);
};

module.exports = { fetchAll, create, findById };
