
import './App.css'
import Welcome from './components/Welcome'
import TaskCounter from './components/TaskCounter'
import { TaskList } from './components/TaskList'
import type { Task } from './components/TaskList'
import { useState } from 'react'
import AddTaskForm from './components/AddTaskForm'

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { 
      id: 1, 
      title: "Изучить React", 
      description: "Освоить основы React компонентов",
      completed: false, 
      priority: "high"
    },
    { 
      id: 2, 
      title: "Сделать проект", 
      description: "Создать приложение для управления задачами",
      completed: true, 
      priority: "medium"
    },
    { 
      id: 3, 
      title: "Прочитать документацию", 
      completed: false, 
      priority: "low"
    },
    { 
      id: 4, 
      title: "Написать тесты", 
      description: "Покрыть код unit-тестами",
      completed: false, 
      priority: "high"
    }
  ]);

  const handleToggle = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAddTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="p-4 space-y-4">
      <Welcome name="Александр" />

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Тестирование TaskCounter:</h2>
        <TaskCounter count={tasks.length} />
        <TaskList tasks={tasks} onToggle={handleToggle} />
        <AddTaskForm onAdd={handleAddTask} />
      </div>
    </div>
  )
}

export default App
