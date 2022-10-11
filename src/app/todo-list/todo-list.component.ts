import { Component } from '@angular/core';
import { todoItem } from './taskitem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  tasks: todoItem[] = [
    { description: 'Arrumar a cama', done: true },
    { description: 'Fazer tarefa', done: true },
  ];

  addTask(description: string) {
    this.tasks.push({
      description: description,
      done: false,
    });
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }
}
