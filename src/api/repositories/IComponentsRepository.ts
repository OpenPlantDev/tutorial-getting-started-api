import {IComponent} from "../models/Component";
import { IQueryOptions } from "../../services/queryOptions";

export interface IComponentsRepository {
  Get: (queryOptions?: IQueryOptions) => Promise<IComponent[] | Error>;
  GetById: (id: string) => Promise<IComponent | Error>;
  Add: (comp: IComponent) => Promise<string | Error>;
  Update: (comp: IComponent) => Promise<IComponent | Error>;
  Delete: (id: string) => Promise<boolean | Error>;
}
