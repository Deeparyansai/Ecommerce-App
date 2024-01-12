import  express from "express";
import dotenv from "dotenv" ;
import morgan from "morgan";
import connectDb from "./config/mongoose.js";  // always give extension to file in es6
import authRoute from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';

//config dotenv
dotenv.config();

const port = process.env.PORT || 8000  ;

//database config
connectDb();

//rest obj
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/auth' , authRoute)
app.use('/api/v1/category' , categoryRoutes);
app.use('/api/v1/product', productRoutes)

//rest api
app.get('/' , (req , res) =>{
    res.send(
        "<h1>welcome to ecommerce app</h1>"   )
})

app.listen(port , () => {
    console.log(`server is running on ${process.env.dev_mode} on  ${port}`);
})