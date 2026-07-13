// components/container/TaskDashboard.js
'use client';

import { useState } from 'react';
import { Button, Badge, Input } from '../presentational';
import { capitalizePhrase, formatDate } from '../../utils/format';

export default function TaskDashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'install node.js environment', date: '2026-06-08', done: true },
    { id: 2, title: 'scaffold nextjs boilerplate', date: '2026-06-08', done: true },
    { id: 3, title: 'learn presentational rendering', date: '2026-06-09', done: false }
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  const addTask = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    // Use utility formatter to clean input text
    const formattedTitle = capitalizePhrase(newTitle);
    const today = new Date().toISOString().split('T')[0];
    const newTask = {
      id: Date.now(),
      title: formattedTitle,
      date: today,
      done: false
    };
    setTasks([...tasks, newTask]);
    setNewTitle('');
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(t => t.id === id ? { ...t, done: !t.done } : t)
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'active') return !t.done;
    if (filter === 'completed') return t.done;
    return true;
  });

  return (
    <div className="dashboardBox">
      <h2>Project Milestones Manager</h2>

      {/* Form Container */}
      <form onSubmit={addTask} className="formRow">
        <Input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Enter new project milestone..."
        />
        <Button type="submit">Add Milestone</Button>
      </form>

      {/* Filter Controls */}
      <div className="filterRow">
        <Button
          variant={filter === 'all' ? 'accent' : 'primary'}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'active' ? 'accent' : 'primary'}
          onClick={() => setFilter('active')}
        >
          Active
        </Button>
        <Button
          variant={filter === 'completed' ? 'accent' : 'primary'}
          onClick={() => setFilter('completed')}
        >
          Completed
        </Button>
      </div>

      {/* Task List items */}
      <div className="taskList">
        {filteredTasks.length === 0 ? (
          <p className="emptyMessage">No milestones match the active filter.</p>
        ) : (
          filteredTasks.map(task => (
            <div key={task.id} className="taskRow">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                className="taskCheckbox"
              />
              <div className="taskInfo">
                <span className={`taskTitle ${task.done ? 'taskTitleCompleted' : ''}`}>
                  {task.title}
                </span>
                <span className="taskDate">{formatDate(task.date)}</span>
              </div>
              <div className="taskAction">
                <Badge
                  text={task.done ? 'Completed' : 'Pending'}
                  status={task.done ? 'completed' : 'pending'}
                />
                <Button
                  variant="primary"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
