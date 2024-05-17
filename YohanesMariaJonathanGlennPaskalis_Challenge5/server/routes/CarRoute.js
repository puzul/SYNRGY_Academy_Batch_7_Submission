import express from "express";
import multer from "multer";
import { getCars, getCarById, createCar, updateCar, deleteCar } from "../controllers/CarController.js";
import storage from "../DiskStorage.js";
import Car from "../models/CarModel.js";
import fs from "fs";



const upload = multer({ storage });

// BE
const router = express.Router();
router.get('/api/cars', getCars);
router.get('/api/cars/:id', getCarById);
router.post('/api/cars', upload.single('file'), createCar);
router.patch('/api/cars/:id', upload.single('file'), updateCar);
router.delete('/api/cars/:id', deleteCar);

router.post('/api/cars/:id', upload.single('file'), async (req, res, next) => {
  console.log(req.body);
  try {
    const getResponse = await Car.findOne({
      where: {
        id: req.params.id,
      }
    })
    if (getResponse) {
      if (req.body._method==='patch') {
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
      else if (req.body._method==='delete') {
        fs.unlinkSync(`public${getResponse.image}`);
        await Car.destroy({
          where: {
            id: req.params.id,
          }
        })
      }
    }
    else next();
    res.redirect('/cars');
  } catch (error) {
    console.log(error.message);
  }
});
// FE
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/dashboard', async (req, res) => {
  try {
    const response = await Car.findAll();
    res.render('dashboard', { cars: response } );
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/cars', async (req, res) => {
  try {
    const response = await Car.findAll();
    res.render('cars', { cars: response } );
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/add-car', (req, res) => {
  try {
    res.render('add-car');
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/edit-car/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await Car.findOne({
      where: {
        id: req.params.id,
      }
    })
    if (response) {
      res.render('edit-car', { car: response });
    }
    else next()
  }
  catch (error) {
    console.log(error);
  }
})

router.use((req, res) => {
  res.status(404).render('404');
})

export default router;