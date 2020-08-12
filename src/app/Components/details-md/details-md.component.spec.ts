import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMDComponent } from './details-md.component';

describe('DetailsMDComponent', () => {
  let component: DetailsMDComponent;
  let fixture: ComponentFixture<DetailsMDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsMDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
