function name(n){
    return n;
}
let objects = [
    {name:'dog',type:'animal'},
    {name:'cat',type:'animal'},
    {name:'lotus',type:'flower'},
    {name:'naman',type:'human'},
    {name:'audi',type:'car'},
    {name:'bmw',type:'car'},
    {name:'john',type:'human'},
]
let filterOjects = objects
                    .filter(function (object){
                        return object.type == 'animal'
                    })
                    .map(function(object){
                        return object.name
                    })
console.log(filterOjects)


function gitFunction(){
    console.log('hello form git')
}