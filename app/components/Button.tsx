"use client";

import React, { useState } from "react";
import AnswerCard from "./AnswerCard";

export default function Button() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => (
            setShow((prevState) => !prevState)
          )}
        className="btn btn-primary btn-lg mt-8">
        Reveal
      </button>
      {show && <h2 className="text-2xl mt-8"><AnswerCard /></h2>}
    </div>
  );
}
