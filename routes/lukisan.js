const express = require('express')
const router = express.Router()
const Lukisan = require('../models/Lukisan')
// const multer = require('multer')
// const app = express();

// const storage = multer.diskStorage({
//     destination: './public/uploads/',
//     filename: (req, file, cb) => {
//       cb(null, Date.now() + '-' + file.originalname);
//     },
//   });

// const upload = multer({ storage });
// app.use(express.static('public'));


router.post('/create', async(req, res) => {
    
    const dataLukisan = new Lukisan({
        inventoryID: req.body.inventoryID,
        namaLukisan: req.body.namaLukisan,
        gambarLukisan:req.body.gambarLukisan,
        tahun: req.body.tahun,
        artist: req.body.artist,
        medium: req.body.medium,
        museum: req.body.museum,
        ket: req.body.ket
    })
    try {
        const lukisan = await dataLukisan.save()
        res.json(lukisan)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/', async(req, res)=>{
    try {
        const lukisan = await Lukisan.find().populate('artist').populate('medium').populate('museum')
        res.json(lukisan)
    } catch (error) {
        res.json({message: error})
    }
})

router.delete('/delete/:id', async(req, res)=>{
    try{
        const lukisan = await Lukisan.deleteOne({
            _id: req.params.id
        })
        res.json(lukisan)
    }catch(error){
        res.json({
            message: error
        })
    }
})

router.put('/update/:id', async(req, res)=>{
    try{
        const lukisan = await Lukisan.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            message: "Lukisan Updated",
            Data: lukisan
        })
    } catch(error){
        res.status(500).json(error)
    }
})

router.get('/:id', async(req, res)=>{
    try{
        const lukisan = await Lukisan.findById(req.params.id)
        res.status(200).json(lukisan)
    } catch(error){
        res.status(500).json(error)
    }
})

module.exports = router