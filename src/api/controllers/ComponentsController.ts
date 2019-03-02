import {BaseController} from "./BaseController";
import { IApiRepository } from "../repositories/IApiRepository";

export class ComponentsController extends BaseController {

  constructor(repository: IApiRepository) {
    super(repository);
  }
}
