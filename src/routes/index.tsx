import Homepage from "@/pages";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import ChooseSlot from "@/pages/parking/choose-slot";
import SelectLocation from "@/pages/parking/select-location";
import SelectPayment from "@/pages/payment/select-payment";
import Profile from "@/pages/profile";
import EditProfile from "@/pages/profile/edit-profile";
import QRPage from "@/pages/qr";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./protected-routes";
import ParkingHistory from "@/pages/parking/parking-history";
import ParkingLocation from "@/pages/parking/parking-location";
import DetailPayment from "@/pages/payment/detail-payment";
import ParkingSlot from "@/pages/parking/parking-slot";
import ListParking from "@/pages/parking/list-parking";

const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/select-location",
        element: <SelectLocation />,
      },
      {
        path: "/choose-slot/:parkingID",
        element: <ChooseSlot />,
      },
      {
        path: "/parking-location",
        element: <ParkingLocation />,
      },
      {
        path: "/qrpage",
        element: <QRPage />,
      },
      {
        path: "/payment",
        element: <SelectPayment />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/profile/edit",
        element: <EditProfile />,
      },
      {
        path: "/history",
        element: <ParkingHistory />,
      },
      {
        path: "/parking-location",
        element: <ParkingLocation />,
      },
      {
        path: "/detail-payment",
        element: <DetailPayment />,
      },
      {
        path: "/parking-slot",
        element: <ParkingSlot />,
      },
      {
        path: "/list-parking",
        element: <ListParking />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
