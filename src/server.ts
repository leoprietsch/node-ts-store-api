import express from "express";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Initial setup");
});

app.post("/", (req, res) => {
  res.status(201).send(req.body);
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send({ id });
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send({ id, ...req.body });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
