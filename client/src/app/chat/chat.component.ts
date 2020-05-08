import { Component, OnInit } from '@angular/core';
import * as Peer from 'simple-peer';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  private _mediaStream: Promise<MediaStream>;
  constructor() {
    this._mediaStream = navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });
  }

  ngOnInit(): void {
    this._mediaStream
      .then(this.broadcast)
  }

  broadcast(stream) {

  }

}
