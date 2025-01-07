export default function StatusWithDot({ status, text }) {
  return (
    <>
      {status === "success" && (
        <span className="inline-flex items-center gap-x-1.5 rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
          <svg
            viewBox="0 0 6 6"
            aria-hidden="true"
            className="size-1.5 fill-green-500"
          >
            <circle r={3} cx={3} cy={3} />
          </svg>
          {text}
        </span>
      )}

      {status === "danger" && (
        <span className="inline-flex items-center gap-x-1.5 rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
          <svg
            viewBox="0 0 6 6"
            aria-hidden="true"
            className="size-1.5 fill-red-500"
          >
            <circle r={3} cx={3} cy={3} />
          </svg>
          {text}
        </span>
      )}

      {status === "warning" && (
        <span className="inline-flex items-center gap-x-1.5 rounded-md bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
          <svg
            viewBox="0 0 6 6"
            aria-hidden="true"
            className="size-1.5 fill-yellow-500"
          >
            <circle r={3} cx={3} cy={3} />
          </svg>
          {text}
        </span>
      )}

{status === "primary" && (
        <span className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
          <svg
            viewBox="0 0 6 6"
            aria-hidden="true"
            className="size-1.5 fill-blue-500"
          >
            <circle r={3} cx={3} cy={3} />
          </svg>
          {text}
        </span>
      )}


{status === "secondary" && (
        <span className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">
          <svg
            viewBox="0 0 6 6"
            aria-hidden="true"
            className="size-1.5 fill-indigo-500"
          >
            <circle r={3} cx={3} cy={3} />
          </svg>
          {text}
        </span>
      )}

      {status === "unknown" && (
        <span className="inline-flex items-center gap-x-1.5 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
          <svg
            viewBox="0 0 6 6"
            aria-hidden="true"
            className="size-1.5 fill-gray-400"
          >
            <circle r={3} cx={3} cy={3} />
          </svg>
          {text}
        </span>
      )}




      {status === "purple" && (
        <span className="inline-flex items-center gap-x-1.5 rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
          <svg
            viewBox="0 0 6 6"
            aria-hidden="true"
            className="size-1.5 fill-purple-500"
          >
            <circle r={3} cx={3} cy={3} />
          </svg>
          {text}
        </span>
      )}

      {status === "error" && (
        <span className="inline-flex items-center gap-x-1.5 rounded-md bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700">
          <svg
            viewBox="0 0 6 6"
            aria-hidden="true"
            className="size-1.5 fill-pink-500"
          >
            <circle r={3} cx={3} cy={3} />
          </svg>
          {text}
        </span>
      )}
    </>
  );
}