interface TaskCounterProps {
    count: number;
}

function TaskCounter({count}: TaskCounterProps) {
    return (
        <div className="text-lg font-semibold bg-yellow-50 p-2 rounded">
            {(count > 5 ? <span className="text-red-900">У вас {count} задач</span> :
             (count >= 2 ? <span className="text-orange-900">У вас {count} задачи</span> : 
              (count === 1 ? <span className="text-orange-900">У вас 1 задача</span> : 
               <span className="text-green-900">У вас нет задач</span>)) )}
        </div>
      );
  }
  
  export default TaskCounter;