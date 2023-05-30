import Header from "./Header";
import SnackList from "./SnacksList";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <main>
                <SnackList />
            </main>
        </div>
    );
}

export default App;
