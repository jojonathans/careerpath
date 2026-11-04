
export default function AppHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      <div>
        <h2 className="text-sm font-medium text-gray-500">
          Career Management Platform
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-gray-500 hover:text-gray-900">
          🔔
        </button>

        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
            U
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-800">
              User
            </p>
            <p className="text-xs text-gray-500">
              Career Explorer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
