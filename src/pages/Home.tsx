import Board from '../components/Board';
import Header from '../components/Header';

function Home() {
    return (
        <>
            <Header />
            <div className="main-wrapper">
                <Board />
            </div>
        </>
    );
}

export default Home;
