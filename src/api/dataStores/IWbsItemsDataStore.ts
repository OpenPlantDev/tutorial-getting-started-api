import { IWbsItem } from "../models/WbsItem";
import { IQueryOptions } from "../../services/queryOptions";

export interface IWbsItemsDataStore {

  GetWbsItems: (queryOptions?: IQueryOptions) => Promise<IWbsItem[] | Error>;
  GetWbsItemById: (id: string) => Promise<IWbsItem | Error>;
  AddWbsItem: (item: IWbsItem) => Promise<string | Error>;
  UpdateWbsItem: (item: IWbsItem) => Promise<IWbsItem | Error>;
  DeleteWbsItem: (id: string) => Promise<boolean | Error>;
}
