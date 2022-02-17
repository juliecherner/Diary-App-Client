# Personal Diary (Front End Project)

**CRUD Todo List** with options to mark todos as done, postponed, deleted and analyze results and effectifity.

[Check out deployment to Netlify](https://julie-cherner-diary-project.netlify.app/)

## Technologies

- React.js
- Chart.js
- Materual UI
- Netlify
- Firebase

## Functionality

The application has full CRUD functionality:

- get the amount of todos in progress on the home page
- get a current date and time on the planning page
- get todo advice from Firebase (option to recieve or decline a piece of advice)
- add a new todo
- edit new todo content and delete a todo
- mark as postponed/done/deleted and get a todo in a specific list
- get details about all 4 groups of todos
  - in progress
  - deleted
  - postponed
  - done
- get warnings based on the current state of progress (4 types)
- get Pie (Doughnut) Chart Diagram that visualize the structure of 4 groups of todos
- option to clean all current todos as well as all diary content

## Todos groups and analytics

- **Todos list area with full CRUD functionality**

![diary page](./src/assets/images/todo-list.png)

- **Anatylics and warnings for current todos**

![analytics and warnings](./src/assets/images/analytics.png)

- **Visualization with Diagram (with Chart.js)**

![diagram](./src/assets/images/diagram.png)
