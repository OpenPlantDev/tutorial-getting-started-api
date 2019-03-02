import {  Router, Request, Response, NextFunction } from "express";
import { IApiRouter } from "./IApiRouter";
import { IApiController } from "../controllers/IApiController";

export abstract class BaseRouter implements IApiRouter {

  public route: string = "";
  public controller: IApiController;

  constructor(route: string, controller: IApiController) {
    this.route = route;
    this.controller = controller;
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
    router.get("/", (req: Request, res: Response, next: NextFunction) => {
      this.controller.Get(req, res, next);
    });

    // handle GET for ${this.route}/:componentId
    router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
      const id = req.params.id;
      res.status(500).json({message: `Route GET ${this.route}/${id} in not yet handled`});
    });
  }

  public postRoutes(router: Router): void {
    // handle POST for ${this.route}
    router.post("/", (req: Request, res: Response, next: NextFunction) => {
      res.status(500).json({message: `Route POST ${this.route} in not yet handled`});
    });
  }

  public putRoutes(router: Router): void {
    // handle PUT for /api/components/:componentId
    router.put("/:id", (req: Request, res: Response, next: NextFunction) => {
      const id = req.params.id;
      res.status(500).json({message: `Route PUT ${this.route}/${id} in not yet handled`});
    });
  }

  public deleteRoutes(router: Router): void {
    // handle DELETE for ${this.route}/:componentId
    router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
      const id = req.params.id;
      res.status(500).json({message: `Route DELETE ${this.route}/${id} in not yet handled`});
    });
  }

}
