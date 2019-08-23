import { IComponent } from "../models/Component";
import { IQueryOptions } from "../../services/queryOptions";

export interface IComponentsDataStore {

  getComponents: (queryOptions?: IQueryOptions) => Promise<IComponent[] | Error>;
  getComponentById: (id: string) => Promise<IComponent | Error>;
  addComponent: (comp: IComponent) => Promise<string | Error>;
  updateComponent: (comp: IComponent) => Promise<IComponent | Error>;
  deleteComponent: (id: string) => Promise<boolean | Error>;
}
