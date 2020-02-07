const express = require('express')
const db = require ('../dealer/cars.js')
const router = express.Router()

router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.status(200).json(cars)
    })
    .catch(error => {
      res.status(500).json({message: "problem with getting cars", error: error})
    })
})

router.post('/', (req, res) => {
  const car = req.body
  console.log(car)
  db('cars')
    .insert(car, "id")
    .then(id => {
      return db('cars')
              .select("id", "vin", "year", "make", "model", "initial_mileage")
              .where({id: id[0]})
              .first()
              .then(car => {
                res.status(201).json({car: car})
              })
    })
})

module.exports = router