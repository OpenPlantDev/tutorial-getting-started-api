import {Request, Response, NextFunction} from "express";

export interface IApiController {
  Get: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
  GetById: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
  Add: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
  Update: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
  Delete: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
}
