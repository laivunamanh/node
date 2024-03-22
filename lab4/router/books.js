import express from 'express';
import { books } from '../models/books.js';
// import router from '../../router/product.js';
import { CheckProductValidate } from '../middleware/bools.js';

const router = express.Router();
router.get('/books', CheckProductValidate, async(req, res) => {
    const response = await books.find();
    res.send(response)

})
router.post('/books', async(req, res) => {
    const books = await new books(req.body).save();
    res.send({ status: true, data: books });
})
router.get('/books/:id', async(req, res) => {
    const id = req.params.id;
    const response = await books.find({ _id: id });
    res.send(response)
})
router.put('/books/:id', async(req, res) => {
    const id = req.params.id;
    const body = req.body;
    const response = await books.findOneAndUpdate({ _id: id }, body, { new: true });
    res.send(response)
})
router.delete('/books/:id', async(req, res) => {
    const id = req.params.id;
    const response = await books.findOneAndDelete({ _id: id });
    res.send(response)
})

export default router;