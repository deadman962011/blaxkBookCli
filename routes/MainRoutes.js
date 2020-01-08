const express =require('express');
const router = express.Router();










const MainController = require('../controllers/MainController')



router.get('/',MainController.MainRoute);

router.get('/:bookId',MainController.BookOne)

router.post('/:bookId',MainController.BookOnePost)

router.get('/Catigory/:CatigoryId',MainController.BookCatigoryGet)

router.get('/Author/:AuthorId',MainController.BookAuthorGet)





module.exports= router;