import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  //This structure is mandatory.
  //compileComponents() method will be called asynchronously.
  //Each test must be run independently.
  //fixture.detectChanges() must be outside the beforeEach() to be able to correctly test the
  // @Input() component properties
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikeWidgetComponent],
      imports: [FontAwesomeModule], //sometimes we need to import some external modules for you componment
    }).compileComponents();

    //fixture it's a wrapper that has the component instance and other utility methods.
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    //detectChanges() triggers the angular life cicle (onInit(), onChanges()...)
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Should generate ID when id input property is missing', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT generate ID when id input property is present', () => {
    const myId = 'ID-123';
    component.id = myId;
    //onInit() will check that exist a value and it will not be changed
    fixture.detectChanges();
    expect(component.id).toBe(myId);
  });

  //to test @Output properties
  it(`#${LikeWidgetComponent.prototype.like.name} should trigger emission when called`, () => {
    fixture.detectChanges();

    //first we need to subscribe the method because they are Observables
    component.liked.subscribe(() => {
      expect(true).toBeTrue();
    });

    //after we can emit the output
    component.like();
  });

    //to test @Output properties in a simpler way using Spy
    it(`#${LikeWidgetComponent.prototype.like.name} should trigger emission when called`, () => {
      //spy will observe if the Output variable will emit
      spyOn(component.liked, 'emit');

      fixture.detectChanges();

      //like() call the Output variable 'liked' to emit
      component.like();

      expect(component.liked.emit).toHaveBeenCalled();
    });


});
