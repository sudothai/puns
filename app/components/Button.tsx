"use client";

import React, { useState } from "react";

export default function Button() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => (
            setShow((prevState) => !prevState)
          )}
        className="btn btn-neutral mt-5">
        Reveal
      </button>
      {show && <h2 className="mt-5">Grains...</h2>}
    </div>
  );
}
