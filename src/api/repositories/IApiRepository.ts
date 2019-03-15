import { IComponent } from "../models/Component";
import { IWbsItem } from "../models/WbsItem";

export type IRepositoryItem = IComponent | IWbsItem;

export interface IApiRepository {
  Get: () => IRepositoryItem[] | Error;
  GetById: (id: string) => IRepositoryItem | Error;
  Add: (item: IRepositoryItem) => string | Error;
  Update: (item: IRepositoryItem) => IRepositoryItem | Error;
  Delete: (id: string) => boolean | Error;

}
