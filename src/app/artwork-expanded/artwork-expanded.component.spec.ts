import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkExpandedComponent } from './artwork-expanded.component';

describe('ArtworkExpandedComponent', () => {
  let component: ArtworkExpandedComponent;
  let fixture: ComponentFixture<ArtworkExpandedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtworkExpandedComponent]
    });
    fixture = TestBed.createComponent(ArtworkExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
