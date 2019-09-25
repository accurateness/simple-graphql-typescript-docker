import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import './App.css';

export interface ProjectData {
  id: number;
  name: string;
}

interface TaskData {
  id: number;
  title: string;
  completed: boolean;
  project: ProjectData;
}

const query = `{
  fetchTasks {
    title
    completed
    project {
      name
    }
  }
}`


const App = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    request(`http://localhost:4000`, query).then(data => {setTasks(data.fetchTasks)})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {tasks ? <ul> {tasks.map((task: TaskData) => <li>{task.project.name} - {task.title}: {task.completed ? "complete" : "incomplete"}</li>)} </ul> : null}
    </div>
  );
}

export default App;
