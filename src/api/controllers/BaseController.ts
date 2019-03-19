import {Request, Response, NextFunction} from "express";
import {IApiController} from "./IApiController";
import {ApiError} from "../ApiError";
import { IApiRepository, IRepositoryItem } from "../repositories/IApiRepository";
import {QueryOptions} from "../../services/queryOptions";

export abstract class BaseController implements IApiController {

  public resourceName: string = "";
  private _repository: IApiRepository;

  constructor(resourceName: string, repository: IApiRepository) {
    this.resourceName = resourceName;
    this._repository = repository;
  }

  public abstract GetRepositoryItemFromBody(body: any): IRepositoryItem;

  public async Get(req: Request, res: Response, next: NextFunction): Promise<Response | void> {

    try {
      const queryOptions = QueryOptions.GetOptions(req.query);
      const result = await this._repository.Get(queryOptions);
      if (result instanceof Error) {
        return next (new ApiError(400, result.message));
      }
      return res.status(200).json(result);
    } catch (err) {
      return next (new ApiError(500, err.message));
    }
  }

  public async GetById(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const id = req.params.id;
      const result = await this._repository.GetById(id);
      if (result instanceof Error) {
        return next (new ApiError(404, result.message));
      }
      return res.status(200).json(result);
    } catch (err) {
      return next (new ApiError(500, err.message));
    }
  }

  public async Add(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      if (!req.body) {
        return next (new ApiError(400, `Request has no body`));
      }
      const item: IRepositoryItem = this.GetRepositoryItemFromBody(req.body);
      item.id = "";
      const result = await this._repository.Add(item);
      if (result instanceof Error) {
        return next (new ApiError(400, result.message));
      }
      return res.status(201).json(result);
    } catch (err) {
      return next (new ApiError(500, err.message));
    }
  }

  public async Update(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      if (!req.body) {
        return next (new ApiError(400, `Request has no body`));
      }
      const item: IRepositoryItem = this.GetRepositoryItemFromBody(req.body);
      item.id = req.params.id;
      const result = await this._repository.Update(item);
      if (result instanceof Error) {
        return next (new ApiError(400, result.message));
      }
      return res.status(201).json(result);
    } catch (err) {
      return next (new ApiError(500, err.message));
    }
  }

  public async Delete(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const id = req.params.id;
      const result = await this._repository.Delete(id);
      if (result instanceof Error) {
        return next (new ApiError(400, result.message));
      }
      return res.status(200).json(result);
    } catch (err) {
      return next (new ApiError(500, err.message));
    }
  }

}
