import {Request} from "express";
import {BaseController} from "./BaseController";
import { IApiRepository } from "../repositories/IApiRepository";
import {IComponent} from "../models/Component";

export class ComponentsController extends BaseController {

  constructor(repository: IApiRepository) {
    super(repository);
  }

  public GetItemFromRequest(req: Request): IComponent {
    return {
      id: req.params.id,
      className: req.body.className,
      tag: req.body.tag,
    };

  }
}
