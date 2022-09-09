import bodyParser from "body-parser";
import morgan from "morgan";
import express from "express";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan("dev"));

const db = [];

app.get("/todo", (req, res) => {
  res.status(200).json(db);
});
app.get("/todo/:id", (req, res) => {
  const todo = db.find((todo) => todo.id === req.params.id);
  res.status(200).json({ data: todo });
});
app.post("/todo", (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
  };
  db.push(newTodo);

  res.status(200).json(newTodo);
});

app.listen(5000, () => {
  console.log("hiiiii");
});
