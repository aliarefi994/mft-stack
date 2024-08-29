const chalk = require('chalk')
const data = []
let index = 0

module.exports.push = function(item) {
    data.push(item)
    console.log(chalk.green(`pushing to stack: ${item}`))
    index++
}

module.exports.pop = function() {
    if (index > 0) {
        index--
        console.log(chalk.green(`popping: ${data[index]}`))
        return data[index]
    }
    return null
}

module.exports.length = function() {
    return index
}


module.exports.peek = function(index) {    
    if (index > 0) {
        return data[index]
    }
    return null
}

module.exports.clear = function() {
    data.length = 0
    index = 0
    return data
}

module.exports.print = function() {
  return  console.log(chalk.green(`printing stack: ${data.join(', ')}`))
}