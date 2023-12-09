const express = require('express')
const router = express.Router()
const Artist = require('../models/Artist')


router.post('/create', async(req, res) => {
    const dataArtist = new Artist({
        namaArtist: req.body.namaArtist,
        tahunLahir: req.body.tahunLahir,
        tahunMeninggal : req.body.tahunMeninggal,
        periode : req.body.periode,
        nationality : req.body.nationality,
        keterangan : req.body.keterangan
    })
    try {
        const artist = await dataArtist.save()
        res.json(artist)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/', async(req, res)=>{
    try {
        const artist = await Artist.find()
        res.json(artist)
    } catch (error) {
        res.json({message: error})
    }
})

router.delete('/delete/:id', async(req, res)=>{
    try{
        const artist = await Artist.deleteOne({
            _id: req.params.id
        })
        res.json(artist)
    }catch(error){
        res.json({
            message: error
        })
    }
})

router.put('/update/:id', async(req, res)=>{
    try{
        const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            message: "Artist Updated",
            Data: artist
        })
    } catch(error){
        res.status(500).json(error)
    }
})

module.exports = router