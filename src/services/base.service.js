const fetchAll = async (model) => {
    return await model.find();
};

const findById = async(model, id) => {
    return await model.findById(id);
};

const create = async (model, data) => {
    return await model.create(data);
};

module.exports = { fetchAll, create, findById };
