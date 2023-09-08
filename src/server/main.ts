import express from "express";
import ViteExpress from "vite-express";
import "dotenv/config"

const app = express();

app.get("/hello", (_, res) => {
  res.send("Hello Vite + TypeScript!");
});

app.get("/nb-secondes/:hours", (req, res) => {
  const nbHours = parseInt(req.params.hours)
  res.send((nbHours * 60 * 60).toString());
});

ViteExpress.listen(app, parseInt(process.env.PORT as string), () =>
  console.log("Server is listening on port " + process.env.PORT)
);
