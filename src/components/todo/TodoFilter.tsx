"use client";

import { Button } from "@/components/ui/button";
import { TodoFilter as FilterType } from "@/types/todo";

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  onClearCompleted: () => void;
  hasCompleted: boolean;
}

export function TodoFilterComponent({
  currentFilter,
  onFilterChange,
  onClearCompleted,
  hasCompleted,
}: TodoFilterProps) {
  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: "All" },
    { key: "active", label: "Active" },
    { key: "completed", label: "Completed" },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-t">
      <div className="flex items-center gap-2">
        {filters.map((filter) => (
          <Button
            key={filter.key}
            variant={currentFilter === filter.key ? "default" : "outline"}
            size="sm"
            onClick={() => onFilterChange(filter.key)}
            className="min-w-[80px]"
          >
            {filter.label}
          </Button>
        ))}
      </div>
      
      <div className="flex items-center gap-4">
        {hasCompleted && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearCompleted}
            className="text-muted-foreground hover:text-destructive"
          >
            Clear completed
          </Button>
        )}
      </div>
    </div>
  );
}