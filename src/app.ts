import {Api} from "./api/api";
import {IApiRouter} from "./api/routers/IApiRouter";
import { ComponentsRouter } from "./api/routers/ComponentsRouter";
import { WbsItemsRouter } from "./api/routers/WbsItemsRouter";
import { ComponentsController } from "./api/controllers/ComponentsController";
import { WbsItemsController } from "./api/controllers/WbsItemsController";
import { ComponentsRepository } from "./api/repositories/ComponentsRepository";
import { WbsItemsRepository } from "./api/repositories/WbsItemsRepository";

import { FakeDb } from "./api/dataStores/FakeDb";

const fakeDb = new FakeDb();
fakeDb.SeedDb(
  [
    {id: "1", className: "valve", tag: "FV-100", description: "Gate Valve",  manufacturer: "ABC",
      properties: {length: 25, weight: 50},
    },
    {id: "2", className: "valve", tag: "FV-101", description: "Globe Valve", manufacturer: "ABC",
      properties: {length: 12, weight: 40},
    },
    {id: "3", className: "pump", tag: "FP-100", description: "Pump", manufacturer: "ABC",
      properties: {length: 100, weight: 500},
    },
    {id: "4", className: "vessel", tag: "FH-100", description: "Tank", manufacturer: "ABC",
      properties: {height: 125, diameter: 25, weight: 5000},
    },
  ],
  [
    {id: "11", className: "unit", tag: "FU1", description: "Unit #1"},
    {id: "12", className: "unit", tag: "FU2", description: "Unit #2"},
    {id: "13", className: "service", tag: "FS1", description: "Service #1"},
    {id: "14", className: "area", tag: "FS2", description: "Area #1"},
  ],

);

const routers: IApiRouter[] = [
  new ComponentsRouter(new ComponentsController(new ComponentsRepository(fakeDb))),
  new WbsItemsRouter(new WbsItemsController(new WbsItemsRepository(fakeDb))),
];

const api = new Api();
api.Start(routers);
