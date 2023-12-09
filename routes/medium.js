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

router.put('/:ID', async(req, res) => {
    const dataMedium =({
        namamedium: req.body.namamedium,
        baseingredient: req.body.baseingredient,
        keterangan: req.body.keterangan
    })
    try {
        const medium = await Medium.updateOne({
            _id: req.params.ID
        },dataMedium)
        res.json(medium)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router