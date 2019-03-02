import {Request, Response, NextFunction} from "express";

export interface IApiController {
  Get: (req: Request, res: Response, next: NextFunction) => void;
  GetById: (req: Request, res: Response, next: NextFunction) => void;
  Add: (req: Request, res: Response, next: NextFunction) => void;
  Update: (req: Request, res: Response, next: NextFunction) => void;
  Delete: (req: Request, res: Response, next: NextFunction) => void;
}
