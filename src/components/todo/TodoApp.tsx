"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';
import { TodoFilterComponent } from './TodoFilter';
import { TodoStats } from './TodoStats';
import { useTodos } from '@/hooks/useTodos';
import { TodoFilter } from '@/types/todo';

export function TodoApp() {
  const {
    todos,
    filter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    setFilter,
    clearCompleted,
    filteredTodos,
    stats
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Todo List</h1>
          <p className="text-gray-600">Stay organized and get things done</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-center">
              My Tasks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <TodoForm onAddTodo={addTodo} />
            
            <Separator />
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <TodoStats stats={stats} />
              <TodoFilterComponent 
                currentFilter={filter} 
                onFilterChange={setFilter}
                onClearCompleted={clearCompleted}
                hasCompleted={stats.completed > 0}
              />
            </div>

            <Separator />

            <div className="space-y-2">
              {filteredTodos.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  {filter === 'all' && todos.length === 0 && (
                    <p>No tasks yet. Add one above to get started!</p>
                  )}
                  {filter === 'active' && stats.active === 0 && (
                    <p>No active tasks. Great job!</p>
                  )}
                  {filter === 'completed' && stats.completed === 0 && (
                    <p>No completed tasks yet.</p>
                  )}
                </div>
              ) : (
                filteredTodos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                    onEdit={editTodo}
                  />
                ))
              )}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Double-click a task to edit it</p>
        </div>
      </div>
    </div>
  );
}