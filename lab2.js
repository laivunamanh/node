import express from 'express';
const app = express();
const PORT = 4000;
import { LocalStorage } from "node-localstorage";

global.localStorage = new LocalStorage('./scratch');


const videos = [{
        id: 1,
        title: "An apple mobile which is nothing like apple",
        duration: "12:05",
        thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
    },
    {
        id: 2,
        title: "Samsung Universe 9",
        duration: "10:25",
        thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
    },
    {
        id: 3,
        title: "Samsung Galaxy Book",
        duration: "06:51",
        thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg"
    }


]
const ProductsList = () => {
    let products = [];
    const items = localStorage.getItem('products');
    if (items !== null) {
        products = JSON.parse(items);
    }
    return products;
}
const addProduct = (data) => {
    const products = ProductsList();
    products.push(data);
    localStorage.setItem('products', JSON.stringify(products));
    return { "status": true, "message": "Add successfully" }
}


app.get('/videos', (req, res) => {

    res.send(videos);
});
app.get('/videos/:title', (req, res) => {
    const title = req.params.title;
    res.send({ title });
})

app.post('/videos', (req, res) => {
    const body = req.body;
    const mess = addProduct(body)
    res.send(mess);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/videos`);
})