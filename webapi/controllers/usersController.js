// const express = require('express')
// const controller = express.Router()
// let users = require ('../data/simulated_database')
// console.log(users)


// controller.param("id", (req, res, next, id) => {
//     req.user= users.find(user => user.id == id)
//     next()
// })

// //http://localhost:5000/api/users
// controller.route('/')
// .post((httpRequest, httpResponse) => {
//        let users={
//         id: (users[users.length -1])?.id > 0 ? (users[users.length -1]) ?.id + 1 : 1,
//         firstName: httpRequest.body.firstname,
//         lastName: httpRequest.body.lastname,
//         email: httpRequest.body.email,
//         password: httpRequest.body.password
//     }

//     users.push(user)
//     httpResponse.status(201).json(user)
// })
// .get((httpRequest, httpResponse) => {
//     httpResponse.status(200).json(users)

// })





// //http://localhost:5000/api/users/1


// constroller.route('/:id')
// .get((httpRequest, httpResponse) => {
//     if(httpRequest.user !=undefined)
//     httpResponse.status(200).json(httpRequest.user)
//     else
//     httpResponse.status(404).json()
// })
// .put((httpRequest, httpResponse) => {
//     if(httpRequest.user !=undefined){
//         users.forEach(user => {
//             if(user.id == httpRequest.user.id){
//                 user.firstName = httpRequest.body.firstName ? httpRequest.body.firstName : user.firstName
//                 user.lastName = httpRequest.body.lastName ? httpRequest.body.lastName : user.lastName
//                 user.email = httpRequest.body.email ? httpRequest.body.email : user.email
               
//             }

//         })
//         httpResponse.status(200).json(httpRequest.user)
//     }
   
//     else
//     httpResponse.status(404).json()
// })
// .delete((httpRequest, httpResponse) => {
//     if(httpRequest.user !=undefined){
//         user = users.filter(user => user.id !== httpRequest.user.id)
//         httpResponse.status(204).json()
//     }
  
//     else
//     httpResponse.status(404).json()
// })




// module.exports =controller