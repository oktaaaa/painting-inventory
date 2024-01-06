const express = require('express')
const router = express.Router()
const Museum = require('../models/Museum')


router.post('/', async(req, res) => {
    const dataMuseum = new Museum({
        namamuseum: req.body.namamuseum,
        negara: req.body.negara,
        alamat: req.body.alamat
    })
    try {
        const mueseum = await dataMuseum.save()
        res.json(mueseum)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/', async(req, res)=>{
    try {
        const mueseum = await Museum.find()
        res.json(mueseum)
    } catch (error) {
        res.json({message: error})
    }
})

router.delete('/:ID', async(req, res) => {
    try{
        const mueseum = await Museum.deleteOne({
            _id: req.params.ID
        })
        res.json(mueseum)
    }catch(error){
        res.json({
            message: error
        })
    }
})

router.put('/:id', async(req, res)=>{
    try{
        const mueseum = await Museum.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            message: "Museum Updated",
            Data: mueseum
        })
    } catch(error){
        res.status(500).json(error)
    }
})

router.get('/:id', async(req, res)=>{
    try{
        const mueseum = await Museum.findById(req.params.id)
        res.status(200).json(mueseum)
    } catch(error){
        res.status(500).json(error)
    }
})

module.exports = router