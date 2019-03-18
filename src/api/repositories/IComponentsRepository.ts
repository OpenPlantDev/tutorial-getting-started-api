import {IComponent} from "../models/Component";

export interface IComponentsRepository {
  Get: () => Promise<IComponent[] | Error>;
  GetById: (id: string) => Promise<IComponent | Error>;
  Add: (comp: IComponent) => Promise<string | Error>;
  Update: (comp: IComponent) => Promise<IComponent | Error>;
  Delete: (id: string) => Promise<boolean | Error>;
}
