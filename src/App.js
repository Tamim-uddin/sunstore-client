import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider";
import Addproducts from "./Pages/Dashboard/Addproducts/Addproducts";
import Addreviews from "./Pages/Dashboard/Addreviews/Addreviews";
import AdminRoute from "./Pages/Dashboard/AdminRoute/AdminRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/Dashboard/DashboardHome/DashboardHome";
import DashboardH from "./Pages/Dashboard/DashboardH/DashboardH";
import Makeadmin from "./Pages/Dashboard/Makeadmin/Makeadmin";
import Manageallorders from "./Pages/Dashboard/Manageallorders/Manageallorders";
import Myorders from "./Pages/Dashboard/MyOrders/Myorders";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
     <Router>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/login" element={<Login />}/>
       <Route path="/register" element={<Register />} />
       <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute> }>
         
          <Route exact path="/dashboard" element={<DashboardH />} />
          <Route path= {`/dashboard/myorders`} element={<Myorders />} />
          <Route path= {`/dashboard/payment/:bookingId`} element={<Payment />} />
         
          <Route path={`/dashboard/addproduct`} element={<AdminRoute><Addproducts /></AdminRoute>} />
          <Route path={`/dashboard/addreview`} element={<Addreviews />}/>
          <Route path={`/dashboard/makeadmin`} element={<AdminRoute><Makeadmin /></AdminRoute>}/>
          <Route path={`/dashboard/manageallorders`} element={<AdminRoute><Manageallorders /></AdminRoute>}/>
       </Route>
       </Routes>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
