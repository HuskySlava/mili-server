import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const allowedIPs: string[] = process.env.ALLOWED_IPS ? process.env.ALLOWED_IPS.split(',') : [];

export const ipVerificationsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const clientIP = req.headers['x-forwarded-for'] as string || req.socket.remoteAddress;
    if(allowedIPs.includes(clientIP)){
        next();
    } else {
        res.status(403).json({ message: 'Unauthorized access' });
    }
}