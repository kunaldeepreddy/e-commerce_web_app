// const path = require("path");
// require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
// console.log(process.env.BASE_URL);
// module.exports = Object.freeze({
// BASE_URL: process.env.BASE_URL
// });



const DEV = `http://localhost:3005/api`
const PROD = 'http://ec2-65-2-121-106.ap-south-1.compute.amazonaws.com:3005/api'

export const BASE_URL = window.location.hostname.split(":")[0] === "localhost" || window.location.hostname.includes("192") ? DEV : PROD;