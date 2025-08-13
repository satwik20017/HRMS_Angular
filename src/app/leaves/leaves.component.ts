import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HrmsService } from '../hrms.service';

@Component({
  selector: 'app-leaves',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './leaves.component.html',
  styleUrl: './leaves.component.css'
})
export class LeavesComponent {
  leaveForm = new FormGroup({
    name: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    reason: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private hrmsService: HrmsService) { }


  applyLeave() {
    if (this.leaveForm.valid) {
      this.hrmsService.addLeave(this.leaveForm.value as any)
      alert(`Leave Applied:\n${JSON.stringify(this.leaveForm.value, null, 2)}`);
      this.leaveForm.reset();
    }
  }
}
