"use client";

import { useState } from "react";
import { customerSchema } from "./schema";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    country: "",
    city: "",
    pincode: "",
    pan_number: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    const { name, value } = e.target;

    const updated = { ...form, [name]: value };
    setForm(updated);

    try {
      await customerSchema.validateAt(name, updated);
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        [name]: err.message,
      }));
    }
  };

  const validateAll = async () => {
    try {
      await customerSchema.validate(form, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const formatted = {};
      err.inner.forEach((e) => {
        formatted[e.path] = e.message;
      });
      setErrors(formatted);
      return false;
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const isValid = await validateAll();
  if (!isValid) return;
  if(isValid)return toast.success( "User created successfully 🎉");


  setLoading(true);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/adduser`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          role: "user",
          status: "pending",
        }),
      }
    );

    let data;
    try {
      data = await res.json();
    } catch {
      throw new Error("Invalid server response");
    }

    if (!res.ok) {
      throw new Error(data?.message || "Request failed");
    }

    toast.success(data.message || "User created successfully 🎉");

    setForm({
      name: "",
      phone: "",
      email: "",
      address: "",
      country: "",
      city: "",
      pincode: "",
      pan_number: "",
      amount: "",
    });

  } catch (err) {
    toast.error(err.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};

  const fields = [
    "name",
    "phone",
    "email",
    "address",
    "country",
    "city",
    "pincode",
    "pan_number",
    "amount",
  ];

  return (
    <> 
    <Loader loading={loading}/>
    <section className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Make a Difference Today
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Your small contribution can create a big impact.
          </p>
        </div>

        {/* LEFT + RIGHT ROW */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className=" p-8 ">
            <h2 className="text-2xl font-semibold text-gray-800">
              About Sangcha Ajin Foundation
            </h2>

            <p className="mt-4 text-gray-600">
              Established in Arunachal Pradesh, we support education, healthcare and development.
            </p>

            <h3 className="mt-6 font-semibold text-gray-800">Our Mission</h3>

            <ul className="mt-3 space-y-2 text-gray-600">
              <li>✔ Education support</li>
              <li>✔ Healthcare help</li>
              <li>✔ Skill development</li>
              <li>✔ Social empowerment</li>
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="p-8 text-black bg-white rounded-2xl shadow-md">

            <h2 className="text-2xl font-semibold mb-6">Donate Now</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {fields.map((field) => (
                <div key={field} className={field === "address" ? "md:col-span-2" : ""}>
                  <input
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={field}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />

                  {errors[field] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[field]}
                    </p>
                  )}
                </div>
              ))}

              {/* BUTTON FULL WIDTH */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#28ef43] text-black py-3 rounded-lg font-medium hover:scale-105 transition"
                >
                  {loading ? "Processing..." : "Proceed to Donate →"}
                </button>

                <p className="text-xs text-gray-500 mt-3 text-center">
                  100% secure payments. Your data is safe with us.
                </p>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}