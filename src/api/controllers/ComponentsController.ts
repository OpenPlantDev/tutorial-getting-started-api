import {BaseController} from "./BaseController";
import { IComponentsRepository } from "../repositories/IComponentsRepository";
import { IComponent } from "../models/Component";
import { SocketService } from "../../services/socketService";

export class ComponentsController extends BaseController {

  constructor(repository: IComponentsRepository, socketService: SocketService) {
    super("components", repository, socketService);
  }

  public getRepositoryItemFromBody(body: any): IComponent {
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
