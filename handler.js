import Cars from "./views/cars.js";

export const handlerShowCars = async (req, res) => {
    const cars = await Cars.findAll();
    res.json(cars);
};

export const handlerSearchCars = async (req, res) => {
    const cars = await Cars.findAll({
        where:{
            id : req.params.id
        }
    });
    res.json(cars[0]);
};

export const handlerCreateCars = async (req, res) => {
    const cars = await Cars.create(req.body);
    res.json({
    message: "Cars was added!",
});
};

export const handlerUpdateCars = async (req, res) => {
    const cars = await Cars.update(req.body,{
        where:{
            id : req.params.id
        }
    });
    res.json({
    message: "Cars was Updated!",
});
};

export const handlerDeleteCars = async (req, res) => {
    const cars = await Cars.destroy({
        where:{
            id : req.params.id
        }
    });
    res.json({
    message: "Cars was Deleted!",
});
};

