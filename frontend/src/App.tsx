import { LayoutDashboard, Users, Receipt, Settings } from 'lucide-react';

function App() {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col gap-6">
        <div className="text-2xl font-bold text-indigo-600">SubscriptIQ</div>
        <nav className="flex flex-col gap-2">
          <a href="#" className="flex items-center gap-3 p-3 bg-indigo-50 text-indigo-700 rounded-lg font-medium">
            <LayoutDashboard size={20} /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors">
            <Users size={20} /> Subscribers
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors">
            <Receipt size={20} /> Invoices
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors mt-auto">
            <Settings size={20} /> Settings
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Revenue Overview</h1>
          <p className="text-gray-500">Welcome back! Here is what's happening today.</p>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="text-sm font-medium text-gray-500 mb-1">Monthly Recurring Revenue</div>
            <div className="text-3xl font-bold">$12,450</div>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="text-sm font-medium text-gray-500 mb-1">Active Subscriptions</div>
            <div className="text-3xl font-bold">842</div>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="text-sm font-medium text-gray-500 mb-1">Churn Rate</div>
            <div className="text-3xl font-bold">2.4%</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App