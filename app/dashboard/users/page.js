"use client";

import { useAuth } from "@/app/context/AuthContext";
import { useData } from "@/app/context/DataContext";
import { useEffect, useState } from "react";

export default function UsersTable() {
  const { users, getUsers } = useData();
    const { user } = useAuth(); 
  

   useEffect(() => {
    
        getUsers(user); 
    
    
  }, [user]);

  console.log(users);
  

  

  return (
    <div className="min-h-screen  p-4 sm:p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow p-4 sm:p-6">

        <h2 className="text-2xl font-bold text-black mb-4">
          Users List
        </h2>

        {/* ✅ Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm border">
            <thead className="bg-green-500 text-white">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Address</th>
                <th className="p-3">Role</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="p-3 text-black">{user.name}</td>
                  <td className="p-3 text-black">{user.email}</td>
                  <td className="p-3 text-black">{user.phone}</td>
                  <td className="p-3 text-black">{user.address}</td>
                  <td className="p-3">
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                      {user.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ✅ Mobile Cards */}
        <div className="md:hidden space-y-4">
          {users.length > 0 ? (
            users.map((user, i) => (
              <div
                key={i}
                className="bg-white border rounded-lg shadow-sm p-4"
              >
                <p className="text-black font-semibold">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>

                <div className="mt-2 text-sm text-black space-y-1">
                  <p><span className="font-medium">Phone:</span> {user.phone}</p>
                  <p><span className="font-medium">Address:</span> {user.address}</p>
                </div>

                <div className="mt-2">
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                    {user.role}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No users found</p>
          )}
        </div>

      </div>
    </div>
  );
}