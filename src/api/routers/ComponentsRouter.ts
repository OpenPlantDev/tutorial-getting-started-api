import { BaseRouter } from "./BaseRouter";
import {Router, Request, Response, NextFunction} from "express";

export class ComponentsRouter extends BaseRouter {

  constructor() {
    super("/api/components");
  }

  public getRoutes(router: Router): void {
    // handle GET for ${this.route}
    router.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.status(500).json({message: `Route GET ${this.route} should return a list of components`});
    });

    // handle GET for ${this.route}/:componentId
    router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
      const id = req.params.id;
      res.status(500).json({message: `Route GET ${this.route}/${id} should return the component with id=${id}`});
    });
  }

}
