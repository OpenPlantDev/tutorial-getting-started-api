import {Request} from "express";
import {BaseController} from "./BaseController";
import { IApiRepository } from "../repositories/IApiRepository";
import { IWbsItem } from "../models/WbsItem";

export class WbsItemsController extends BaseController {

  constructor(repository: IApiRepository) {
    super(repository);
  }

  public GetItemFromRequest(req: Request): IWbsItem {
    return {
      id: req.params.id,
      className: req.body.className,
      tag: req.body.tag,
    };
  }

}
