import Cars from "./views/cars.js";

export const handlerShowCars = async (req, res) => {
    const cars = await Cars.findAll();
    res.json(cars);
};

export const handlerCreateCars = async (req, res) => {
    const cars = await Cars.create(req.body);
    res.json({
    message: "Cars was added!",
});
};
