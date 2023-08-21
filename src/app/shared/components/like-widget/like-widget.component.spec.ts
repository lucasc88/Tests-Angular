import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe(LikeWidgetComponent.name, () => {

  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  //This structure is mandatory.
  //compileComponents() method will be called asynchronously.
  //Each test must be run independently.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeWidgetComponent ],
      imports: [ FontAwesomeModule ] //sometimes we need to import some external modules for you componment
    })
    .compileComponents();

    //fixture it's a wrapper that has the component instance and other utility methods.
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;

    //detectChanges() triggers the angular life cicle (onInit(), onChanges()...)
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should generate ID when id input property is missing', () => {
    expect(component.id).toBeTruthy();
  });


  it('Should NOT generate ID when id input property is present' , () => {
    const myId = 'ID-123';
    component.id = myId;
    //onInit() will check that exist a value and it will not be changed
    expect(component.id).toBe(myId);
  });


});
