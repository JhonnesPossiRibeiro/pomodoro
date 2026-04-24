export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null;
  interrupDate: number | null;
  type: 'workTme' | 'shortBreakTime' | 'longBreakTime';
};
