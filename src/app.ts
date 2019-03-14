import {Api} from "./api/api";
import {IApiRouter} from "./api/routers/IApiRouter";
import { ComponentsRouter } from "./api/routers/ComponentsRouter";
import { WbsItemsRouter } from "./api/routers/WbsItemsRouter";
import { ComponentsController } from "./api/controllers/ComponentsController";
import { WbsItemsController } from "./api/controllers/WbsItemsController";

const api = new Api();

const routers: IApiRouter[] = [
  new ComponentsRouter(new ComponentsController()),
  new WbsItemsRouter(new WbsItemsController()),
];

api.Start(routers);
