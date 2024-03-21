import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

declare global {
  // extending request type
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies["auth_token"];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    req.userId = (decoded as JwtPayload).userId; // we want to add userId in the request cuz we want to pass it to our validate-token request so we need to extend the request
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default verifyToken;
