import styles from "./App.module.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./components/PageHome/PageHome";
import PageAbout from "./components/PageAbout/PageAbout";
import PagePost from "./components/PagePost/PagePost";

function App() {
    console.log("App component rendered");

    return (
        <div className={styles.container}>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<PageHome/>}></Route>
                    <Route path="/about" element={<PageAbout />}></Route>
                    <Route path="/posts" element={<PagePost />}></Route>
                    {/* <Route path='/posts/:id' element={<h1>Post ID Page</h1>}></Route> */}
                    <Route path="*" element={<h1>Not Found Page</h1>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
