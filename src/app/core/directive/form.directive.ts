import { Directive, inject, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';

@Directive({
  selector: 'form'
})
export class FormDirective {
  private readonly ngForm = inject(NgForm, {self: true});
  @Output() public readonly formValueChange = this.ngForm.form.valueChanges;
  @Output() public readonly formDirtyChange = this.ngForm.form.valueChanges.pipe(map(() => { this.ngForm.form.dirty }));
}
