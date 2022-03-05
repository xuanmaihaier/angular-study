import { Component, OnInit, ViewChild } from '@angular/core'
import { RxjsService } from '../../services/rxjs.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  @ViewChild('appSons') appSons: any
  // 下面是几种定义的属性方法
  public title = '这是news组件的标题'
  msg = '这是news组件的msg属性'
  user: string = '这是news定义的user(String类型)'
  // 未赋值的函数
  public seeSee: any
  public ht: string = '<h1>这是string定义的html元素</h1>'
  public userInfo: any = {
    name: '这是定义的对象',
    age: 23,
  }
  public numbers: number = 0
  public showMe() {
    this.flag = !this.flag
  }
  public value: string = ''
  public inputSubmit(e: any) {
    this.appSons.sonFunction()
    e.preventDefault();
    e.target.value = this.value
    alert(`点击了我要双向绑定了${e.target.value}`);

  }
  public setValue(e: any) {
    this.value = e.target.value
  }
  public flag: boolean = true
  public date = new Date()
  public userArr: Array<any> = [
    {
      name: '这是定义的对象1',
      age: 23,
    },
    {
      name: '这是定义的对象2',
      age: 23,
    },
  ]

  constructor(public request: RxjsService) {
    this.seeSee = '这里的seeSee在构造数据中赋值了'
    console.log('00构造函数执行了---除了使用简单的值对局部变量进行初始化之外，什么都不应该做')
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  }

  ngOnChanges() {

    console.log('01ngOnChages执行了---当被绑定的输入属性的值发生变化时调用(父子组件传值的时候会触发)');
  }

  ngOnInit() {
    this.request.getPromsieData().then(res=>{
      console.log(res,'我是通过then拿的');
      
    })
    this.request.getRxjsData().subscribe(res=>{
      console.log(res,'我是通过subscribe拿的');
      
    })
    console.log('02ngOnInit执行了--- 请求数据一般放在这个里面');
  }
  // ngDoCheck() {
  //   console.log('03ngDoCheck执行了---检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应');
  // }
  // ngAfterContentInit() {
  //   console.log('04ngAfterContentInit执行了---当把内容投影进组件之后调用');
  // }
  // ngAfterContentChecked() {
  //   console.log('05ngAfterContentChecked执行了---每次完成被投影组件内容的变更检测之后调用');
  // }
  // ngAfterViewInit(): void {
  //   console.log('06 ngAfterViewInit执行了----初始化完组件视图及其子视图之后调用（dom操作放在这个里面）');
  // }
  // ngAfterViewChecked() {
  //   console.log('07ngAfterViewChecked执行了----每次做完组件视图和子视图的变更检测之后调用');
  // }

  ngOnDestroy() {
    console.log('08ngOnDestroy执行了····');
  }

  //自定义方法
  changeMsg() {

    this.msg = "数据改变了";
  }
}
