const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

//exporting as default
module.exports = sayHi //since there's only one to export, we don't use {}