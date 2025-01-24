import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import HomePage from "../../features/HomePage";
import ImpactCardsPage from "../../pages/ImpactCardsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "impact-cards", element: <ImpactCardsPage /> }
    ],
  },
]);
