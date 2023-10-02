const express = require('express')
const router = express.Router()
const org = process.env.ORG
const { services } = require('../models/models')

// pull recent services
router.get('/', (req, res, next) => {
  services
    .find({ org: org }, (error, data) => {
      if (error) {
        return next(error)
      } else {
        return res.json(data)
      }
    })
})
// active services
router.get('/active', (req, res, next) => {
  services
    .find({ $and: [{org: org }, {status: 'Active'}] } , (error, data) => {
      if (error) {
        return next(error)
      } else {
        return res.json(data)
      }
    })
})

router.get('/id/:id', (req, res, next) => {
  // use findOne instead of find to not return array
  services.findOne({ _id: req.params.id }, (error, data) => {
    if (error) {
      return next(error)
    } else if (!data) {
      res.status(400).send('Service not found')
    } else {
      res.json(data)
    }
  })
})

// search query
router.get('/search/', (req, res, next) => {
    const dbQuery = { org: org }
    switch (req.query.searchBy) {
      case 'name':
        dbQuery.name = { $regex: `${req.query.name}`, $options: 'i' }
        break
      case 'status':
        dbQuery.status = { $eq: req.query.status }
        break
      default:
        return res.status(400).send('invalid searchBy')
    }
    services.find(dbQuery, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })


// POST service
router.post('/', (req, res, next) => {
  const newService = req.body
  newService.orgs = org
  services.create(newService, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json(data)
    }
  })
})
 
// PUT update service
router.put('/update/:id', (req, res, next) => {
    services.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// PUT soft delete
router.put('/updatestatus/:id', (req, res, next) => {
          services.findByIdAndUpdate(req.params.id, {status:'Inactive'}, {new: true}, (err, data)=> {
          if(err)
          {
            res.status(500).send('Error Occurred');
            return next(error)
          }
          else
          {
            res.send('Success')
          }
        })
  })


// hard delete
router.delete('/:id', (req, res, next) => {
  services.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else if (!data) {
      res.status(400).send('Service not found')
    } else {
      res.send('Service deleted')
    }
  })
}) 

module.exports = router