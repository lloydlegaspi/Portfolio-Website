import React from "react";
import Layout from "./layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-sm dark:text-gray-400 dark:border-light sm:text-base">
      <Layout className="py-4 flex items-center justify-center lg:py-3 lg:flex-col">
        <span className="text-gray-600 dark:text-gray-400">{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      </Layout>
    </footer>
  );
};

export default Footer;

