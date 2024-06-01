const express = require("express");
const { registerMember, loginUser, logoutUser, registerAdmin, whoAmI } = require("../controllers/UserController.js");
const { getCars, getCarById, createCar, updateCar, deleteCar } = require("../controllers/CarController.js");
const { verifyToken } = require("../middleware/VerifyToken.js");
const { verifySuperadmin, verifyAdmin } = require("../middleware/VerifyRole.js");
const { refreshToken } = require("../controllers/RefreshToken.js");

const router = express.Router();

//Superadmin
router.post('/api/admins', verifyToken, verifySuperadmin, registerAdmin);

//Admin
router.post('/api/cars', verifyToken, verifyAdmin, createCar);
router.patch('/api/cars/:id', verifyToken, verifyAdmin, updateCar);
router.delete('/api/cars/:id', verifyToken, verifyAdmin, deleteCar);

//Member
router.get('/api/logout', verifyToken, logoutUser);
router.get('/api/cars', verifyToken, getCars);
router.get('/api/cars/:id', verifyToken, getCarById);
router.get('/api/whoami', verifyToken, whoAmI);

//All
router.get('/api/token', refreshToken);
router.post('/api/login', loginUser);
router.post('/api/members', registerMember);

module.exports = router;