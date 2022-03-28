import './App.css';
import Test from "./components/Test";
import {useEffect, useState} from "react";
import Movies from "./components/Movies";

function App() {
    const [myVar, setMyVar] = useState('Hello World')
    const [movies, setMovies] = useState([])
//    const [count, setCount] = useState(0);
    function fetchMoviesHandler() {
        fetch('https://swapi.dev/api/films/')
            .then(response => {
                console.log(response);
                return response.json();
            }).then(data => {
            console.log(data)
            setMovies(data.results);
        })
    }

    useEffect(() => {
        fetchMoviesHandler();
    });

    const onClickHandler = () => {
        setMyVar('Good Bye');

        setMyVar((prevState) => {
            return prevState + ' updated'
        })
    }

    const childToParentUpdater = (data) => {
        console.log('childToUpdater', data)
    }

    useEffect(() => {
        //     setTimeout(() => {
        //             setCount((count) => count + 1);
        //         }, 1000);
    });

    return (
        <div className="App">
            <h1>{myVar}</h1>
            <button onClick={onClickHandler}>Click me</button>
            <Test myProp={myVar} updater={childToParentUpdater}/>
            {movies.map((element) => {
                return <Movies key={element.id} movie={element}/>
            })}
        </div>
    )
}

export default App;
