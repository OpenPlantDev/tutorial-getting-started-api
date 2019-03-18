import { IComponent } from "../models/Component";
import { IWbsItem } from "../models/WbsItem";
import { IQueryOptions } from "../../services/queryOptions";

export type IRepositoryItem = IComponent | IWbsItem;

export interface IApiRepository {
  Get: (queryOptions?: IQueryOptions) => Promise<IRepositoryItem[] | Error>;
  GetById: (id: string) => Promise<IRepositoryItem | Error>;
  Add: (item: IRepositoryItem) => Promise<string | Error>;
  Update: (item: IRepositoryItem) => Promise<IRepositoryItem | Error>;
  Delete: (id: string) => Promise<boolean | Error>;

}
