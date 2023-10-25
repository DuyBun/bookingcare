import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import dotenv from 'dotenv';
dotenv.config();

let app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Backend nodejs is running on the port ${port}`);
});