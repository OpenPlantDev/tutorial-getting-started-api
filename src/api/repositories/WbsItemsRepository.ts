import { IWbsItem } from "../models/WbsItem";
import { IWbsItemsRepository } from "./IWbsItemsRepository";

export class WbsItemsRepository implements IWbsItemsRepository {
  public Get(): IWbsItem[] | Error {
    return new Error(`wbsitems Get is not yet implemented`);
  }

  public GetById(id: string): IWbsItem | Error {
    return new Error(`wbsitems GetById is not yet implemented`);
  }

  public Add(item: IWbsItem): string | Error {
    return new Error(`wbsitems Add is not yet implemented`);
  }

  public Update(item: IWbsItem): IWbsItem | Error {
    return new Error(`wbsitems Update is not yet implemented`);
  }

  public Delete(id: string): boolean | Error {
    return new Error(`wbsitems Delete is not yet implemented`);
  }
}
