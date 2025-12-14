export type Status = 'inbox' | 'todo' | 'in-progress' | 'review' | 'done';

export interface Task {
    id: string;
    title: string;
    description: string;
    status: Status;
}
