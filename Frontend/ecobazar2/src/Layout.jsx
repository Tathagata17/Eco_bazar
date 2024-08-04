import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
//import Shop from './components/Shop'
import AdminHeader from './components/Adminhandler/AdminHeader'
import AdminFooter from './components/Adminhandler/AdminFooter'
import AdminHome from './components/Adminhandler/AdminHome'


function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

function ShopLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
function AdminLayout() {
  return (
    <>
    <AdminHeader/>
      <Outlet />
      <AdminFooter/>
    </>
  );
}
function AdminHomeLayout() {
  return (
    <>    
    <div className="mt-32 flex m-4 gap-4">
    <AdminHome/>
    <section className='bg-gray-200 w-full mb-1'>
    <Outlet/>
    </section>
    </div>
    </>
  );
}




export {Layout,ShopLayout,AdminLayout,AdminHomeLayout}