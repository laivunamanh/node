// // const express = require('express');
// // const app = express();
// // const port = 3000;

// // const products = [{
// //         id: 1,
// //         name: "san pham 1",
// //         price: 1000
// //     },
// //     {
// //         id: 2,
// //         name: "san pham 2",
// //         price: 1500
// //     },
// //     {
// //         id: 3,
// //         name: "san pham 3",
// //         price: 3000
// //     }
// // ]

// // app.get('/products', (request, response) => {
// //     id = request.query.id;
// //     const product = products.filter((data) => {
// //         return data.id == id
// //     })
// //     response.send(product);
// // });


// // app.listen(port, () => {
// //     console.log(' Server is running on port ${port}');
// // })

// import express from 'express';
// import { LocalStorage } from "node-localstorage";

// global.localStorage = new LocalStorage('./scratch');

// const app = express();
// const port = 3000;
// app.use(express.json());
// // let products = [];




// const ProductsList = () => {
//     let products = [];
//     const items = localStorage.getItem('products');
//     if (items !== null) {
//         products = JSON.parse(items);
//     }
//     return products;
// }
// const addProduct = (data) => {
//     const products = ProductsList();
//     products.push(data);
//     localStorage.setItem('products', JSON.stringify(products));
//     return { "status": true, "message": "Add successfully" }
// }
// const ProductById = (id) => {
//     const products = ProductsList();
//     const product = products.filter(product => {
//         return product.id == id;
//     });
//     return product;
// }

// const UpdateProduct = (id, data) => {
//     const products = ProductsList();
//     let keyvalue = -1;
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].id == id) {
//             keyvalue = i;
//         }
//     }
//     if (keyvalue > -1) {
//         products[keyvalue].name = data.name;
//         products[keyvalue].price = data.peice;
//         localStorage.setItem('products', JSON.stringify(products));
//         return { status: true, data: products[keyvalue], mess: "Update successful" }

//     } else {
//         return { status: false, mess: "Product not found" }
//     }
// }

// const DeleteProduct = (id) => {
//     const products = ProductsList();
//     let keyvalue = -1;
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].id == id) {
//             keyvalue = i;
//             break;
//         }
//     }
//     if (keyvalue > -1) {
//         products.splice(keyvalue, 1);
//         localStorage.setItem('products', JSON.stringify(products));
//         return { status: true, mess: "Delete successful" }
//     } else {
//         return { status: false, mess: "Product not found" }
//     }
// }



// // app.get('/posts', (req, res) => {
// //     // query
// //     const keywords = req.query.keywords;
// //     const cate_id = req.query.category;
// //     console.log(keywords);
// //     res.send({ keywords, cate_id });
// // });

// // app.get('/:slug1/:slug2', (req, res) => {
// //     const slug1 = req.params.slug1;
// //     const slug2 = req.params.slug2;
// //     res.send({ slug1, slug2 });
// // })
// // app.post('/posts', (req, res) => {
// //     const body = req.body;
// //     console.log(body);
// //     res.send({ body });
// // })

// // tạo API giống json-server

// app.get('/products', (req, res) => {
//     res.send(ProductsList());
// });
// app.get('/products/:id', (req, res) => {
//     const id = req.params.id;

//     const product = ProductById(id);
//     res.send(product);
//     // res.send(ProductsList());
// });
// // app.post('/products', (req, res, next) => {
// //     const body = req.body;
// //     if (body.pass == '123456') {
// //         next();
// //     } else {
// //         res.send({ status: false, message: "You can not access this" });
// //     }
// //     (req, res) => {
// //         res.send({ status: true, message: "You can not access this" });
// //     }
// // });
// app.post("/products", (req, res, next) => {
//     const body = req.body;
//     if (body.pass == "123456") {
//         next();
//     } else {
//         res.send({ status: false, message: "You can not access this" });
//     }
// }, (req, res) => {
//     res.send({ status: true, message: "Can not access this" });
// });
// app.put('/products/:id', (req, res) => {
//     const id = req.params.id;
//     const data = req.body;
//     const status = UpdateProduct(id, data);
//     res.send(status);
//     // res.send(ProductsList());
// });
// app.delete('/products/:id', (req, res) => {
//     const id = req.params.id;
//     const status = DeleteProduct(id);
//     res.send(status);
//     // res.send(ProductsList());
// });

// app.listen(port, () => {
//     console.log(`endpoint http://localhost:${port}/products`);
// })

import express from 'express';
import router from './lab4/router/books.js';
import connectdb from './database/connect.js';
const app = express();
const port = 3000;
app.use(express.json())
app.use('/api', router);
app.listen(port, async() => {
    await connectdb();
    console.log(`Endpoint http://localhost:${port}/api/books`);
})