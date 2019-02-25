import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AppData} from './app.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  todos:  AppData[] = [];
  getTitle: string;
 constructor() {

}
ngOnInit(){}

  empty(ngForm: NgForm): void{
    ngForm.reset();
    //this.todos.length = 0;
  }
  
  submit(ngForm: NgForm): void { 
    if(ngForm.value.title === "" || ngForm.value.title == null){      
       alert("please enter value");
    }else
    if(this.todos.length == 0 ){
      this.todos.push(ngForm.value)
    }else{       
      
      const search = what => this.todos.find(element => element.title === ngForm.value.title);

      if(search(ngForm.value.title)== undefined){
        this.todos.push(ngForm.value)
      }else{
        alert('Value already exists.');
        
      }
   }
      
     
    
  }
showData(args){
  
  alert(args)
}
delete(attr) {
   this.todos.splice(this.todos.findIndex(item => item.title === attr), 1)

  // this.todos.splice(this.todos.indexOf(attr));
  // return false;
}

}
