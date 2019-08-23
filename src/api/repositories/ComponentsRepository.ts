import { IComponent } from "../models/Component";
import { IComponentsRepository } from "./IComponentsRepository";
import { IComponentsDataStore } from "../dataStores/IComponentsDataStore";
import { IQueryOptions } from "../../services/queryOptions";

export class ComponentsRepository implements IComponentsRepository {

  private _dataStore: IComponentsDataStore;

  constructor(dataStore: IComponentsDataStore) {
    this._dataStore = dataStore;
  }

  public async get(queryOptions?: IQueryOptions): Promise<IComponent[] | Error> {
    return this._dataStore.getComponents(queryOptions);
  }

  public async getById(id: string): Promise<IComponent | Error> {
    return this._dataStore.getComponentById(id);
  }

  public async add(comp: IComponent): Promise<string | Error> {
    return this._dataStore.addComponent(comp);
  }

  public async update(comp: IComponent): Promise<IComponent | Error> {
    return this._dataStore.updateComponent(comp);
  }

  public async delete(id: string): Promise<boolean | Error> {
    return this._dataStore.deleteComponent(id);
  }

}
