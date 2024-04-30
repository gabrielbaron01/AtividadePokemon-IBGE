import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbgeapiComponent } from './ibgeapi.component';

describe('IbgeapiComponent', () => {
  let component: IbgeapiComponent;
  let fixture: ComponentFixture<IbgeapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IbgeapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IbgeapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
