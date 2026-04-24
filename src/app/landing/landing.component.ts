import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements AfterViewInit {

  ngAfterViewInit() {
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
      video.load();
      video.play().catch(() => {});
    });
  }

}
