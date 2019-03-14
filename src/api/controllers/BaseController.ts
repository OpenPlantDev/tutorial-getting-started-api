import {Request, Response, NextFunction} from "express";
import {IApiController} from "./IApiController";
import {ApiError} from "../ApiError";

export abstract class BaseController implements IApiController {

  public resourceName: string = "";

  constructor(resourceName: string) {
    this.resourceName = resourceName;
  }

  public Get(req: Request, res: Response, next: NextFunction) {
    next (new ApiError(501, `controller for GET /api/${this.resourceName} is not yet implmented`));
  }

  public GetById(req: Request, res: Response, next: NextFunction) {
    next (new ApiError(501, `controller for GetById /api/${this.resourceName}/id is not yet implmented`));
  }

  public Add(req: Request, res: Response, next: NextFunction) {
    next (new ApiError(501, `controller for Add /api/${this.resourceName} is not yet implmented`));
  }

  public Update(req: Request, res: Response, next: NextFunction) {
    next (new ApiError(501, `controller for Update /api/${this.resourceName}/id is not yet implmented`));
  }

  public Delete(req: Request, res: Response, next: NextFunction) {
    next (new ApiError(501, `controller for Delete /api/${this.resourceName}/id is not yet implmented`));
  }

}
