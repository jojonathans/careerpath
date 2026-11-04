
import LoginForm from "@/features/auth/components/LoginForm";
import LoginHeader from "@/features/auth/components/LoginHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | CareerPath",
  description: "Sign in to your CareerPath account.",
};

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">

      <div className="mb-8">
        <LoginHeader
          title="Welcome Back!"
          description="Enter your credentials to access your CareerPath account."
        />
      </div>

      <LoginForm />

      <p className="mt-8 text-center text-xs text-gray-400">
        © 2026 CareerPath. All rights reserved.
      </p>

    </div>
  );
}
