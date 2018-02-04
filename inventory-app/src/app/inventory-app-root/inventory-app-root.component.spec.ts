import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAppRootComponent } from './inventory-app-root.component';

describe('InventoryAppRootComponent', () => {
  let component: InventoryAppRootComponent;
  let fixture: ComponentFixture<InventoryAppRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryAppRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryAppRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
