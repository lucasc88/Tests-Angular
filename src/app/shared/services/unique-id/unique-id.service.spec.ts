import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

//describe contains the component to be tested (UniqueIdService)
//UniqueIdService.name is to use the Class name after someone refactor the name
describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;

  //before each test, this method will be called
  beforeEach(() => {
    service = new UniqueIdService(); //creates the instance
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //The base strucute: blablabla should blablabla when blablabla
  //UniqueIdService.prototype.generateUniqueIdWithPrefix.name is to use the
  //method name after someone refactor the name
  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
    const id = service.generatedUniqueIdWithPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
    should not generate duplicate ID when called multiple times`, () => {
    const ids = new Set(); //it's an array that not accept duplicate items

    for (let i = 0; i < 50; i++) {
      ids.add(service.generatedUniqueIdWithPrefix('app'));
    }
    //since it's an array without duplicate IDs, it should be has 50 elements
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedIds.name}
    should return the number of generatedIds when called.`, () => {
    const id1 = service.generatedUniqueIdWithPrefix('app');
    const id2 = service.generatedUniqueIdWithPrefix('app');

    expect(service.getNumberOfGeneratedIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
    should throw an Exception when empty`, () => {
    const emptyValues = [null, undefined, '', '0', '1'];
    emptyValues.forEach((element) => {
      //when testing an Exception, we need to write '() =>' inside the the expect
      expect(() => service.generatedUniqueIdWithPrefix(element))
        ////withContext() is used to know which element inside the array is giving the error
        .withContext(`Empty value: ${element}`)
        .toThrow();
    });
  });
});
