import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaFormComponent } from './drama-form.component';

describe('DramaFormComponent', () => {
  let component: DramaFormComponent;
  let fixture: ComponentFixture<DramaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
