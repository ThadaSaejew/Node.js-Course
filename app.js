const express = require('express');
//const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const productRouter= express.Router();
const products = require("./data/products.json")
const app = express();
const PORT = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine","ejs");

productRouter.route("/").get((req,res)=>{
    res.render("products",{
        products:[
            {productTiltle: "A 1 ", productDescription: "A 1 ",productPrice: 10},
            {productTiltle: "A 1 ", productDescription: "A 1 ",productPrice: 20},
            {productTiltle: "A 1 ", productDescription: "A 1 ",productPrice: 30},
            {productTiltle: "A 1 ", productDescription: "A 1 ",productPrice: 40},
        ],
    });
});
app.use("/products",productRouter)

app.get("/",(req,res) =>{

    res.render('index',{username:'Book' , customers:[ "thada" , "book" , "saejew"]});

})

app.listen(PORT,() =>{
    debug("Listening on port %d",PORT);

})