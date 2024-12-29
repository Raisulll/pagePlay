import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Publisherlogin';
import { Home } from './HomePublisher';
import { RequestedBooklist } from './RequestedBooklistPublisher';
import { Booklist } from './BooklistPublisher';
import { Transaction } from './TransactionPublisher';
import { PublisherProfile } from './PublisherProfile';
import { AddBook } from './AddBookPublisher';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/requested-books" element={<RequestedBooklist />} />
        <Route path="/booklist" element={<Booklist />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/profile" element={<PublisherProfile />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
