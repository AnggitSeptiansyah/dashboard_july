import { CreditCard, DollarSign, Package, TrendingUp, Users } from "lucide-react"

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="title">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="card">
          <div className="card-header">
            <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
              <Package size={26} />
            </div>
            <p className="card-title">
              Total Product
            </p>
          </div>
          <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">25,154</p>
            <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 p-1 font-medium text-blue-500 dark:text-blue-600 dark:border-blue-600">
              <TrendingUp size={18} />
              25%
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
              <Package size={26} />
            </div>
            <p className="card-title">
              Total Paid Order
            </p>
          </div>
          <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">23,000</p>
            <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 p-1 font-medium text-blue-500 dark:text-blue-600 dark:border-blue-600">
              <DollarSign size={18} />
              12%
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
              <Users size={26} />
            </div>
            <p className="card-title">
              Total Customer
            </p>
          </div>
          <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">6,000</p>
            <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 p-1 font-medium text-blue-500 dark:text-blue-600 dark:border-blue-600">
              <TrendingUp size={18} />
              19%
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
              <CreditCard size={26} />
            </div>
            <p className="card-title">
              Sales
            </p>
          </div>
          <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">12,340</p>
            <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 p-1 font-medium text-blue-500 dark:text-blue-600 dark:border-blue-600">
              <TrendingUp size={18} />
              23%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
