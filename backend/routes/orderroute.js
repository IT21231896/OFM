const express = require("express");
const router = express.Router();
const Order = require("../Models/Order");

// POST - Create a new Order
router.post("/create-order", (req, res) => {
  const newOrder = new Order(req.body);
  newOrder.save((err, order) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(order);
      res.status(200).json(order);
    }
  });
});

// GET - Get all orders
router.get("/", (req, res) => {
  Order.find({}, (err, orders) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(orders);
      res.status(200).json(orders);
    }
  });
});

// GET - Get a single order by ID
router.get("/:id", (req, res) => {
  Order.findById(req.params.id, (err, order) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(order);
      res.status(200).json(order);
    }
  });
});

// PUT - Update an existing order by ID
router.put("/edit-order/:id", (req, res) => {
  Order.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, order) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log(order);
        res.status(200).json(order);
      }
    }
  );
});

// DELETE - Delete an order by ID
router.delete("/:id", (req, res) => {
  Order.findByIdAndDelete(req.params.id, (err, order) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(order);
      res.status(200).json(order);
    }
  });
});

module.exports = router;