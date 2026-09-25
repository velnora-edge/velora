
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  Check,
} from "lucide-react";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
const handleSubmit = (e) => {
  e.preventDefault();

  if (!name.trim() || !email.trim() || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (!agree) {
    alert("Please agree to the Terms & Conditions.");
    return;
  }

  // Save User
  const user = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password: password,
  };

  localStorage.setItem(
    "veloraUser",
    JSON.stringify(user)
  );

  // Save Profile
  localStorage.setItem(
    "veloraProfile",
    JSON.stringify({
      name: user.name,
      email: user.email,
      phone: "",
      address: "",
      city: "",
    })
  );

  alert("Account created successfully!");
  navigate("/login");
};
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF7F2] px-4 py-8 sm:px-6">

      <div className="flex w-full max-w-[1050px] flex-col overflow-hidden rounded-[28px] bg-white shadow-2xl md:min-h-[620px] md:flex-row">

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

          <div className="relative z-10 flex min-h-[620px] flex-col items-center justify-between p-10">

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
                Join Velora
              </p>

              <h2
                className="mt-5 text-4xl leading-tight text-white"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Make It
                <br />
                <span className="text-[#D9A86C]">
                  Yours.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-white/60">
                Create your Velora account and discover fashion,
                accessories and timeless pieces curated for modern living.
              </p>

            </div>

            <p className="text-xs text-white/40">
              Curated for modern living
            </p>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-1 flex-col justify-between bg-white">

          <div className="px-7 py-9 sm:px-12 sm:py-10 lg:px-16">

            {/* HEADER */}
            <div className="mb-5 flex flex-col items-center">

              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-gradient-to-br from-[#D9A86C] to-[#B4527A] text-white shadow-lg">
                <UserRound
                  size={36}
                  strokeWidth={1.7}
                />
              </div>

              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B4527A]">
                Create Account
              </p>

              <h1
                className="mt-1 text-3xl font-medium text-[#2A1226]"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Register
              </h1>

            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >

              {/* NAME */}
              <div className="flex items-center gap-3 border-b border-gray-300 pb-3 transition duration-300 focus-within:border-[#B4527A]">

                <UserRound
                  size={19}
                  className="shrink-0 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />

              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3 border-b border-gray-300 pb-3 transition duration-300 focus-within:border-[#B4527A]">

                <Mail
                  size={19}
                  className="shrink-0 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />

              </div>

              {/* PASSWORD */}
              <div className="flex items-center gap-3 border-b border-gray-300 pb-3 transition duration-300 focus-within:border-[#B4527A]">

                <LockKeyhole
                  size={19}
                  className="shrink-0 text-gray-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="text-gray-400 transition hover:text-[#B4527A]"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

              {/* CONFIRM PASSWORD */}
              <div className="flex items-center gap-3 border-b border-gray-300 pb-3 transition duration-300 focus-within:border-[#B4527A]">

                <LockKeyhole
                  size={19}
                  className="shrink-0 text-gray-400"
                />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  required
                  className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="text-gray-400 transition hover:text-[#B4527A]"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

              {/* TERMS */}
              <label className="flex cursor-pointer items-start gap-3 pt-1">

                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition ${
                    agree
                      ? "border-[#B4527A] bg-[#B4527A] text-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {agree && <Check size={13} />}
                </span>

                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) =>
                    setAgree(e.target.checked)
                  }
                  className="hidden"
                />

                <span className="text-xs leading-5 text-gray-500">
                  I agree to the{" "}
                  <span className="font-semibold text-[#B4527A]">
                    Terms & Conditions
                  </span>{" "}
                  and Privacy Policy.
                </span>

              </label>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#2A1226] py-3.5 text-xs font-bold tracking-[0.12em] text-white shadow-md transition duration-300 hover:bg-[#B4527A] hover:shadow-lg"
              >
                CREATE ACCOUNT
              </button>

            </form>

          </div>

          {/* BOTTOM */}
          <div className="border-t border-gray-100 px-7 py-5 sm:px-12 lg:px-16">

            <p className="text-center text-xs text-gray-400">

              Already have an account?

              <Link
                to="/login"
                className="ml-1 font-semibold text-[#B4527A] transition hover:text-[#2A1226]"
              >
                Login
              </Link>

            </p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;
