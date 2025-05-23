import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-black text-white text-center py-6">
      <p>&copy; {new Date().getFullYear()} We Teach Remotely. All rights reserved.</p>
    </footer>
  );
}
