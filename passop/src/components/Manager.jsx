import { useState } from "react";

const Manager = () => {
  const [form, setForm] = useState({ site: "", name: "", password: "" });

  const savePassword = () => {};

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div>
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-500"> &lt;</span>

          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own Password Manager
        </p>
      </div>

      {/* -----------------------INPUT--------------------------------- */}

      <div className=" mx-auto bg-slate-800 w-1/2">
        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input
            name="site"
            onChange={handleChange}
            value={form.site}
            type="text"
            className="rounded-full border border-green-500 w-full p-4 py-1"
            placeholder="Enter Website URL"
          />
          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <input
              name="name"
              onChange={handleChange}
              value={form.name}
              type="text"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              placeholder="Enter Username"
            />
            <input
              name="password"
              onChange={handleChange}
              value={form.password}
              type="password"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              placeholder="Enter Password"
            />
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full
                px-8 py-2 w-fit border border-green-900"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Manager;
