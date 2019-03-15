import {IWbsItem} from "../models/WbsItem";

export interface IWbsItemsRepository {
  Get: () => IWbsItem[] | Error;
  GetById: (id: string) => IWbsItem | Error;
  Add: (item: IWbsItem) => string | Error;
  Update: (item: IWbsItem) => IWbsItem | Error;
  Delete: (id: string) => boolean | Error;
}
