import type { Task } from "./TaskList";

interface TaskItemProps extends Task {    
    onToggle: (id: number) => void;
}

function TaskItem({id, title, description, completed, priority, onToggle}: TaskItemProps) {
    return (
        <div className={`p-4 border rounded-lg transition-all duration-200 hover:shadow-md cursor-pointer ${
            completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200'
          }`} onClick={() => onToggle(id)}>
            <h3 className={`text-lg font-semibold mb-2 ${completed ? 'line-through' : ''}`}>{title}</h3>

            {description && <p className={`text-sm text-gray-600 mb-4 ${completed ? 'line-through' : ''}`}>{description}</p>}

            <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs ${
                    priority === 'low' ? 'bg-green-100 text-green-800' :
                    priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                }`}>{priority}</span>
            </div>
          </div>
      );
  }
  
  export default TaskItem;