"use client";

import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

   const getUsers = async (data) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }), // 👈 payload yaha bheja
      }
    );

    const data = await res.json();

    if (res.ok) {
      setUsers(data.data || []);
    } else {
      console.error(data.message);
    }
  } catch (err) {
    console.error("Error fetching users:", err);
  } finally {
    setLoading(false);
  }
};

  

  return (
    <DataContext.Provider value={{ users, loading, getUsers }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);