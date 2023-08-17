import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class UniqueIdService {

  //I want to know how many IDs were generated
  private numberOfGeneratedIds: number = 0;

  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;//if starts with letters following - , after any character

  constructor() {}

  /**
   * method to generate an ID using a prefix
   *
   * @param prefix
   * @returns string
   */
  public generatedUniqueIdWithPrefix(prefix: string): string {
    //FAIL FAST - errors cases first
    if (!prefix || !this.validId.test(prefix)) {
      throw Error('Prefix can not be empty.');
    }

    const uniqueId = this.generatedUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  generatedUniqueId(): string {
    return uuidv4();
  }

  public getNumberOfGeneratedIds(): number {
    return this.numberOfGeneratedIds;
  }
}
