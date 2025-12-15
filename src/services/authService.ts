import { supabase } from '../lib/supabase';

export const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw error;
    return data.user;
};

export const getCurrentUser = async () => {
    const { data } = await supabase.auth.getUser();
    return data.user;
};

export const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: window.location.origin,
        },
    });

    if (error) {
        console.error('Error login Google:', error);
        throw error;
    }
};

export const signOut = async () => {
    await supabase.auth.signOut();
};
