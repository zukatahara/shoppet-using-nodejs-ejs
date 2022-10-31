const mongoose = require('mongoose');
require('dotenv').config();
const URL = process.env.URI;

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(URL)
        if (connection) {
            console.log('connected mongoose database')
        }
    } catch (error) {
        throw error;

    }
}
module.exports = connectDB;