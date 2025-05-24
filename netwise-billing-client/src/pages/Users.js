import React from 'react';
const Users = () => (
  <div>
    <h2 className="text-xl font-bold mb-2">Registered Users</h2>
    <table className="table-auto w-full bg-white shadow rounded">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2">Username</th>
          <th className="p-2">Profile</th>
          <th className="p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2">testuser</td>
          <td className="p-2">default</td>
          <td className="p-2">Active</td>
        </tr>
      </tbody>
    </table>
  </div>
);
export default Users;