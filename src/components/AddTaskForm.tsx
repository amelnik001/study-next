import { useState } from "react";
import type { Priority, Task } from "./TaskList";



function AddTaskForm({onAdd}: {onAdd: (task: Task) => void}) {

    const [errors, setErrors] = useState<{ title?: string }>({});

    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState<Priority>('low');
    const [title, setTitle] = useState('');

    const validateForm = () => {
        const errors: { title?: string } = {};

        if (!title.trim()) {
            errors.title = 'Title is required';
        } else if (title.length < 3) {
            errors.title = 'Title must be at least 3 characters long';
        }
        
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (validateForm()) {
            onAdd({
                id: Date.now(),
                title: title,
                description: description,
                priority: priority,
                completed: false,
            });
            setTitle('');
            setDescription('');
            setPriority('low');
        }
    };

    return (
        <div className="border rounded-lg p-4 shadow-md cursor-pointer">
            <h2 className="text-lg font-semibold mb-2">Add Task</h2>
            <form onSubmit={handleSubmit} className="space-y-2">
                <input
                    className="border rounded-md p-2"
                    type="text"
                    placeholder="Title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                <br />
                
                {errors.title && <span className="text-red-500">{errors.title}</span>}
                <br />

                <input
                    className="border rounded-md p-2"
                    type="text" 
                    placeholder="Description" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
                  <br />

                <select
                className="border rounded-md p-2"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as Priority)}
                    name="priority"
                    id="priority">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <br />

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Добавить задачу</button>
            </form>
        </div>
    );
}

export default AddTaskForm;