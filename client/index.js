import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import 'bootstrap';
import App from './components/App';
import Login from './components/Login';
import Home from './components/Home';
import FileUploadPage from './components/UploadFile';
import FileDetailPage from './components/FileDetail';
import FileEditPage from './components/FileEdit';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
 
// ReactDOM.render(
//     <h1>Hello World</h1>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<FileUploadPage />} />
        <Route path="/detail" element={<FileDetailPage />} />
        <Route path="/edit" element={<FileEditPage/>} />
        {/* 如果有主应用组件，可以这样设置 */}
        <Route path="/app" element={<App />} />
        {/* 默认重定向到 /login */}
        <Route path="/" element={<Navigate replace to="/login" />} />
        {/* 通配符路由，用于捕获所有未匹配的路由，重定向到 /login */}
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);