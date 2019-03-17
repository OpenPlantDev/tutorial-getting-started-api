import { IComponent } from "../models/Component";
import { IComponentsRepository } from "./IComponentsRepository";
import { IComponentsDataStore } from "../dataStores/IComponentsDataStore";

export class ComponentsRepository implements IComponentsRepository {

  private _dataStore: IComponentsDataStore;

  constructor(dataStore: IComponentsDataStore) {
    this._dataStore = dataStore;
  }

  public Get(): IComponent[] | Error {
    return this._dataStore.GetComponents();
  }

  public GetById(id: string): IComponent | Error {
    return this._dataStore.GetComponentById(id);
  }

  public Add(comp: IComponent): string | Error {
    return this._dataStore.AddComponent(comp);
  }

  public Update(comp: IComponent): IComponent | Error {
    return this._dataStore.UpdateComponent(comp);
  }

  public Delete(id: string): boolean | Error {
    return this._dataStore.DeleteComponent(id);
  }

}
