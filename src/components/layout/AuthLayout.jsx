import { Toaster } from "sonner"
import logo from "../../assets/logos/profile.png"
export default function AuthLayout({ children, header }) {
  return (
    <>
      <Toaster richColors position="top-right" />

      <div className="flex min-h-screen bg-gray-500 flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            alt="Your Company"
            src={logo}
            className="mx-auto h-8"
          />
          <h2 className=" mt-2 text-center text-2xl font-bold tracking-tight text-gray-900">
            Marketer
          </h2>
          <h2 className="mt-2 text-center text-lg/9 font-bold tracking-tight text-gray-900">
            {header}
          </h2>
        </div>

       {children}
      </div>
    </>
  )
}

