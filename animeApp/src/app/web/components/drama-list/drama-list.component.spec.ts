import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaListComponent } from './drama-list.component';

describe('DramaListComponent', () => {
  let component: DramaListComponent;
  let fixture: ComponentFixture<DramaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
