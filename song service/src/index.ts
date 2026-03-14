import express from "express";
import dotenv from "dotenv";
import songRoutes from './route.js'
import redis from 'redis';

dotenv.config();

export const redisClient = redis.createClient({
    password:process.env.Redis_Password as string,
    socket: {
        host: "redis-10387.crce281.ap-south-1-3.ec2.cloud.redislabs.com",
        port: 10387,
    }
})

redisClient
    .connect()
    .then(()=> console.log("connected to redis"))
    .catch(console.error);

const app = express();
app.use("/api/v1", songRoutes)

const port = process.env.PORT;

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);

})