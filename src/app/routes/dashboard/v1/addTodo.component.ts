import {Component} from "@angular/core";
import {V1Service} from "./v1.service";
import {NzModalSubject,NzMessageService} from "ng-zorro-antd";

@Component({
    template:`<form nz-form #form="ngForm">
    <div nz-form-item nz-row>
        <div nz-form-label nz-col [nzSpan]="6">
            <label>任务名称</label>
        </div>
        <div nz-form-control nz-col [nzSpan]="14">
            <nz-input [nzSize]="'large'"name="name" [(ngModel)]="todo.name"></nz-input>
        </div>
    </div>
    <div nz-form-item nz-row>
        <div nz-form-label nz-col [nzSpan]="6">
            <label>任务内容</label>
        </div>
        <div nz-form-control nz-col [nzSpan]="14">
            <nz-input [nzSize]="'large'"name="content" [(ngModel)]="todo.content"></nz-input>
        </div>
    </div>
    <div nz-form-item nz-row style="margin-bottom:8px;">
        <div nz-form-control nz-col [nzSpan]="14" [nzOffset]="10">
            <button nz-button [nzSize]="'large'" [nzType]="'primary'" (click)="save()">新增</button>
        </div>
    </div>
</form>`
})
export class AddTodoComponent{
    todo = {
        creator:"admin",
        name:"",
        content:""
    }
    constructor(private v1Service: V1Service,private nzModal:NzModalSubject,private message:NzMessageService){}
    save(){
        const params = this.todo;
         this.v1Service.addTodo(params)
             .subscribe(data=>{
                 this.nzModal.destroy('onOk')
             });
    }
}
