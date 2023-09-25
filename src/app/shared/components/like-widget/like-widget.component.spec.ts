import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

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
    //It's not a good idea put fixture.detectChanges() inside the beforeEach()
    //because we are not be able to populate the component properties inside our
    //test. First, initilize the properties to test and after the
    //fixture.detectChanges() will run properly the onInit(), onChanges(), etc...
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Should generate ID when id input property is missing', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT generate ID when id input property is present', () => {
    //first, initilize the properties
    const myId = 'ID-123';
    component.id = myId;
    //After the properties have been initialized, call the .detectChanges();
    fixture.detectChanges();//onInit() will check that exists a value and it will not be changed
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

  // Test that the 'liked' event is emitted when the like button is clicked.
  it('should emit "liked" event when like button is clicked', () => {
    // Arrange
    const component = new LikeWidgetComponent(new UniqueIdService());
    let eventEmitted = false;
    component.liked.subscribe(() => {
      eventEmitted = true;
    });

    // Act
    component.like();

    // Assert
    expect(eventEmitted).toBe(true);
  });
});
