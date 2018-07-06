const router = require('express').Router()
const Todo = require('../models/todo')

router.get('/', (req, res) => {
    Todo.find({}).then(function(result){
        let todos = result.filter(function(todo){
            return !todo.done
        })
        let doneTodos = result.filter(function(todo){
            return todo.done
        })

        res.render('index',{todo: todos, doneTodo:doneTodos})
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

router.post('/todos/:id/delete', (req, res) => {
    Todo
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(function(result){
        console.log('deleted successfully')
        res.redirect('/')
    })
})

module.exports = router;