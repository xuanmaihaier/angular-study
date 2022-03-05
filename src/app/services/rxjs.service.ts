import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor() { }
  getPromsieData(){
    return new Promise(resolve =>{
      setTimeout(() => {
        resolve('我是promise造的假请求')
      }, 2500);
    })
  }
  getRxjsData(){
    return new Observable(observer=>{
      setTimeout(()=>{
        observer.next('我是rxjs造的请求')
      },2500)
    })
  }
}
