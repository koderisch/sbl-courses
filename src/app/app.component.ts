import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Course} from './models/course.model';
import {CoursesJson} from './models/courses-json.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  courses: Course[];
  JsonDataUrl = 'https://api.jsonbin.io/b/5e95bd3c5fa47104cea035df';
  error = '';

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.error = '';
    this.http.get<CoursesJson>(this.JsonDataUrl).subscribe(
      (jsonData) => this.processCourses(jsonData),
      (err) => {
        this.setErrorMsg(err);
      },
    );
  }

  processCourses(jsonData) {
    this.courses = jsonData.items;
  }

  setErrorMsg(err) {
    console.log('errors', err);
    this.error = err.name + ': ' + err.message;
  }
}
