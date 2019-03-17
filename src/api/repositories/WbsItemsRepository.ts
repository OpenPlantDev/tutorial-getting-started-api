import { IWbsItem } from "../models/WbsItem";
import { IWbsItemsRepository } from "./IWbsItemsRepository";
import { IWbsItemsDataStore } from "../dataStores/IWbsItemsDataStore";

export class WbsItemsRepository implements IWbsItemsRepository {
  private _dataStore: IWbsItemsDataStore;

  constructor(dataStore: IWbsItemsDataStore) {
    this._dataStore = dataStore;
  }

  public Get(): IWbsItem[] | Error {
    return this._dataStore.GetWbsItems();
  }

  public GetById(id: string): IWbsItem | Error {
    return this._dataStore.GetWbsItemById(id);
  }

  public Add(item: IWbsItem): string | Error {
    item.id = "";

    return this._dataStore.AddWbsItem(item);
  }

  public Update(item: IWbsItem): IWbsItem | Error {

    return this._dataStore.UpdateWbsItem(item);
  }

  public Delete(id: string): boolean | Error {
    return this._dataStore.DeleteWbsItem(id);
  }

}
