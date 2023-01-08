import React from 'react'
import './App.css';
import DragNDrop from './components/DragNDrop';


const data = [
  {title: 'task 1', task: 'description', due: 'due date', completed: 'boolean'},
  {title: 'task 2', task: 'description', due: 'due date', completed: 'boolean'},
  {title: 'task 3', task: 'description', due: 'due date', completed: 'boolean'},
  {title: 'task 4', task: 'description', due: 'due date', completed: 'boolean'},
  {title: 'task 5', task: 'description', due: 'due date', completed: 'boolean'},
  {title: 'task 6', task: 'description', due: 'due date', completed: 'boolean'},
  {title: 'task 7', task: 'description', due: 'due date', completed: 'boolean'}
]

function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1>TaskTime</h1>
      </div>
      <header class="App-header">
        <DragNDrop data={data}/>
      </header>
    </div>
  );
}

export default App;
