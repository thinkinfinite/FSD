import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIpoDetailComponent } from './add-ipo-detail.component';

describe('AddIpoDetailComponent', () => {
  let component: AddIpoDetailComponent;
  let fixture: ComponentFixture<AddIpoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIpoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIpoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
