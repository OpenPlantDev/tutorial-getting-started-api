import {BaseController} from "./BaseController";
import { IWbsItemsRepository } from "../repositories/IWbsItemsRepository";
import { IWbsItem } from "../models/WbsItem";

export class WbsItemsController extends BaseController {

  constructor(repository: IWbsItemsRepository) {
    super("wbsitems", repository);
  }

  public GetRepositoryItemFromBody(body: any): IWbsItem {
    const item: IWbsItem = {
      id: body.id,
      className: body.className,
      tag: body.tag,
      description: body.description,
    };

    return item;

  }

}
