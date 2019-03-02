import {Request, Response, NextFunction} from "express";
import {IApiController} from "./IApiController";
import { IApiRepository } from "../repositories/IApiRepository";

export abstract class BaseController implements IApiController {

  public repository: IApiRepository;
  constructor(repository: IApiRepository) {
    this.repository = repository;
  }
  public Get(req: Request, res: Response, next: NextFunction) {
    res.status(500).json({message: `${this.repository.resourceName} controller for GET /api/${this.repository.resourceName} is not yet implmented`});
  }

  public GetById(req: Request, res: Response, next: NextFunction) {
    res.status(500).json({message: `${this.repository.resourceName}  controller for GET /api/${this.repository.resourceName} /id is not yet implmented`});
  }

  public Add(req: Request, res: Response, next: NextFunction) {
    res.status(500).json({message: `${this.repository.resourceName}  controller for POST /api/${this.repository.resourceName}  is not yet implmented`});
  }

  public Update(req: Request, res: Response, next: NextFunction) {
    res.status(500).json({message: `${this.repository.resourceName}  controller for PUT /api/${this.repository.resourceName} /id is not yet implmented`});
  }

  public Delete(req: Request, res: Response, next: NextFunction) {
    res.status(500).json({message: `${this.repository.resourceName}  controller for DELETE /api/${this.repository.resourceName} /id is not yet implmented`});
  }

}
