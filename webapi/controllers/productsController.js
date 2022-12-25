const express = require('express')
const controller = express.Router()
let products = require ('../data/simulated_database')
const { db } = require('../schemas/productSchema')
console.log(products)
const productSchema = require('../schemas/productSchema')





controller.route('/').get(async(httpRequest,httpResponse) => {
    const products = []
    const list = await productSchema.find()

    if(list) {
       for(let product of list)
      products.push({
       articleNumber: product._id,
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        tag: product.tag,
        imageName: product.imageName,
        rating: product.rating

       })
    httpResponse.status(200).json(products)

} else

    httpResponse.status(400).json()

})



controller.route('/product/details/:articleNumber').get(async(httpRequest, httpResponse) => {
   
    const product = await productSchema.findById(httpRequest.params.articleNumber)

    if(product){
           httpResponse.status(200).json({

            articleNumber: product._id,
           name: product.name,
           description: product.description,
           price: product.price,
           category: product.category,
           tag: product.tag,
           imageName: product.imageName,
           rating: product.rating
           })
        

    }    else

    httpResponse.status(404).json()
})
 





controller.route('/:tag').get(async(httpRequest, httpResponse) => {
    const products = []
    const list = await productSchema.find({tag:httpRequest.params.tag})

    if(list) {
       for(let product of list)
       list.push({
       articleNumber: product._id,
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        tag: product.tag,
        imageName: product.imageName,
        rating: product.rating

       })
    httpResponse.status(200).json(products)

} else

    httpResponse.status(400).json()
   


})


controller.route('/:tag/ :take').get(async(httpRequest, httpResponse) => {
    const products = []
    const list = await productSchema.find({tag:httpRequest.params.tag}).limit(httpRequest.params.take)
 

    if(list) {
       for(let product of list)
       list.push({
        _id: product._id,
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        tag: product.tag,
        imageName: product.imageName,
        rating: product.rating

       })
    httpResponse.status(200).json(products)

}  else

    httpResponse.status(400).json()
  


     

})




//secured routes
controller.route('/').post(async (httpRequest, httpResponse) =>{
    const {name, description, price, category, tag, imageName, rating } =httpRequest.body

    if(!name || !price)
    httpResponse.status(400).json({text: 'name and price is required.'})

    const item_exists = await productSchema.findOne({name})

    if (item_exists)
        httpResponse.status(409).json({text: ' a product with the same name already exists.'})

    else{
        const product = await productSchema.create({
            name,
            description,
            price,
            category,
            tag,
            imageName,
            rating
        })
        if (product)
        httpResponse.status(201).json({text: ' product created'})

        else
        httpResponse.status(400).json({text: 'something went wrong when trying to create.'})
    }
})



controller.route('/:articleNumber').delete(async (httpRequest, httpResponse) =>{
  
    if(httpRequest.params.articleNumber)
    httpResponse.status(400).json( 'no articlenumber was specified')

    else{
         const item = await productSchema.findById(httpRequest.params.articleNumber)
    if (item) {
        await productSchema.remove(item)
        httpResponse.status(200).json({text: 'product deleted'})

    } else {
        httpResponse.status(404).json({text: 'product not found'})
    }
    }
 
})


controller.route('/:articleNumber').patch(async (httpRequest, httpResponse) =>{
  
    try{
        const item = await item.findById(httpRequest.params.id)
        Object.assign(item, httpRequest.body)
        httpResponse.send({data:item})
     
       
    }   catch{
         httpResponse.status(404).json({text: 'product not found'})}
 
})




module.exports = controller