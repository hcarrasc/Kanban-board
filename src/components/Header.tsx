import { useAuth } from '../context/useAuth';
import Login from './Login';

function Header() {
    const { user, signOut } = useAuth();

    return (
        <header className="header">
            <h1>Kanban board</h1>
            <div className="header-actions">
                {user ? (
                    <>
                        <span className="user">Bienvenido, {user.email}</span>
                        <button onClick={signOut}>Salir</button>
                    </>
                ) : (
                    <Login />
                )}
            </div>
        </header>
    );
}

export default Header;
