import { ComponentFixture, TestBed } from '@angular/core/testing';

import { stockListComponent } from './stock-list.component';

describe('StockListComponent', () => {
  let component: stockListComponent;
  let fixture: ComponentFixture<stockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ stockListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(stockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
