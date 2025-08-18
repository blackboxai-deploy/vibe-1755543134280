export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoFormData {
  title: string;
  description?: string;
}

export type TodoFilter = 'all' | 'active' | 'completed';

export interface TodoStats {
  total: number;
  active: number;
  completed: number;
}

export interface UseTodosReturn {
  todos: Todo[];
  filter: TodoFilter;
  stats: TodoStats;
  addTodo: (data: TodoFormData) => void;
  updateTodo: (id: string, updates: Partial<Todo>) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  setFilter: (filter: TodoFilter) => void;
  clearCompleted: () => void;
  filteredTodos: Todo[];
}