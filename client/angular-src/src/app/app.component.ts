import { ErrorService } from './services/error.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'App_store';
  errorMsg = false;
  errorMessage: string;
  constructor(
    private errorService: ErrorService,
    private cdRef: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.errorService.getErrorObservable().subscribe((error) => {
      this.errorMsg = error ? true : false;
      this.errorMessage = error;
      console.log(this.errorMessage);
      this.cdRef.detectChanges();
      setTimeout(() => (this.errorMsg = false), 3000);
    });
  }
}
