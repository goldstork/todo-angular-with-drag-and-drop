import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
	createTodoForm = this.fb.group({
		title: ['', Validators.required],
		desc: [''],
	});

	todos: Array<Object> = [
		{
			id: 1,
			title: 'One',
			desc: 'One One One One One One'
		}
	]

	done: Array<Object> = [
		{
			id: 2,
			title: 'Done',
			desc: 'Done Done Done',
		}
	]

	constructor(private fb: FormBuilder) { }

	onSubmit(): void {
		if (this.createTodoForm.status === 'VALID') {
			const id = Math.random().toString(36).substr(3, 16)
			this.todos.push({ id, ...this.createTodoForm.value })
			this.createTodoForm.patchValue({
				title: '',
				desc: ''
			});
		}
	}

	drop(event: CdkDragDrop<string[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex);
		}
	}

}
