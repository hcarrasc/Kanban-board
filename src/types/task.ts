export type Status = 'trash' | 'todo' | 'in-progress' | 'review' | 'done';

export interface Task {
    id: string;
    title: string;
    description: string;
    status: Status;
}

export interface CreateTaskInput {
    title: string;
    description: string;
    status?: Status;
}

export interface UpdateTaskInput {
    id: string;
    status?: Status;
    title?: string;
    description?: string;
}
