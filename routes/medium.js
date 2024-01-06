const express = require('express')
const router = express.Router()
const Medium = require('../models/Medium')


router.post('/', async(req, res) => {
    const dataMedium = new Medium({
        namamedium: req.body.namamedium,
        baseingredient: req.body.baseingredient,
        keterangan: req.body.keterangan
    })
    try {
        const medium = await dataMedium.save()
        res.json(medium)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/', async(req, res)=>{
    try {
        const medium = await Medium.find()
        res.json(medium)
    } catch (error) {
        res.json({message: error})
    }
})

router.delete('/:ID', async(req, res) => {
    try{
        const medium = await Medium.deleteOne({
            _id: req.params.ID
        })
        res.json(medium)
    }catch(error){
        res.json({
            message: error
        })
    }
})

router.put('/:id', async(req, res)=>{
    try{
        const medium = await Medium.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            message: "Medium Updated",
            Data: medium
        })
    } catch(error){
        res.status(500).json(error)
    }
})

router.get('/:id', async(req, res)=>{
    try{
        const medium = await Medium.findById(req.params.id)
        res.status(200).json(medium)
    } catch(error){
        res.status(500).json(error)
    }
})

module.exports = router