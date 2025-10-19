const mongoose = require('mongoose');

exports.dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
};

