import { IWbsItem } from "../models/WbsItem";
import { IQueryOptions } from "../../services/queryOptions";

export interface IWbsItemsDataStore {

  getWbsItems: (queryOptions?: IQueryOptions) => Promise<IWbsItem[] | Error>;
  getWbsItemById: (id: string) => Promise<IWbsItem | Error>;
  addWbsItem: (item: IWbsItem) => Promise<string | Error>;
  updateWbsItem: (item: IWbsItem) => Promise<IWbsItem | Error>;
  deleteWbsItem: (id: string) => Promise<boolean | Error>;
}
