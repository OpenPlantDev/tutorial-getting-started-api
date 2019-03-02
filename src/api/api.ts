import express from "express";
import {ApiError} from "./ApiError";
import {IApiRouter} from "./routers/IApiRouter";

export class Api {

  public Start(routers: IApiRouter[]): void {
    const api = express();

    // handle routes defined by routers
    for (const router of routers) {
      api.use(router.route, router.routeHandler());
    }

    // handle error for non-handled routes
    api.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      // create new error with status 404
      const err = new ApiError(404, `Route not found`);
      next(err);
    });

    // handle errors thrown during the handling of the request
    api.use((err: ApiError, req: express.Request, res: express.Response, next: express.NextFunction) => {
      const status = err.status ? err.status : 500;
      const message = err.message ? err.message : "Server error";

      res.status(status).json({message});

    });

    // Start the server
    const port = process.env.PORT || 3000;

    api.listen(port, () => {
      console.log(`Api is listening on http://localhost:${port}`);
    });
  }
}
