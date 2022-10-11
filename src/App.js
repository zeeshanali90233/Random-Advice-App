
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import React,{Suspense} from 'react';
import Header from './components/header';
import { About } from './components/about';
import './index.css';
// const About=React.lazy(()=>import("./components/about"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header heading={'Random Quote'} searchBar={true}/>
      <Routes>
          <Route path="/about" element={

          <About />
          
          } />
        <Route path="/" element={<Layout />}>

        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
