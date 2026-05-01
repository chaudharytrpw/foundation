"use client";

import { useAuth } from "../context/AuthContext";
import Loader from "./Loader";

export default function AppLoader({ children }) {
  const { loading } = useAuth();

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}