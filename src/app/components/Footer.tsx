import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=300&fit=crop"
            alt="JCI Logo"
            className="h-10 w-auto"
          />
          <span className="ml-2 text-xl font-bold">松原青年会議所</span>
        </div>
        <p className="text-center text-gray-400">
          &copy; 2025 一般社団法人 松原青年会議所. すべての権利を保有。
        </p>
      </div>
    </footer>
  );
};

export default Footer;
