import { IWbsItem } from "../models/WbsItem";
import { IWbsItemsRepository } from "./IWbsItemsRepository";
import { IWbsItemsDataStore } from "../dataStores/IWbsItemsDataStore";
import { IQueryOptions } from "../../services/queryOptions";

export class WbsItemsRepository implements IWbsItemsRepository {
  private _dataStore: IWbsItemsDataStore;

  constructor(dataStore: IWbsItemsDataStore) {
    this._dataStore = dataStore;
  }

  public async get(queryOptions?: IQueryOptions): Promise<IWbsItem[] | Error> {
    return this._dataStore.getWbsItems(queryOptions);
  }

  public async getById(id: string): Promise<IWbsItem | Error> {
    return this._dataStore.getWbsItemById(id);
  }

  public async add(item: IWbsItem): Promise<string | Error> {
    item.id = "";

    return this._dataStore.addWbsItem(item);
  }

  public async update(item: IWbsItem): Promise<IWbsItem | Error> {

    return this._dataStore.updateWbsItem(item);
  }

  public async delete(id: string): Promise<boolean | Error> {
    return this._dataStore.deleteWbsItem(id);
  }

}
