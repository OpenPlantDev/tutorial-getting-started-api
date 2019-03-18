import {IWbsItem} from "../models/WbsItem";

export interface IWbsItemsRepository {
  Get: () => Promise<IWbsItem[] | Error>;
  GetById: (id: string) => Promise<IWbsItem | Error>;
  Add: (item: IWbsItem) => Promise<string | Error>;
  Update: (item: IWbsItem) => Promise<IWbsItem | Error>;
  Delete: (id: string) => Promise<boolean | Error>;
}
