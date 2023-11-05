import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import Home from "../page/home";
import PrivateRoute from "../private/PrivateRoute";
import TaskList from "../page/TaskList";
import AddTask from "../page/AddTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/home",
    element: <PrivateRoute><Home /></PrivateRoute>,
    children:[
      {
        path:'',
        element:<TaskList></TaskList>
      },
      {
        path:'add-task',
        element:<AddTask/>
      }
    ]
  },
  {
    path: "/auth",
    element: <Login />,
  },
]);

export default router;
