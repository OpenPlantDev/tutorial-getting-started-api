import express from "express";
import {IApiRouter} from "./routers/IApiRouter";

export class Api {

  public Start(routers: IApiRouter[]): void {
    const api = express();

    for (const router of routers) {
      api.use(router.route, router.routeHandler());
    }

    api.get("/api", (req, res) => {
      return res.send("Hello from the API");

    });

    // Start the server
    const port = process.env.PORT || 3000;

    api.listen(port, () => {
      console.log(`Api is listening on http://localhost:${port}`);
    });
  }
}
