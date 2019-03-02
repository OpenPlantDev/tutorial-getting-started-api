import { IApiRepository } from "./IApiRepository";
import { IRepositoryItem } from "./IRepositoryItem";

export abstract class BaseRepository implements IApiRepository {

  public resourceName: string;
  constructor(resourceName: string) {
    this.resourceName = resourceName;
  }

  public Get(): IRepositoryItem[] | Error {
    return new Error(`Get for resource ${this.resourceName} is not yet implmented`);
  }

  public GetById(id: string): IRepositoryItem | Error {
    return new Error(`GetById for resource ${this.resourceName} is not yet implmented`);
  }

  public Add(item: IRepositoryItem): string | Error {
    return new Error(`Add for resource ${this.resourceName} is not yet implmented`);
  }

  public Update(item: IRepositoryItem): IRepositoryItem | Error {
    return new Error(`Update for resource ${this.resourceName} is not yet implmented`);
  }

  public Delete(id: string): boolean | Error {
    return new Error(`Delete for resource ${this.resourceName} is not yet implmented`);
  }

}
