import dotenv from "dotenv";
import express from "express";
import helmet from 'helmet';

// Middlewares
import {ipVerificationsMiddleware} from "./middlewares/ipVerifications.middleware";
// Routes
import userRouter from "./routes/user.router";


dotenv.config();
const server = express();
const port = process.env.PORT;

// Helmet middleware - automatic security headers
// TODO: Verify each header use case
server.use(helmet());

server.use('/api/', ipVerificationsMiddleware, userRouter);

server.get('*', (req, res) => {
    res.status(404).send('Not Found');
})

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
