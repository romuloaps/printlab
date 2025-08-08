import { ChangeDetectionStrategy, Component, provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FormDirective } from './form.directive';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule, FormDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form #form="ngForm" (formValueChange)="onFormChange($event)">
      <input type="text" name="name" [ngModel]="name">
    </form>
  `
})
class TestComponent {
  name = '';

  onFormChange(formValue: any) {
    this.name = formValue.name;
  }
}

describe('FormDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let testComponent: TestComponent;
  let directive: FormDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
      imports: [TestComponent, FormsModule, FormDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.autoDetectChanges();
  });

  beforeEach(() => {
    testComponent = fixture.componentInstance;
    const directiveDebugElement = fixture.debugElement.query(By.directive(FormDirective));
    directive = directiveDebugElement.injector.get(FormDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
  
  it('should change component name property after change input value', async () => {
    const expectedValue = 'changed';
        
    const input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = expectedValue;
    input.dispatchEvent(new Event('input'));

    await fixture.whenStable();
    expect(testComponent.name).toBe(expectedValue);
  })
});
