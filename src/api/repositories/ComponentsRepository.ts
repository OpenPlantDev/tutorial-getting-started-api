import { IComponent } from "../models/Component";
import { IComponentsRepository } from "./IComponentsRepository";
import { IComponentsDataStore } from "../dataStores/IComponentsDataStore";

export class ComponentsRepository implements IComponentsRepository {

  private _dataStore: IComponentsDataStore;

  constructor(dataStore: IComponentsDataStore) {
    this._dataStore = dataStore;
  }

  public async Get(): Promise<IComponent[] | Error> {
    return this._dataStore.GetComponents();
  }

  public async GetById(id: string): Promise<IComponent | Error> {
    return this._dataStore.GetComponentById(id);
  }

  public async Add(comp: IComponent): Promise<string | Error> {
    return this._dataStore.AddComponent(comp);
  }

  public async Update(comp: IComponent): Promise<IComponent | Error> {
    return this._dataStore.UpdateComponent(comp);
  }

  public async Delete(id: string): Promise<boolean | Error> {
    return this._dataStore.DeleteComponent(id);
  }

}