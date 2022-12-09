const express = require('express')
const controller = express.Router()
let products = require ('../data/simulated_database')
console.log(products)


controller.param("articleNumber", (req, res, next, articleNumber) => {

    req.products= products.find(x => x.articleNumber == articleNumber)
     next()
})


controller.param("tag", (req, res, next, tag) => {

    req.products= products.filter(x => x.tag == tag)
     next()
})

//http://localhost:5000/api/products

controller.route('/details/:articleNumber').get((httpRequest, httpResponse) => {
    if(httpRequest.product !=undefined)
    httpResponse.status(200).json(httpRequest.products)

    else

    httpResponse.status(404).json()

})

controller.route('/:tag').get((httpRequest, httpResponse) => {


    if(httpRequest.product !=undefined)
    httpResponse.status(200).json(httpRequest.products)

    else

    httpResponse.status(404).json()


})


controller.route('/:tag/ :take').get((httpRequest, httpResponse) => {
    let list = []

    for (let i = 0; i < Number (httpRequest.params.take); i++)
        list.push(httpRequest.products[i])

    httpResponse.status(200).json(list)

})


controller.route('/').get((httpRequest, httpResponse) => {
   
    httpResponse.status(200).json(products)

})





module.exports = controller