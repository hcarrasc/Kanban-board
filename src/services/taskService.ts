import { supabase } from '../lib/supabase';
import type { Task, CreateTaskInput, UpdateTaskInput } from '../types/task';

export const getTasks = async (): Promise<Task[]> => {
    const { data, error } = await supabase.from('tasks').select('*').order('created_at', { ascending: true });

    if (error) {
        console.error('Error al obtener tasks:', error);
        throw error;
    }
    console.log('Fetched tasks:', data);
    return data as Task[];
};

export const createTask2 = async (input: CreateTaskInput): Promise<Task> => {
    const { data, error } = await supabase
        .from('tasks')
        .insert([
            {
                title: input.title,
                description: input.description,
                status: input.status ?? 'todo',
            },
        ])
        .select()
        .single();

    if (error) {
        console.error('Error creando task:', error);
        throw error;
    }

    return data as Task;
};

export const createTask = async (input: CreateTaskInput): Promise<Task> => {
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        throw new Error('Usuario no autenticado');
    }

    const { data, error } = await supabase
        .from('tasks')
        .insert({
            title: input.title,
            description: input.description,
            status: input.status ?? 'todo',
            user_id: user.id,
        })
        .select()
        .single();

    if (error) {
        console.error(error);
        throw error;
    }

    return data as Task;
};

export const updateTask = async (input: UpdateTaskInput): Promise<Task> => {
    const { data, error } = await supabase
        .from('tasks')
        .update({
            ...(input.status && { status: input.status }),
            ...(input.title && { title: input.title }),
            ...(input.description && { description: input.description }),
        })
        .eq('id', input.id)
        .select()
        .single();

    if (error) {
        console.error('Error actualizando task:', error);
        throw error;
    }

    return data as Task;
};
