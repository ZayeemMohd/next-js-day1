"use client";
import { useEffect, useState } from "react";

export default function Signin() {
  let [currentTime, setCurrentTime] = useState(null);
  useEffect(() => {
    setCurrentTime(Date.now());
  }, []);

  const handleSignin = () => {
    console.log("signin clicked");
  };

  return (
    <div>
      <h1 className="bg-amber-500">SignIn Page</h1>
      <button
        onClick={() => {
          handleSignin();
        }}
      >
        Sign in: {currentTime}
      </button>
    </div>
  );
}
