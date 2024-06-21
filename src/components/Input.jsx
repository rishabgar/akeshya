import React from "react";

function Input({ type, placeholder, OnChange, Value }) {
  return (
    <>
      {type !== "textarea" && type !== "select" ? (
        <input
          type={type}
          placeholder={placeholder}
          value={Value}
          required
          className="w-full h-full outline-none py-3 px-4"
          onChange={OnChange}
        />
      ) : type !== "select" ? (
        <textarea
          className="w-full h-full resize-y outline-none py-3 px-4"
          onChange={OnChange}
          placeholder={placeholder}
          required
          value={Value}
          rows={10}
        ></textarea>
      ) : (
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      )}
    </>
  );
}

export default Input;
