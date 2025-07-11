import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleFormPage } from './simple-form.page';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SimpleFormPage', () => {
  let component: SimpleFormPage;
  let fixture: ComponentFixture<SimpleFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection()
      ],
      imports: [SimpleFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
