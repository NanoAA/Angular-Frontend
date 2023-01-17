import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoupComponent } from './soup.component';

describe('SoupComponent', () => {
  let component: SoupComponent;
  let fixture: ComponentFixture<SoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
