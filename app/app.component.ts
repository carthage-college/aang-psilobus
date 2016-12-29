import { Component } from '@angular/core';
import { DemoService } from './demo.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'course-syllabi',
  templateUrl: 'app/app.component.tpl.html',
})
export class AppComponent  {

  public foods;
  public foods_error:Boolean = false;

  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    this.getFoods();
  }

  getFoods() {
    this._demoService.getFoods().subscribe(
      data => { this.foods = data},
      err => { this.foods_error = true }
    );
  }
}
