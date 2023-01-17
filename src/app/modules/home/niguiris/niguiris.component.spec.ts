import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiguirisComponent } from './niguiris.component';

describe('NiguirisComponent', () => {
  let component: NiguirisComponent;
  let fixture: ComponentFixture<NiguirisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiguirisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NiguirisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
