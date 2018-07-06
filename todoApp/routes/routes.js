const router = require('express').Router()
const Todo = require('../models/todo')

router.get('/', (req, res) => {
    Todo.find({}).then(function(result){
        res.render('index',{todo: result})
    })
    
})

router.post('/todos', (req , res) => {
    let newTodo = new Todo({description: req.body.description})
    newTodo
        .save()
        .then(function(){
            res.redirect('/')
        })
        .catch(function(err){
            console.log(err)
            res.redirect('/')
        })

})

router.post('/todos/:id/completed', (req, res) => {
    Todo
    .findById(req.params.id)
    .exec()
    .then(function(result){
        result.done = !result.done
        return result.save()
    }).then(function(result){
        res.redirect('/')
    })
})
module.exports = router;