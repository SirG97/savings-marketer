import { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { startOfYear, endOfYear, format } from "date-fns";
import { getDashboardData } from "../../apis/Dashboard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import numeral from "numeral";
import AppLayout from "../../components/layout/AppLayout";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentDate = new Date();
  const startOfYearDate = format(startOfYear(currentDate), "yyyy-MM-dd");
  const endOfYearDate = format(endOfYear(currentDate), "yyyy-MM-dd");
  const selector = JSON.parse(useSelector((state) => state.auth.userInfo));
  const [value, setValue] = useState({
    startDate: null ?? startOfYearDate,
    endDate: null ?? endOfYearDate,
  });
  const [dashboardData, setDashboardData] = useState([]);

  const handleDashboardData = () => {
    getDashboardData(dispatch,  value, selector.id)
      .then((resp) => {
        if (resp?.data?.success) {
          setDashboardData(resp?.data?.data);
        } else {
          // toast.error("An error occurred. Try again!");
        }
      })
      .catch((error) => {
        // toast.error("An error occurred. Try again!");
      });
  };

  useEffect(() => {
    console.log(value);
    handleDashboardData();
  }, [value]);

  return (
    <AppLayout>
      <div>
        <div className="z-10 mx-1 flex filter">
          <div className="mb-2 w-64">
            <Datepicker
              showShortcuts={true}
              value={value}
              onChange={(newValue) => {
                const currentDate = new Date();
                // Get the start of the year
                const startOfYearDate = format(startOfYear(currentDate), "yyyy-MM-dd");
                // Get the end of the year
                const todaysDate = format(currentDate, "yyyy-MM-dd");
                if (newValue?.startDate !== null) {
                  newValue.startDate = format(
                    new Date(newValue.startDate),
                    "yyyy-MM-dd",
                  );
                  newValue.endDate = format(
                    new Date(newValue.endDate),
                    "yyyy-MM-dd",
                  );
                } else {
                  newValue.startDate = startOfYearDate;
                  newValue.endDate = todaysDate;
                }

                setValue(newValue);
              }}
            />
          </div>
        </div>

        <dl className="mx-auto grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          <div className="m-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 rounded-lg bg-white px-4 py-7 shadow sm:px-4 xl:px-5">
            <dt className="text-sm/6 font-medium text-gray-500">Customers</dt>
            <dd className="text-xs font-medium text-gray-700"></dd>
            <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">
              {dashboardData?.total_users ?? 0}
            </dd>
          </div>
          <div className="m-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 rounded-lg bg-white px-4 py-7 shadow sm:px-4 xl:px-5">
            <dt className="text-sm/6 font-medium text-gray-500">Balance</dt>
            <dd className="text-xs font-medium text-gray-700"></dd>
            <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">
              ₦{numeral(dashboardData?.balance).format("0,0.00") ?? 0.0}
            </dd>
          </div>
          <div className="m-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 rounded-lg bg-white px-4 py-7 shadow sm:px-4 xl:px-5">
            <dt className="text-sm/6 font-medium text-gray-500">
              Total Deposit
            </dt>
            <dd className="text-xs font-medium text-gray-700">
              {dashboardData?.transaction_summary?.deposit?.count ?? 0}
            </dd>
            <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">
              ₦
              {numeral(
                dashboardData?.transaction_summary?.deposit?.total_amount,
              ).format("0,0.00") ?? 0.0}
            </dd>
          </div>
          <div className="m-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 rounded-lg bg-white px-4 py-7 shadow sm:px-4 xl:px-5">
            <dt className="text-sm/6 font-medium text-gray-500">Withdrawals</dt>
            <dd className="text-xs font-medium text-gray-700">
              {dashboardData?.transaction_summary?.withdrawals?.count}
            </dd>
            <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">
              ₦
              {numeral(
                dashboardData?.transaction_summary?.withdrawals?.total_amount,
              ).format("0,0.00") ?? 0.0}
            </dd>
          </div>
        </dl>
      </div>
      <div>
        <dl className="mt-5 grid grid-cols-1 gap-0 sm:grid-cols-3">
          <div className="mx-1 overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Commissions
            </dt>
            <dd className="mt-1 text-3xl/10 font-medium tracking-tight text-gray-900">
              ₦
              {numeral(
                dashboardData?.transaction_summary?.commission?.total_amount,
              ).format("0,0.00") ?? 0.0}
            </dd>
          </div>
          <div className="mx-1 overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Transfers
            </dt>
            <dd className="mt-1 text-3xl/10 font-medium tracking-tight text-gray-900">
              ₦
              {numeral(
                dashboardData?.transaction_summary?.transfer?.total_amount,
              ).format("0,0.00") ?? 0.0}
            </dd>
          </div>
          <div className="mx-1 overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Expenses
            </dt>
            <dd className="mt-1 text-3xl/10 font-medium tracking-tight text-gray-900">
              ₦
              {numeral(
                dashboardData?.transaction_summary?.expenses?.total_amount,
              ).format("0,0.00") ?? 0.0}
            </dd>
          </div>
        </dl>
      </div>
    </AppLayout>
  );
}
