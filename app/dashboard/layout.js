"use client";

import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({ children }) {
  const {  loading } = useAuth();
  const router = useRouter();
const user = JSON.parse(localStorage.getItem("user"));
  console.log("users",user);
  
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  

  return user ? children : null;
}