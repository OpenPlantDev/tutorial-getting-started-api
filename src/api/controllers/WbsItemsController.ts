import {BaseController} from "./BaseController";
import { IApiRepository } from "../repositories/IApiRepository";

export class WbsItemsController extends BaseController {

  constructor(repository: IApiRepository) {
    super(repository);
  }
}
