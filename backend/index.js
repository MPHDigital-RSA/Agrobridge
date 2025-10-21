require('dotenv').config();
const express = require('express');
const cors =require('cors');

const {dbConnection}=require('./config/db');
const productRoutes = require('./routes/productRoutes');

// Connect to Database
dbConnection();
//express app initialization
const app = express();
const PORT=process.env.PORT || 5000;

app.use(express.json({limit:"300mb"}));
app.use(express.urlencoded({ extended: true,limit:"300mb" }));

app.use(cors({
    origin:process.env.CORS_ORIGIN || '*'
}));

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`app running on http://localhost: ${PORT}`);
})
module.exports = app;