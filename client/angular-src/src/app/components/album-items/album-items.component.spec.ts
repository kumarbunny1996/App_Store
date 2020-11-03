import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumItemsComponent } from './album-items.component';

describe('AlbumItemsComponent', () => {
  let component: AlbumItemsComponent;
  let fixture: ComponentFixture<AlbumItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
