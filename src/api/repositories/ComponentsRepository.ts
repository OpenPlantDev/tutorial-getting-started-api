import { IComponent } from "../models/Component";
import { IComponentsRepository } from "./IComponentsRepository";

export class ComponentsRepository implements IComponentsRepository {

  public Get(): IComponent[] | Error {
    return (new Error(`components Get is not yet implemented`));
  }

  public GetById(id: string): IComponent | Error {
    return new Error(`components GetById is not yet implemented`);
  }

  public Add(comp: IComponent): string | Error {
    return new Error(`components Add is not yet implemented`);
  }

  public Update(comp: IComponent): IComponent | Error {
    return new Error(`components Update is not yet implemented`);
  }

  public Delete(id: string): boolean | Error {
    return new Error(`components Delete is not yet implemented`);
  }

}
