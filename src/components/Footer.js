import React from "react";

function Footer() {
  return (
    <div className="border-t flex items-center justify-between lg:p-12 py-6 px-4">
      <div>
        <h1 className="text-xl text-yellow-500">Shoppies</h1>
        <p>&copy; 2021 all rights reserved</p>
      </div>
      <div className="space-x-4 lg:text-2xl text-xl">
        <a href="https://github.com/Obizim" target="_blank" rel="noreferrer">
          <i className="fab fa-github" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
