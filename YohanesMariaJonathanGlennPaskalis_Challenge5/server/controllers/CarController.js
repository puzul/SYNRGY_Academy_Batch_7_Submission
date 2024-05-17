import Car from "../models/CarModel.js";
import fs from "fs";

export const getCars = async(req, res) => {
  try {
    const response = await Car.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const getCarById = async(req, res) => {
  try {
    const response = await Car.findOne({
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const createCar = async(req, res) => {
  try {
    console.log(req.body.type);
    await Car.create({
      type: req.body.type,
      rentPerDay: req.body.rentPerDay,
      image: `${req.file.destination.slice(6)}/${req.file.filename}`
    });
    res.redirect('/cars');
  } catch (error) {
    console.log(error.message);
  }
}

export const updateCar = async(req, res, next) => {
  try {
    const getResponse = await Car.findOne({
      where: {
        id: req.params.id,
      }
    })
    if (getResponse) {
      const oldImage = getResponse.image;
      if (req.file) {
        try {
          req.body.image = `${req.file.destination.slice(6)}/${req.file.filename}`;
          fs.unlinkSync(`public${oldImage}`)
        }
        catch (error) {
          console.log(error)
        };
      }
      await Car.update(req.body, {
        where: {
          id: req.params.id,
        }
      })
    }
    else next();
    res.redirect('/cars');
  } catch (error) {
    console.log(error.message);
  }
}

export const deleteCar = async(req, res) => {
  try {
    await Car.destroy({
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json({msg: 'Car Delete'});
  } catch (error) {
    console.log(error.message);
  }
}

