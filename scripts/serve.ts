import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "../test")));
app.use(express.static(path.join(__dirname, "../out")));

app.listen(7891);