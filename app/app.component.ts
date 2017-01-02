import { Component, ElementRef } from '@angular/core';
import { DemoService } from './demo.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'course-syllabi',
  templateUrl: 'app/app.component.tpl.html',
  providers: [DemoService]
})
export class AppComponent  {

  public courses;
  public courses_error:Boolean = false;

  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    this.getCourses();
    //console.log(elementRef.nativeElement.getAttribute('term'));
  }
  getCourses() {
    this._demoService.getCourses().subscribe(
      data => { this.courses = data},
      err => { this.courses_error = true }
    );
  }
}
