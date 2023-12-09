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

router.put('/:ID', async(req, res) => {
    const dataMuseum =({
        namamuseum: req.body.namamuseum,
        negara: req.body.negara,
        alamat: req.body.alamat
    })
    try {
        const mueseum = await Museum.updateOne({
            _id: req.params.ID
        },dataMuseum)
        res.json(mueseum)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router