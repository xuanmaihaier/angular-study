import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sons',
  templateUrl: './sons.component.html',
  styleUrls: ['./sons.component.css']
})
export class SonsComponent implements OnInit {
@Input() msg:any
  constructor() { }
  sonFunction(){
    alert('我是子组件emit的方法')
  }
  ngOnInit(): void {
  }

}
