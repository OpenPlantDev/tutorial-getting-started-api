import { BaseRouter } from "./BaseRouter";
import {IApiController} from "../controllers/IApiController";

export class ComponentsRouter extends BaseRouter {

  constructor(controller: IApiController) {
    super("/api/components", controller);
  }

}
