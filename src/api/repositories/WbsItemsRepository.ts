import { IWbsItem } from "../models/WbsItem";
import { IWbsItemsRepository } from "./IWbsItemsRepository";
import { IWbsItemsDataStore } from "../dataStores/IWbsItemsDataStore";
import { IQueryOptions } from "../../services/queryOptions";

export class WbsItemsRepository implements IWbsItemsRepository {
  private _dataStore: IWbsItemsDataStore;

  constructor(dataStore: IWbsItemsDataStore) {
    this._dataStore = dataStore;
  }

  public async Get(queryOptions?: IQueryOptions): Promise<IWbsItem[] | Error> {
    return this._dataStore.GetWbsItems(queryOptions);
  }

  public async GetById(id: string): Promise<IWbsItem | Error> {
    return this._dataStore.GetWbsItemById(id);
  }

  public async Add(item: IWbsItem): Promise<string | Error> {
    item.id = "";

    return this._dataStore.AddWbsItem(item);
  }

  public async Update(item: IWbsItem): Promise<IWbsItem | Error> {

    return this._dataStore.UpdateWbsItem(item);
  }

  public async Delete(id: string): Promise<boolean | Error> {
    return this._dataStore.DeleteWbsItem(id);
  }

}
