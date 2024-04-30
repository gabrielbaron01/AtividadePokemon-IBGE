import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexapiComponent } from './pokedexapi.component';

describe('PokedexapiComponent', () => {
  let component: PokedexapiComponent;
  let fixture: ComponentFixture<PokedexapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokedexapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
