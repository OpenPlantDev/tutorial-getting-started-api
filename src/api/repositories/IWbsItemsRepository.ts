import {IWbsItem} from "../models/WbsItem";
import { IQueryOptions } from "../../services/queryOptions";

export interface IWbsItemsRepository {
  Get: (queryOptions?: IQueryOptions) => Promise<IWbsItem[] | Error>;
  GetById: (id: string) => Promise<IWbsItem | Error>;
  Add: (item: IWbsItem) => Promise<string | Error>;
  Update: (item: IWbsItem) => Promise<IWbsItem | Error>;
  Delete: (id: string) => Promise<boolean | Error>;
}
