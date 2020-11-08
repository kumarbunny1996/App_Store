import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpinnerService } from './../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  showSpinner = false;

  constructor(
    private spinnerService: SpinnerService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.spinnerService.getSpinnerObserver().subscribe((status) => {
      this.showSpinner = status === 'start';
      this.cdRef.detectChanges();
    });
  }
}
