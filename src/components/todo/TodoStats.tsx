import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TodoStats as StatsType } from "@/types/todo";

interface TodoStatsProps {
  stats: StatsType;
}

export function TodoStats({ stats }: TodoStatsProps) {
  const { total, active, completed } = stats;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Total:</span>
          <Badge variant="secondary">{total}</Badge>
        </div>
        <Separator orientation="vertical" className="h-4" />
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Active:</span>
          <Badge variant="default">{active}</Badge>
        </div>
        <Separator orientation="vertical" className="h-4" />
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Completed:</span>
          <Badge variant="outline">{completed}</Badge>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Progress:</span>
        <Badge variant={completionRate === 100 ? "default" : "secondary"}>
          {completionRate}%
        </Badge>
      </div>
    </div>
  );
}