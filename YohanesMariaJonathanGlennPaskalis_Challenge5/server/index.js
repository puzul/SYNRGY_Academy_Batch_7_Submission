import express from "express";
import cors from "cors";
import CarRoute from "./routes/CarRoute.js";
import session from "express-session";

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'server/views');

app.use(express.static('public'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
  secret: 'my secret key',
  saveUninitialized: true,
  resave: false,
}))
app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
})
app.use(CarRoute);

app.listen(5000, () => console.log('Server running'));


