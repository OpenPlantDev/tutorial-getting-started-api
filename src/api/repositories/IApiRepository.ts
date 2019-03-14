import { IRepositoryItem } from "./IRepositoryItem";

export interface IApiRepository {
  resourceName: string;
  Get: () => IRepositoryItem[] | Error;
  GetById: (id: string) => IRepositoryItem | Error;
  Add: (item: IRepositoryItem) => string | Error;
  Update: (item: IRepositoryItem) => IRepositoryItem | Error;
  Delete: (id: string) => boolean | Error;
}
