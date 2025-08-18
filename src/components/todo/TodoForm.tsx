"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

interface TodoFormProps {
  onAddTodo: (title: string, description?: string) => void;
}

export function TodoForm({ onAddTodo }: TodoFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTodo(title.trim(), description.trim() || undefined);
      setTitle("");
      setDescription("");
      setIsExpanded(false);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (e.target.value && !isExpanded) {
      setIsExpanded(true);
    }
  };

  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Add a new task..."
              value={title}
              onChange={handleTitleChange}
              className="flex-1"
              autoFocus
            />
            <Button type="submit" disabled={!title.trim()} size="icon" title="Add Task">
              ➕
            </Button>
          </div>
          
          {isExpanded && (
            <div className="space-y-3">
              <Textarea
                placeholder="Add a description (optional)..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[80px] resize-none"
              />
              <div className="flex gap-2 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsExpanded(false);
                    setDescription("");
                    if (!title.trim()) {
                      setTitle("");
                    }
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" size="sm" disabled={!title.trim()}>
                  Add Task
                </Button>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}