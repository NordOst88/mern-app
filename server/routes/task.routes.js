const { Router } = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/auth.middleware");
const router = Router();

router.post("/create", auth, async (req, res) => {
  try {
    const { name, date, description } = req.body;
    const task = new Task({
      name,
      date,
      description,
      owner: req.user.userID,
    });
    await task.save();
    res.status(201).json({ task });
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

router.delete("/delete/:id", auth, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    await task.deleteOne();
    res.status(200).json({ message: "Удалено!" });
  } catch (e) {
    res.status(400).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

router.put("/update/:id", auth, async (req, res) => {
  try {
    const { name, date, description } = req.body;
    const task = new Task({
      _id: req.params.id,
      name,
      date,
      description,
      owner: req.user.userID,
    });
    await Task.updateOne({ _id: req.params.id }, task);
    res.status(201).json({ message: "Обновлено!" });
  } catch (e) {
    res.status(400).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const tasks = await Task.find({ owner: req.user.userID });
    res.json(tasks);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json(task);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

module.exports = router;
