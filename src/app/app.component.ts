import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courses = [
    {
      id: 37775,
      title: 'The Campus Quick Start Guide',
      url: 'http://scottsbasslessons.com/courses/the-campus-quick-start-guide',
      image:
        'https://scottsbasslessons.imgix.net/header-backgrounds/campus-quick-start-guide.png',
      runningTime: '54',
    },
    {
      id: 37784,
      title: 'Bass 101: The Anatomy of The Bass & Getting Started',
      url:
        'http://scottsbasslessons.com/courses/bass-101-the-anatomy-of-the-bass-getting-started',
      image:
        'https://scottsbasslessons.imgix.net/header-backgrounds/bass-101-anatomy-bass-getting-started.jpg',
    },
    {
      id: 37786,
      title: 'Bass Guitar Foundations - The Definitive Guide',
      url:
        'http://scottsbasslessons.com/courses/bass-guitar-foundations-the-definitive-guide',
      image:
        'https://scottsbasslessons.imgix.net/header-backgrounds/bass-guitar-foundations-definitive-guide.jpg',
      runningTime: '263',
    },
    {
      id: 49051,
      title: 'Functional Theory for Bassists Vol 1',
      url:
        'http://scottsbasslessons.com/courses/functional-theory-for-bassists-vol-1',
      image:
        'https://scottsbasslessons.imgix.net/header-backgrounds/functional-theory-bassists-volume-1.jpg',
      runningTime: '144',
    },
    {
      id: 37788,
      title: 'Essential Groove Techniques',
      url: 'http://scottsbasslessons.com/courses/essential-groove-techniques',
      image:
        'https://scottsbasslessons.imgix.net/header-backgrounds/essential-groove-techniques.jpg',
      runningTime: '53',
    },
    {
      id: 143230,
      title: 'Playing it Safe - A Bassist’s Guide to Preventing Injury',
      url:
        'http://scottsbasslessons.com/courses/a-bassists-guide-to-preventing-injury',
      image:
        'https://scottsbasslessons.imgix.net/header-backgrounds/Randy-Kertz-Course-Thumbnail_190807_103313.jpg',
    },
  ];
}
