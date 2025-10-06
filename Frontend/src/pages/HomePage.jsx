import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RatelimitedUI.jsx";

function HomePage() {
  const [isRateLimited, setIsRateLimited] = useState(true);

  return (
    <div className="min-h-screen place-items-center">
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
    </div>
  );
}

export default HomePage;
