const express = require("express");
const mongo = require("mongodb").MongoClient;
const app = express();

app.post("/trip", (req,res) => {
  const name = req.body.nametrips.insertOne({ name:name }, (err, result) => {
      if (err) {
          console.error(err)
          res.status(500).json({ err: err })
        return
      }
    console.log(result)
    res.status(200).json({ ok: true})
  })
})

app.post("/trips", (req,res) => {
    trips.find().toArray((err, items) => {
        if(err) {
            console.error(err)
            res.status(500).json({ err:err })
            return
        }
        res.status(200).json({ trips:items })
    })
  })

app.post("/expense", (req,res) => {
  expenses.insertOne(
    {
        trip: req.body.trip,
        date: req.body.date,
        amount: req.body.amount,
        category: req.body.category,
        description: req.body.description,
    },
    (err, result) => {
        if (err) {
            console.error(err)
            res.status(500).json({ err: err})
            return
        }
        res.status(200).json({ ok: true })
    }
  )
  })

app.post("/expenses", (req,res) => {
    expenses.find({ trip: req.body.trip }).toArray((err, items) => {
        if(err) {
            console.error(err)
            res.status(500).json({ err:err })
            return
        }
        res.status(200).json({ expenses: items })
    })
  })

app.listen(3000, () => console.log("Server ready"));