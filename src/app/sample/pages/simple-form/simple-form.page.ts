import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal, viewChild, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormDirective } from '@core/directive/form.directive';
import Simple from '../../models/simple.model';

@Component({
  selector: 'app-simple-form',
  imports: [CommonModule, FormsModule, FormDirective],
  templateUrl: './simple-form.page.html',
  styleUrl: './simple-form.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleFormPage {

  protected form = viewChild(NgForm);
  readonly formValue = signal<Partial<Simple>>({});
  readonly formDirty = signal(false);
}
