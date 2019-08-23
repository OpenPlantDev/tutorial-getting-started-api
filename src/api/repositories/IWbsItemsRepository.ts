import {IWbsItem} from "../models/WbsItem";
import { IQueryOptions } from "../../services/queryOptions";

export interface IWbsItemsRepository {
  get: (queryOptions?: IQueryOptions) => Promise<IWbsItem[] | Error>;
  getById: (id: string) => Promise<IWbsItem | Error>;
  add: (item: IWbsItem) => Promise<string | Error>;
  update: (item: IWbsItem) => Promise<IWbsItem | Error>;
  delete: (id: string) => Promise<boolean | Error>;
}
