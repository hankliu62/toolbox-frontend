import classNames from "classnames";
import React from "react";

/**
 * 网页底部
 */
export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={classNames("h-[62px]", { [className]: className })}>
      <div className="px-3 sm:px-5">
        <div className="border-t border-gray-200 py-5 text-left text-sm text-gray-500 sm:text-center">
          <span className="block sm:inline">
            &copy; {new Date().getFullYear()} 卡鲁秋, Inc.
          </span>{" "}
          <span className="block sm:inline">All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
