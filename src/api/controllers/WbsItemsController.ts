import {BaseController} from "./BaseController";
import { IWbsItemsRepository } from "../repositories/IWbsItemsRepository";
import { IWbsItem } from "../models/WbsItem";
import { SocketService } from "../../services/socketService";

export class WbsItemsController extends BaseController {

  constructor(repository: IWbsItemsRepository, socketService: SocketService) {
    super("wbsitems", repository, socketService);
  }

  public getRepositoryItemFromBody(body: any): IWbsItem {
    const item: IWbsItem = {
      id: body.id,
      className: body.className,
      tag: body.tag,
      description: body.description,
    };

    return item;

  }

}
