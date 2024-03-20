# ng-playgrund

to learn and practice angular concepts

## Lazy Loading

- If the App is large can prevent the app taking too long buy only opening modules when they are access
- Benefits - smaller bundle size - improved Performance

```
const routes: Routes = [
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  }
];
```

## Angular Life cycle Hooks

Angular lifecycle hooks are functions that allow you to tap into specific moments in the life of a component or directive. They give you the opportunity to perform actions at different stages of a component's lifecycle, from its initialization to its destruction.

### ngOnInit - OnInit

Initializes the component or directive. This is a good place to fetch initial data for the component. In a Todo List app, you would use ngOnInit() to fetch the list of todo items from a server or local storage when the component is created.

Use case: Initialize the component. Fetch initial data.

```
ngOnInit() {
  this.todoService.getTodos().subscribe(todos => {
    this.todos = todos;
  });
}
```

### ngOnChanges - OnChanges

Responds to changes in one or more input properties of the component. If your Todo List component has an input property that filters todos (e.g., based on completion status), you can use ngOnChanges to react whenever the filter changes.

Use case: Respond to changes in input properties.

```
ngOnChanges(changes: SimpleChanges) {
  if (changes['filter']) {
    this.applyFilter(this.filter);
  }
}
```

### ngDoCheck() - DoCheck

