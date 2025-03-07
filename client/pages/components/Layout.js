import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-white w-64 px-4 py-8 border-r">
        <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
        <nav>
          <Link href="/dashboard">
            <a className="block py-2.5 px-4 rounded hover:bg-blue-50">Dashboard</a>
          </Link>
          <Link href="/products">
            <a className="block py-2.5 px-4 rounded hover:bg-blue-50">Products</a>
          </Link>
          <Link href="/orders">
            <a className="block py-2.5 px-4 rounded hover:bg-blue-50">Orders</a>
          </Link>
          <Link href="/customers">
            <a className="block py-2.5 px-4 rounded hover:bg-blue-50">Customers</a>
          </Link>
          <Link href="/settings">
            <a className="block py-2.5 px-4 rounded hover:bg-blue-50">Settings</a>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
}