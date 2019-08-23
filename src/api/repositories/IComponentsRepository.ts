import {IComponent} from "../models/Component";
import { IQueryOptions } from "../../services/queryOptions";

export interface IComponentsRepository {
  get: (queryOptions?: IQueryOptions) => Promise<IComponent[] | Error>;
  getById: (id: string) => Promise<IComponent | Error>;
  add: (comp: IComponent) => Promise<string | Error>;
  update: (comp: IComponent) => Promise<IComponent | Error>;
  delete: (id: string) => Promise<boolean | Error>;
}
