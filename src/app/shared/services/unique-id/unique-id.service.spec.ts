import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

//describe contains the component to be tested (UniqueIdService)
//UniqueIdService.name is to use the Class name after someone refactor the name
describe(UniqueIdService.name, () => {
  let service: UniqueIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //The base strucute: blablabla should blablabla when blablabla
  //UniqueIdService.prototype.generateUniqueIdWithPrefix.name is to use the
  //method name after someone refactor the name
  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService();//create an Instance
    const id = service.generatedUniqueIdWithPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  });
});
