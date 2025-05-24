import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddUser from './pages/AddUser';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Payments from './pages/Payments';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 text-xl font-bold">NetWise Billing</header>
        <nav className="bg-white shadow p-4 flex space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">Dashboard</Link>
          <Link to="/add-user" className="text-blue-600 hover:underline">Add User</Link>
          <Link to="/users" className="text-blue-600 hover:underline">View Users</Link>
          <Link to="/payments" className="text-blue-600 hover:underline">Payments</Link>
        </nav>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/users" element={<Users />} />
            <Route path="/payments" element={<Payments />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;