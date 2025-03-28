import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';



@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TodoComponent 
  ],
  imports: [
    BrowserModule,FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
