import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPolozenIspitComponent } from './add-polozen-ispit.component';

describe('AddPolozenIspitComponent', () => {
  let component: AddPolozenIspitComponent;
  let fixture: ComponentFixture<AddPolozenIspitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPolozenIspitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPolozenIspitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
