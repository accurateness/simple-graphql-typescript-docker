export interface ProjectData {
  id: number;
  name: string;
}

export interface TaskData {
  id: number;
  title: string;
  completed: boolean;
  project_id: number;
}

export const projects: ProjectData[] = [
  { id: 1, name: "Learn React Native" },
  { id: 2, name: "Workout" },
  { id: 3, name: "Dockerize" },
];

export const tasks: TaskData[] = [
  { id: 1, title: "Install Node", completed: true, project_id: 1 },
  { id: 2, title: "Install React Native CLI", completed: false, project_id: 1},
  { id: 3, title: "Install Xcode", completed: false, project_id: 1 },
  { id: 4, title: "Morning Jog", completed: true, project_id: 2 },
  { id: 5, title: "Visit the gym", completed: false, project_id: 2 },
  { id: 6, title: "Docker hotreload", completed: true, project_id: 3 },
  { id: 7, title: "Docker compose", completed: true, project_id: 3 },
  { id: 8, title: "Docker working", completed: true, project_id: 3 },
];
