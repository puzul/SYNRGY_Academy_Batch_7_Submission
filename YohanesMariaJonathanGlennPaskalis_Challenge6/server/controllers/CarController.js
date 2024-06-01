// import Car from "../models/CarModel.js";
const { Cars } = require("../models")

const getCars = async(req, res) => {
  try {
    let attributes = [];
    let where = {};
    if (req.role === 'member') {
      attributes = ['id', 'type', 'rentPerDay'];
      where.isDeleted = false;
    }
    else if (req.role === 'superadmin' || req.role === 'admin') {
      attributes = ['id', 'type', 'rentPerDay', 'createdAt', 'updatedAt', 'createdBy', 'updatedBy', 'isDeleted', 'deletedBy'];
    }
    const response = await Cars.findAll({
      where,
      attributes,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

const getCarById = async(req, res) => {
  try {
    let attributes = [];
    let where = {}
    if (req.role === 'member') {
      attributes = ['id', 'type', 'rentPerDay'];
      where.isDeleted = false;
    }
    else if (req.role === 'superadmin' || req.role === 'admin') {
      attributes = ['id', 'type', 'rentPerDay', 'createdAt', 'updatedAt', 'createdBy', 'updatedBy'];
    }
    where.id = req.params.id
    const response = await Cars.findOne({
      where,
      attributes,
    });
    if(!response) res.status(404).json({ msg: `Car Doesn't Exist` });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

const createCar = async(req, res) => {
  try {
    const { type, rentPerDay } = req.body;
    await Cars.create({
      type,
      rentPerDay,
      createdBy: req.id,
      updatedBy: req.id,
      isDeleted: false,
    });
    res.status(201).json({msg: 'Car Created'});
  } catch (error) {
    console.log(error.message);
  }
}

const updateCar = async(req, res) => {
  try {
    const getResponse = await Cars.findOne({
      where: {
        id: req.params.id,
        isDeleted: false,
      }
    })
    if (getResponse) {
      req.body.updatedBy = req.id;
      await Cars.update(req.body, {
        where: {
          id: req.params.id,
        }
      })
      res.status(200).json({msg: 'Car Updated'});
    }
    else res.status(404).json({msg: `Car Doesn't Exist`});
  } catch (error) {
    console.log(error.message);
  }
}

const deleteCar = async(req, res) => {
  try {
    const getResponse = await Cars.findOne({
      where: {
        id: req.params.id,
        isDeleted: false,
      }
    })
    if (getResponse) {
      await Cars.update({
        isDeleted: true,
        deletedBy: req.id,
      }, {
        where: {
          id: req.params.id,
        }
      });
      res.status(200).json({msg: 'Car Deleted'});
    }
    else res.status(404).json({msg: `Car Doesn't Exist`});
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { getCars, getCarById, createCar, updateCar, deleteCar }