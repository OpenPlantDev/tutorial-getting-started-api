import {BaseController} from "./BaseController";
import { IComponentsRepository } from "../repositories/IComponentsRepository";
import { IComponent } from "../models/Component";

export class ComponentsController extends BaseController {

  constructor(repository: IComponentsRepository) {
    super("components", repository);
  }

  public GetRepositoryItemFromBody(body: any): IComponent {
    const comp: IComponent = {
      id: body.id,
      className: body.className,
      tag: body.tag,
      description: body.description,
      manufacturer: body.manufacturer,
      properties: body.properties,
    };

    return comp;

  }

}
