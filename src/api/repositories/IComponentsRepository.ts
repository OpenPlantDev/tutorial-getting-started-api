import {IComponent} from "../models/Component";

export interface IComponentsRepository {
  Get: () => IComponent[] | Error;
  GetById: (id: string) => IComponent | Error;
  Add: (comp: IComponent) => string | Error;
  Update: (comp: IComponent) => IComponent | Error;
  Delete: (id: string) => boolean | Error;
}
