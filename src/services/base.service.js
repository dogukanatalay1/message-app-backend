const fetchAll = async (model) => {
    return await model.find();
};

const findById = async (model, id) => {
    return await model.findById(id);
};

const create = async (model, data) => {
    return await model.create(data);
};

const deleteAll = async (model) => {
    return await model.deleteMany();
};

module.exports = { fetchAll, create, findById, deleteAll };