Invoked with every change detection run. This is a manual and a more detailed check of the component/directive. For a Todo List, you might use it to check if the list of todo items has been modified externally (though it's less common to use this in favor of more efficient strategies).
Use case: Custom change detection.

```
  ngDoCheck() {
    // Check for changes in the todos array
    const change = this.differ.diff(this.todos);
    if (change) {
      console.log('Changes detected in todos array!');
      // Perform any action needed when changes are detected
      // For example, you might want to save the updated todos list to local storage or update a view.
    }
  }
```

### ngAfterContentChecked() - AfterContentChecked

Use case: Respond after content has been checked by Angular's change detection.

Called after every check of the component's or directive's content. Similar to ngDoCheck, but for the content projected into the component.

```
ngAfterContentChecked() {
    // Called after the projected content has been checked
    console.log('Projected content checked again.');

    // Here you can perform any necessary actions in response to changes in the content.
    // For example, adjusting the UI based on the presence or state of the customFilter.
  }
```

### ngAfterContentInit() - AfterContentInit

Called after Angular projects external content into the component's view. If your Todo List uses content projection to include additional content or actions, you can use this hook to perform actions after the content is initialized.

Use case: Respond after content projection is initialized.

```
ngAfterContentInit() {
    // At this point, any content projected into the component is initialized
    if (this.customActions) {
      console.log('Custom actions content is projected into the component.');
      // Perform any necessary initialization or adjustments based on the presence of customActions
    } else {
      console.log('No custom actions content projected.');
    }
  }
```

### ngAfterViewInit() - AfterViewInit

Called after Angular initializes the component's views and child views. In a Todo List app, if you need to access or modify the DOM of your items list after it has been fully initialized, this is the place to do it.

Use case: Respond after the component's view (and child views) are initialized.

```
ngAfterViewInit() {
  this.todoItems.changes.subscribe(() => this.updateItems());
}
```

### ngAfterViewChecked() - AfterViewChecked

Use case: Respond after the component's view and child views have been checked by Angular's change detection.

Called after every check of the component's views and child views. Useful if the view changes need to be checked manually.

The ngAfterViewChecked() hook is called after Angular completes checking the component's view and its child views, or any views that the component is directly responsible for. This checking process is part of Angular's change detection mechanism, which is responsible for ensuring that the view reflects the current state of the model.

**When it's Called**

- **After Initial Rendering:** After the first rendering of the component's view and its child views, Angular calls ngAfterViewChecked().
- **After Subsequent Updates:** Whenever the data-bound properties of your component or its child components change, and Angular's change detection mechanism checks the view, ngAfterViewChecked() is called again. This happens frequently, as Angular runs change detection often to ensure that the UI stays up-to-date with the underlying data models.

**Use Cases**
ngAfterViewChecked() is particularly useful when you need to perform actions related to the view, but only after Angular has completed its checks and updates to the view. Some specific scenarios might include:

- **Performing DOM Manipulations:** If you need to perform manual adjustments or calculations based on the final dimensions or positioning of elements, ngAfterViewChecked() is a safe place to do so. At this point, all child components have been checked and their views are up-to-date.

- **Responding to View Updates:** When you have operations that should occur each time the view is updated, like adjusting scroll positions or triggering animations based on view changes.

**Example Scenario in a Todo List App**
Imagine you have a Todo List app where each todo item can be expanded to show more details, and you want to ensure that the currently selected item is always scrolled into view.

You might have a method like scrollToActiveItem() that calculates the position of the active (or selected) todo item and scrolls the container accordingly. Because the exact dimensions and positioning can change each time Angular updates the view (for instance, if items are added or removed, or if an item's content changes size), you would call this method within ngAfterViewChecked() to ensure it executes after every view update:

```
ngAfterViewChecked() {
  this.scrollToActiveItem();
}

```

**Important Considerations**
Performance: Since ngAfterViewChecked() is called frequently, any operations you perform inside it can have a significant impact on your app's performance. Ensure that actions are as lightweight as possible and consider debouncing or throttling operations if they are potentially expensive.

Change Detection Loop: Be cautious about triggering additional change detection cycles within ngAfterViewChecked(). Modifying component properties that are bound to the template could result in errors or performance issues, as Angular might detect a potential infinite loop of changes.

Understanding ngAfterViewChecked() is about knowing it's a hook for after-the-fact checks and operations related to the component's view and child views. It offers a powerful, if nuanced, opportunity to interact with your component's rendering process.

### ngOnDestroy() - OnDestroy

Cleans up just before Angular destroys the component. Use this to unsubscribe from observables or detach event handlers to prevent memory leaks. In a Todo List app, you might use it to save the current state to local storage or to unsubscribe from a service to prevent memory leaks.

Use case: Cleanup just before the component is destroyed.

```
ngOnDestroy() {
  this.todosSubscription.unsubscribe();
}
```

## Angular Decorators

### @ViewChild

The `@ViewChild` decorator is a key feature in Angular that allows you to access a component, directive, or DOM element from within your class. It's particularly useful when you need to directly interact with an element or call methods on a child component or directive.

**Basic Usage**
You can use `@ViewChild` to access template elements, components, or directives referenced by template reference variables, component types, or directive types. Once accessed, you can manipulate those elements, call methods on child components, or use the reference in various other ways.

**Example in a Todo List App**
Let's say you have a Todo List application with a component for entering new todos (NewTodoComponent) and another component that displays the list of todos (TodoListComponent). If you want to focus the input field in NewTodoComponent automatically when a certain condition is met (for example, when the component is first displayed), you can use @ViewChild to access the input element directly.

Step 1: Define the Child Component
child component

```
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  template: `<input #newTodoInput type="text" placeholder="Add new todo...">`
})
export class NewTodoComponent {
  @ViewChild('newTodoInput') newTodoInput!: ElementRef;

  focusInput() {
    this.newTodoInput.nativeElement.focus();
  }
}
```

In NewTodoComponent, @ViewChild('newTodoInput') is used to get a reference to the input element. The focusInput method uses this reference to set focus on the input.

Step 2: Use the Child Component in a Parent Component
Next, integrate NewTodoComponent in a parent component and use @ViewChild to call a method on NewTodoComponent:

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NewTodoComponent } from './new-todo.component';

```
@Component({
  selector: 'app-todo-list',
  template: `
    <app-new-todo></app-new-todo>
    <!-- Todo list items -->
  `
})
export class TodoListComponent implements AfterViewInit {
  @ViewChild(NewTodoComponent) newTodoComponent!: NewTodoComponent;

  ngAfterViewInit() {
    // Focus the input once the view is initialized
    this.newTodoComponent.focusInput();
  }
}
```

In TodoListComponent, @ViewChild(NewTodoComponent) is used to access the instance of NewTodoComponent. After the view initializes (ngAfterViewInit lifecycle hook), it calls the focusInput method on the child component to automatically focus the input field.
