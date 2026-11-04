
interface LoginHeaderProps {
  title?: string;
  description?: string;
}

export default function LoginHeader({
  title = "Sign In",
  description = "Enter your email and password to sign in.",
}: LoginHeaderProps) {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-semibold text-gray-800 dark:text-white">
        {title}
      </h1>

      <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
