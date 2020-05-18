import { Injectable } from '@angular/core';

@Injectable()
export class ArraysService {
  addElementAtTheBeggingOfTheArray<T>(
    element: T,
    elementArray: Array<T>
  ): Array<T> {
    elementArray.unshift(element);
    return elementArray;
  }

  updateElementInArray<T>(
    elementIndex: number,
    element: T,
    elementArray: Array<T>
  ): Array<T> {
    return elementArray
      .slice(0, elementIndex)
      .concat([element, ...elementArray.slice(elementIndex + 1)]);
  }

  removeElementFromArray<T>(
    elementIndex: number,
    elementArray: Array<T>
  ): Array<T> {
    return elementArray
      .slice(0, elementIndex)
      .concat(elementArray.slice(elementIndex + 1));
  }
}
