import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from './components/NavBar/NavBar';
import reportWebVitals from './reportWebVitals';
import TopHeader from './components/TopHeader/TopHeader';
import OurSeervice from './components/OurSeervice/OurSeervice';
import TechAnyl from './components/TechAnyl/TechAnyl';
import TotalWork from './components/TotalWork/TotalWork';
import RecentProject from './components/RecentProject/RecentProject';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NavBar />
    <TopHeader />
    <OurSeervice />
    <TechAnyl />
    <TotalWork />
    <RecentProject />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
