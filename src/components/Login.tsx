import { useAuth } from '../context/useAuth';

function Login() {
    const { signInWithGoogle } = useAuth();

    return <button onClick={signInWithGoogle}>Entrar con Google</button>;
}

export default Login;
