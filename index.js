// Your code here
function saturdayFun(activity="roller-skate"){
    return(`This Saturday, I want to ${activity}!`)
}
saturdayFun()
saturdayFun("bathe my dog")

function mondayWork(activity="go to the office"){
    return(`This Monday, I will ${activity}.`)
}
mondayWork()
mondayWork("bathe my dog")

const wrapAdjective = (pizaz='*') => {
    return function(adj='special') {
        return `You are ${pizaz}${adj}${pizaz}!`
    }
}

const Calculator = {
    add: function add(a,b) { return a + b },
    subtract: function subtract(a,b) { return a - b },
    multiply: function multiply(a,b) { return a * b },
    divide: function divide(a,b) { return a / b }
}
function actionApplyer(start,functions){
functions.forEach(fn => start = fn(start) )
return start  
}

