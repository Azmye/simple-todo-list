import axios from "axios";
import { ReactNode } from "react";
import { Navigate } from "react-router";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const token = localStorage.getItem("token");

  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    return <Navigate to={"/login"} />;
  }

  return <>{children}</>;
}
