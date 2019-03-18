import { IWbsItemsDataStore } from "./IWbsItemsDataStore";
import { IWbsItem } from "../models/WbsItem";
import { SqliteConnection } from "../../services/sqliteConnection";

const rowToWbsItem = (row: any): IWbsItem => {
  return {
    id: row.id,
    className: row.className,
    tag: row.tag,
    description: row.description,
  };
};

const rowsToWbsItemArray = (rows: any[]): IWbsItem[] => {
  const items: IWbsItem[] = [];
  if (rows) {
    rows.map((row) => {
      items.push(rowToWbsItem(row));
    });
  }

  return items;
};

export class WbsItemsDb implements IWbsItemsDataStore {

  private _tableName = "wbsitems";
  private _sqliteConnection: SqliteConnection;

  constructor(sqliteConnection: SqliteConnection) {
    this._sqliteConnection = sqliteConnection;
  }

  public async GetWbsItems(): Promise<IWbsItem[] | Error> {
    const query = `Select * from ${this._tableName}`;
    console.log(`query = ${query}`);
    try {
      const result = await this._sqliteConnection.Query(query);
      if (result instanceof Error) {
        return result;
      }
      return(rowsToWbsItemArray(result));
    } catch (err) {
      throw err;
    }
  }

  public async GetWbsItemById(id: string): Promise<IWbsItem | Error> {
    const query = `Select * from ${this._tableName} where id=${id}`;
    try {
      const result = await this._sqliteConnection.Query(query);
      if (result instanceof Error) {
        return result;
      }
      if (result.length <= 0) {
        return new Error(`No record found for id:[${id}]`);
      }
      return(rowToWbsItem(result[0]));
    } catch (err) {
      throw err;
    }
  }

  public async AddWbsItem(item: IWbsItem): Promise<string | Error> {
    const className = item.className;
    const tag = item.tag;
    const description = item.description;
    const query = `Insert into ${this._tableName} (className, tag, description) Values
                    ('${className}', '${tag}', '${description}')`;
    try {
      const result = await this._sqliteConnection.Execute(query);
      if (result instanceof Error) {
        return result;
      }
      return(result.lastId);
    } catch (err) {
      throw err;
    }
}

  public async UpdateWbsItem(item: IWbsItem): Promise<IWbsItem | Error> {
    const className = item.className;
    const tag = item.tag;
    const description = item.description;
    const query = `Update ${this._tableName}
                   Set className='${className}',
                       tag ='${tag}',
                       description='${description}'
                    Where id=${item.id}`;
    try {
      const result = await this._sqliteConnection.Execute(query);
      if (result instanceof Error) {
        return result;
      }
      if (result.rowsAffected <= 0) {
        return new Error(`No record found for id:[${item.id}]`);
      }
      return(item);
    } catch (err) {
      throw err;
    }
  }

  public async DeleteWbsItem(id: string): Promise<boolean | Error> {
    const query = `Delete from ${this._tableName} where id=${id}`;
    try {
      const result = await this._sqliteConnection.Execute(query);
      if (result instanceof Error) {
        return result;
      }
      if (result.rowsAffected <= 0) {
        return new Error(`No record found for id:[${id}]`);
      }
      return(true);
    } catch (err) {
      throw err;
    }
  }

}
