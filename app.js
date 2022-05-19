// 1 import a local module
// const calcul = require('./localModule')
// 2 import core module => installé avec node
// 3 3rd party module ``
// const express = require("express")

// const fs = require("fs")
// console.log(fs)
//step 1
// console.log("starting .....")
//step 2
// let data = fs.readFileSync("./file.txt")
// console.log(data.toString())
// step 3
// console.log("finishing .....")

const { response } = require("express")
const http = require("http")
http.createServer((request, response) => {
    response.end("hello amal")
}).listen(3333)


