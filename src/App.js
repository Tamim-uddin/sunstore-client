import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider";
import Addproducts from "./Pages/Dashboard/Addproducts/Addproducts";
import Addreviews from "./Pages/Dashboard/Addreviews/Addreviews";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Makeadmin from "./Pages/Dashboard/Makeadmin/Makeadmin";
import Manageallorders from "./Pages/Dashboard/Manageallorders/Manageallorders";
import Myorders from "./Pages/Dashboard/MyOrders/Myorders";
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
          <Route exact path="/dashboard" element={<Myorders />} />
          <Route path={`/dashboard/addproduct`} element={<Addproducts />} />
          <Route path={`/dashboard/addreview`} element={<Addreviews />}/>
          <Route path={`/dashboard/makeadmin`} element={<Makeadmin />}/>
          <Route path={`/dashboard/manageallorders`} element={<Manageallorders />}/>
       </Route>
       </Routes>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
