import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './reset.css';
import './theme.css';
import './index.css';
import Intro from './main/intro/intro.js';
import ProblemList from './main/problem-list/problem-list.js';
import ReflectionNote from './main/reflection-note/reflection-note.js';
import Board from './main/board/board.js';
import Search from './main/search/search.js';
import Footer from './footer/footer.js';
import { Provider } from 'react-redux';
import store from './store/store.js';
import Join from './main/join/join.js';
import Login from './main/login/login.js';
import PwFind from './main/pw-find/pw-find.js';
import PwReset from './main/pw-reset/pw-reset.js';
function Root() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Intro/>}></Route>
                    <Route path="/problem-list/*" element={<ProblemList/>}></Route>
                    <Route path="/reflection-note/*" element={<ReflectionNote/>}></Route>
                    <Route path="/board/*" element={<Board/>}></Route>
                    <Route path="/search/*" element={<Search/>}></Route>
                    <Route path="/join/*" element= {<Join/>}></Route>
                    <Route path="/login/*" element= {<Login/>}></Route>
                    <Route path="/agree/*" ></Route> // TODO
                    <Route path="/pw-find/*" element = {<PwFind />}></Route>
                    <Route path="/pw-reset/*" element = {<PwReset />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </Provider>
    )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);