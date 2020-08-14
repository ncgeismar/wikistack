const express = require('express')
const router = express.Router()

router.get("/", (req, res, next)=>{
  res.send("GET")
})

router.post("/", (req, res, next)=>{
  res.send("POST")
})

router.get("/add", (req, res, next)=>{
  res.send("GET/ADD")
})

module.export = router
