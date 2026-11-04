
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, type LoginFormData } from "../schema";

export default function LoginForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      keepLoggedIn: false,
    },
    mode: "onTouched",
  });

  const handleLogin = (data: LoginFormData) => {
    setMessage("");

    const validEmail = "admin@careerpath.com";
    const validPassword = "123456";

    if (
      data.email === validEmail &&
      data.password === validPassword
    ) {
      router.push("/dashboard");
    } else {
      setMessage("Email atau password salah!");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Email Address
        </label>

        <input
          {...register("email")}
          type="email"
          placeholder="name@example.com"
          className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-800 outline-none focus:border-blue-500"
        />

        {errors.email && (
          <p className="mt-1 text-xs text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Password
        </label>

        <div className="relative">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 pr-20 text-sm text-gray-800 outline-none focus:border-blue-500"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {errors.password && (
          <p className="mt-1 text-xs text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      <label className="flex items-center gap-2 text-sm text-gray-600">
        <input
          {...register("keepLoggedIn")}
          type="checkbox"
          className="h-4 w-4 accent-blue-600"
        />
        Keep me logged in
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex h-12 w-full items-center justify-center rounded-lg bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
      >
        Sign In
      </button>

      {message && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
          {message}
        </div>
      )}
    </form>
  );
}
