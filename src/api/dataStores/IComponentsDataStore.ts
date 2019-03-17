import { IComponent } from "../models/Component";

export interface IComponentsDataStore {

  GetComponents: () => IComponent[] | Error;
  GetComponentById: (id: string) => IComponent | Error;
  AddComponent: (comp: IComponent) => string | Error;
  UpdateComponent: (comp: IComponent) => IComponent | Error;
  DeleteComponent: (id: string) => boolean | Error;
}
