import { BaseRouter } from "./BaseRouter";
import {IApiController} from "../controllers/IApiController";

export class WbsItemsRouter extends BaseRouter {

  constructor(controller: IApiController) {
    super("/api/wbsitems", controller);
  }
}
