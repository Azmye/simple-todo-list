import { useRoutes } from "react-router";
import Layout from "../app/Layout";
import App from "../app/App";
import Login from "../app/auth/Login";
import AuthGuard from "../components/AuthGuard";

export function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <AuthGuard>
          <Layout />
        </AuthGuard>
      ),
      children: [
        {
          index: true,
          element: <App />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
}
