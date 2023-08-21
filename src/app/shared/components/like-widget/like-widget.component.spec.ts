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
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

});
