import { useAuth } from '../context/useAuth';

function Header() {
    const { user, signOut } = useAuth();
    const { signInWithGoogle } = useAuth();

    return (
        <header className="header">
            <h1>Kanban board</h1>
            <div className="header-actions">
                {user ? (
                    <>
                        <img src={user.user_metadata.avatar_url} alt="User Avatar" referrerPolicy="no-referrer" />
                        <span className="user">Bienvenido, {user.email}</span>
                        <button className="logout-btn" onClick={signOut}>
                            Salir
                        </button>
                    </>
                ) : (
                    <button className="login-btn" onClick={signInWithGoogle}>
                        Entrar con Google
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;
