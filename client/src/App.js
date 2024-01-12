import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Policy from './Pages/Policy';
import Pagenotfound from './Pages/Pagenotfound';
import SignUp from './Pages/Auth/SignUp';
import Login from './Pages/Auth/Login';
import Dashboard from './Pages/user/Dashboard';
import PrivateRoute from './Components/Routes/Private';
import ForgotPasssword from './Pages/Auth/ForgotPassword';
import AdminRoute from './Components/Routes/AdminRoute';
import Admin from './Pages/AdminDashboard/Admin';
import CreateCategory from './Pages/AdminDashboard/CreateCategory';
import CreateProduct from './Pages/AdminDashboard/CreateProduct';
import Users from './Pages/AdminDashboard/Users';
import Profile from './Pages/user/Profile';
import Orders from './Pages/user/Orders';
import Products from './Pages/AdminDashboard/Products';
import UpdateProduct from './Pages/AdminDashboard/UpdateProduct';
import Search from './Pages/Search';
import ProductDetails from './Pages/ProductDetails';
import Categories from './Pages/Categories';
import CategoryProduct from './Pages/CategoryProduct';
import CartPage from './Pages/CartPage';
import AdminOrder from './Pages/AdminDashboard/AdminOrder';




function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element = {<Categories />} />
        <Route path='/cart' element = {<CartPage />} />
        <Route path='/category/:slug' element = {<CategoryProduct />} />
        <Route path='/product/:slug' element={<ProductDetails />} />
        <Route path='/search' element={<Search />} />
        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='user' element={<Dashboard />} />
          <Route path='user/profile' element = {<Profile />} / >
         <Route path='user/order' element = {<Orders />} / >
        </Route>
        <Route path='/dashboard' element = {<AdminRoute />}>
         <Route path='admin' element = {<Admin />} / >
         <Route path='admin/create-category' element = {<CreateCategory />} / >
         <Route path='admin/create-product' element = {<CreateProduct />} / >
         <Route path="admin/product/:slug" element={<UpdateProduct />} />
         <Route path='admin/products' element = {<Products />} / >
         <Route path='admin/users' element = {<Users />} / >
         <Route path='admin/orders' element = {<AdminOrder />} / >
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/forgot-password' element = {<ForgotPasssword />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Pagenotfound />} />

      </Routes>
    </>
  );
}

export default App;
