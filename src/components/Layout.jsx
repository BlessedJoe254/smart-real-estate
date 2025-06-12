import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex bg-gray-800 text-white min-h-screen">
      <Sidebar />
      <main className="ml-64 p-6 flex-1 bg-gray-900">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
