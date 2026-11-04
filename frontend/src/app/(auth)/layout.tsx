
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="flex min-h-screen flex-col lg:flex-row">

        {/* Left Side */}
        <div className="flex w-full flex-1 flex-col justify-center p-6 sm:p-10 lg:w-1/2">
          {children}
        </div>

        {/* Right Side */}
        <div className="relative hidden min-h-screen w-full items-center justify-center overflow-hidden bg-blue-950 lg:flex lg:w-1/2">

          {/* Decorative Background */}
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full border border-blue-800 opacity-40" />
          <div className="absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full border border-blue-800 opacity-40" />

          <div className="relative z-10 max-w-md px-8 text-center">
            <div className="mb-8 text-5xl font-bold tracking-tight text-white">
              CareerPath<span className="text-blue-400">.</span>
            </div>

            <h2 className="text-3xl font-semibold leading-tight text-white">
              Build Your Career.
              <br />
              Shape Your Future.
            </h2>

            <p className="mt-5 text-sm leading-7 text-blue-200">
              Discover career opportunities, identify your skill gaps,
              and develop the skills you need to achieve your
              professional goals.
            </p>

            <div className="mt-12 flex justify-center gap-2">
              <div className="h-1.5 w-8 rounded-full bg-blue-400" />
              <div className="h-1.5 w-2 rounded-full bg-blue-700" />
              <div className="h-1.5 w-2 rounded-full bg-blue-700" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
