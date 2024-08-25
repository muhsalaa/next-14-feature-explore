import React from "react";

export default function Login() {
  return (
    <div>
      Login
      <br />
      folder with parentheses not included in route segment (route_groups)
      <div className="pt-4">
        <label>
          Username:
          <input className="block border bg-black" type="text" />
        </label>
        <br />
        <label>
          Password:
          <input className="block border bg-black" type="password" />
        </label>
        <br />
        <button className="bg-blue-300 p-2" type="submit">
          Login
        </button>
      </div>
    </div>
  );
}
