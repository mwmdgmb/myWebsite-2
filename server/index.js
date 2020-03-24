const next = require("next");
const express = require("express");
const BodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });

const handle = app.getRequestHandler();

const filPath = "./Data/data.json";
const fs = require("fs");
const path = require("path");
const moviesData = require(filPath);

app.prepare().then(() => {
  const server = express();
  server.use(BodyParser.json());

  server.get("/api/v1/movies", (req, res) => {
    res.json(moviesData);
  });
  server.get("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;
    const movie = moviesData.find(m => m.id === id);
    return res.json(movie);
  });

  server.post("/api/v1/movies", (req, res) => {
    const movie = req.body;
    moviesData.push(movie);
    const pathToFile = path.join(__dirname, filPath);
    const stringtifyData = JSON.stringify(moviesData, null, 2);

    fs.writeFile(pathToFile, stringtifyData, error => {
      if (error) {
        return res.status(422).send(error);
      }
    });
    return res.json("Movie has been successfuly added !");
  });

  server.delete("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;

    const movieIndex = moviesData.findIndex(m => m.id === id);

    moviesData.splice(movieIndex, 1);

    const pathToFile = path.join(__dirname, filPath);
    const stringtifyData = JSON.stringify(moviesData, null, 2);

    fs.writeFile(pathToFile, stringtifyData, error => {
      if (error) {
        return res.status(422).send(error);
      }
    });
    return res.json("Movie has been successfuly deteted !");
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });
  const PORT = process.env.PORT || 3000;

  server.use(handle).listen(PORT, error => {
    if (error) throw error;
    console.log("> Ready on Port" + PORT);
  });
});
