import express from "express";

const app = express();

app.use(
    express.urlencoded({ extended: true }),
    express.json()
);
//routes(app);
export default app;


