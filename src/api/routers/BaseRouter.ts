import {  Router, Request, Response, NextFunction } from "express";
import { IApiRouter } from "./IApiRouter";
import { IApiController } from "../controllers/IApiController";

export abstract class BaseRouter implements IApiRouter {

  public route: string = "";
  private _controller: IApiController;

  constructor(route: string, controller: IApiController ) {
    this.route = route;
    this._controller = controller;
  }

  public routeHandler(): Router {

    const router = Router();

    this.getRoutes(router);
    this.postRoutes(router);
    this.putRoutes(router);
    this.deleteRoutes(router);

    return router;
  }

  public getRoutes(router: Router): void {
    // handle GET for ${this.route}
    router.get("/", async (req: Request, res: Response, next: NextFunction) => {
      await this._controller.Get(req, res, next);
    });

    // handle GET for ${this.route}/:componentId
    router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
      await this._controller.GetById(req, res, next);
    });
  }

  public postRoutes(router: Router): void {
    // handle POST for ${this.route}
    router.post("/", async (req: Request, res: Response, next: NextFunction) => {
      await this._controller.Add(req, res, next);
    });
  }

  public putRoutes(router: Router): void {
    // handle PUT for /api/components/:componentId
    router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
      await this._controller.Update(req, res, next);
    });
  }

  public deleteRoutes(router: Router): void {
    // handle DELETE for ${this.route}/:componentId
    router.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
      await this._controller.Delete(req, res, next);
    });
  }

}
