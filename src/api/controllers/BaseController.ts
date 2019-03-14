import {Request, Response, NextFunction} from "express";
import {IApiController} from "./IApiController";
import { IApiRepository } from "../repositories/IApiRepository";
import { ApiError } from "../ApiError";
import { IRepositoryItem } from "../repositories/IRepositoryItem";

export abstract class BaseController implements IApiController {

  public repository: IApiRepository;
  constructor(repository: IApiRepository) {
    this.repository = repository;
  }

  public abstract GetItemFromRequest(req: Request): IRepositoryItem;

  public Get(req: Request, res: Response, next: NextFunction) {
    try {
      const result = this.repository.Get();
      if (result instanceof Error) {
        next(new ApiError(400, result.message));
      } else {
        res.status(200).json(result);
      }
    } catch (err) {
      next(new ApiError(500, err.message));
    }
  }

  public GetById(req: Request, res: Response, next: NextFunction) {
    if (!req.params || !req.params.id) {
      return next(new ApiError(400, "No id specified in request"));
    }
    const id = req.params.id;
    try {
      const result = this.repository.GetById(id);
      if (result instanceof Error) {
        next(new ApiError(404, result.message));
      } else {
        res.status(200).json(result);
      }
    } catch (err) {
      next(new ApiError(500, err.message));
    }
  }

  public Add(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      return next(new ApiError(400, "No body specified in request"));
    }
    const item: IRepositoryItem = this.GetItemFromRequest(req);
    item.id = "";
    try {
      const result = this.repository.Add(item);
      if (result instanceof Error) {
        next(new ApiError(404, result.message));
      } else {
        res.status(201).json(result);
      }
    } catch (err) {
      next(new ApiError(500, err.message));
    }
  }

  public Update(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      return next(new ApiError(400, "No body specified in request"));
    }
    const item: IRepositoryItem = this.GetItemFromRequest(req);
    try {
      const result = this.repository.Update(item);
      if (result instanceof Error) {
        next(new ApiError(404, result.message));
      } else {
        res.status(200).json(result);
      }
    } catch (err) {
      next(new ApiError(500, err.message));
    }
  }

  public Delete(req: Request, res: Response, next: NextFunction) {
    if (!req.params || !req.params.id) {
      return next(new ApiError(400, "No id specified in request"));
    }
    const id = req.params.id;
    try {
      const result = this.repository.Delete(id);
      if (result instanceof Error) {
        next(new ApiError(404, result.message));
      } else {
        res.status(200).json(result);
      }
    } catch (err) {
      next(new ApiError(500, err.message));
    }
  }

}
