import TaskItem from "./TaskItem";

export type Priority = 'low' | 'medium' | 'high';

interface Task {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    priority: Priority;
}

interface TaskListProps {
    tasks: Task[];
    onToggle: (id: number) => void;
}

function TaskList({tasks, onToggle}: TaskListProps) {
    if (!tasks.length) {
        return <div className="text-center text-gray-500">Нет задач</div>;
    }
    
    return (
        <div className="space-y-4">
            {tasks.map((task) => (
                <TaskItem key={task.id} {...task} onToggle={onToggle} />
            ))}
        </div>
      );
  }
  
  export { TaskList };
  export type { Task };