
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserRound,
  LockKeyhole,
  Eye,
  EyeOff,
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();

  setError("");

  const savedUser = JSON.parse(
    localStorage.getItem("veloraUser") || "null"
  );

  if (!savedUser) {
    setError(
      "No account found. Please create an account first."
    );
    return;
  }

  if (
    email.trim().toLowerCase() !==
      savedUser.email.trim().toLowerCase() ||
    password !== savedUser.password
  ) {
    setError("Invalid email or password.");
    return;
  }

  localStorage.setItem(
    "veloraLoggedIn",
    "true"
  );

  window.dispatchEvent(
    new Event("veloraAuthUpdated")
  );

  navigate("/profile");
};
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF7F2] px-4 py-8 sm:px-6">
      <div className="flex w-full max-w-[1050px] flex-col overflow-hidden rounded-[28px] bg-white shadow-2xl md:min-h-[600px] md:flex-row">

        {/* LEFT SIDE */}
        <div className="relative hidden overflow-hidden bg-[#2A1226] md:block md:w-[40%]">
          <div className="absolute inset-0 bg-[#2A1226]" />

          <div className="absolute -left-20 -top-24 h-[250px] w-[430px] rotate-[-45deg] bg-[#B4527A]" />

          <div className="absolute -left-32 top-[40px] h-[100px] w-[500px] rotate-[-45deg] bg-[#D9A86C]/60" />

          <div className="absolute -left-20 top-[155px] h-[80px] w-[480px] rotate-[-45deg] bg-[#B4527A]/70" />

          <div className="absolute -left-32 top-[245px] h-[90px] w-[500px] rotate-[-45deg] bg-[#D9A86C]/35" />

          <div className="absolute -bottom-40 -left-20 h-[350px] w-[520px] rotate-[-45deg] bg-[#B4527A]/50" />

          <div className="absolute -bottom-20 -left-10 h-[100px] w-[500px] rotate-[-45deg] bg-[#D9A86C]/20" />

          <div className="absolute right-10 top-10 h-20 w-20 rounded-full border border-[#D9A86C]/40" />

          <div className="absolute right-16 top-16 h-8 w-8 rounded-full bg-[#D9A86C]/30" />

          <div className="relative z-10 flex min-h-[600px] flex-col items-center justify-between p-10">

            <div className="text-center">
              <h2
                className="text-4xl text-white"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Velora
              </h2>

              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/50">
                Timelessly Yours
              </p>
            </div>

            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9A86C]">
                Welcome Back
              </p>

              <h2
                className="mt-5 text-4xl leading-tight text-white"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Discover Your
                <br />
                <span className="text-[#D9A86C]">
                  Signature Style.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-white/60">
                Sign in and continue exploring fashion,
                accessories and timeless pieces curated by Velora.
              </p>
            </div>

            <p className="text-xs text-white/40">
              Curated for modern living
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-1 flex-col justify-between bg-white">

          <div className="px-7 py-10 sm:px-12 sm:py-12 lg:px-16">

            <div className="mb-5 flex flex-col items-center">

              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gradient-to-br from-[#D9A86C] to-[#B4527A] text-white shadow-lg">
                <UserRound size={40} strokeWidth={1.7} />
              </div>

              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B4527A]">
                Account Access
              </p>

              <h1
                className="mt-2 text-3xl font-medium text-[#2A1226]"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Login
              </h1>
            </div>

            {error && (
              <div className="mb-5 rounded-xl bg-red-50 px-4 py-3 text-center text-xs font-medium text-red-600">
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >

              {/* EMAIL */}
              <div className="flex items-center gap-3 border-b border-gray-300 pb-3 transition duration-300 focus-within:border-[#B4527A]">

                <UserRound
                  size={20}
                  className="shrink-0 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>

              {/* PASSWORD */}
              <div className="flex items-center gap-3 border-b border-gray-300 pb-3 transition duration-300 focus-within:border-[#B4527A]">

                <LockKeyhole
                  size={20}
                  className="shrink-0 text-gray-400"
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                  className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="text-gray-400 transition hover:text-[#B4527A]"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>

              {/* ACTIONS */}
              <div className="flex items-center justify-between gap-3 pt-1">

                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "Please contact Velora support to reset your password."
                    )
                  }
                  className="text-xs font-medium text-[#B4527A] transition hover:text-[#2A1226]"
                >
                  Forgot Password?
                </button>

                <button
                  type="submit"
                  className="rounded-full bg-[#2A1226] px-8 py-3 text-xs font-bold tracking-wide text-white shadow-md transition duration-300 hover:bg-[#B4527A] hover:shadow-lg"
                >
                  LOGIN
                </button>

              </div>
            </form>
          </div>

          {/* BOTTOM */}
          <div className="border-t border-gray-100 px-7 py-6 sm:px-12 lg:px-16">

            <p className="mb-4 text-center text-xs font-semibold text-gray-500">
              Or Login With
            </p>

            <div className="flex items-center justify-center gap-4">

              <button
                type="button"
                onClick={() => alert("Google Login")}
                className="flex items-center gap-2 rounded-full border border-gray-200 px-6 py-2.5 text-xs font-semibold text-gray-600 transition duration-300 hover:-translate-y-0.5 hover:border-[#B4527A] hover:text-[#B4527A]"
              >
                <span className="font-bold text-[#4285F4]">
                  G
                </span>
                Google
              </button>

              <button
                type="button"
                onClick={() => alert("Facebook Login")}
                className="flex items-center gap-2 rounded-full border border-gray-200 px-6 py-2.5 text-xs font-semibold text-gray-600 transition duration-300 hover:-translate-y-0.5 hover:border-[#B4527A] hover:text-[#B4527A]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4267B2] text-xs font-bold text-white">
                  f
                </span>
                Facebook
              </button>

            </div>

            <p className="mt-5 text-center text-xs text-gray-400">
              Don't have an account?

              <Link
                to="/register"
                className="ml-1 font-semibold text-[#B4527A] transition hover:text-[#2A1226]"
              >
                Create Account
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
