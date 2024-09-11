import React from "react";

function GiftVoucher() {
  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <form className="space-y-4">
        <div>
          <label
            for="voucher"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            {" "}
            Do you have a voucher or gift card?{" "}
          </label>
          <input
            type="text"
            id="voucher"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-third-500 focus:ring-third-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-third-500 dark:focus:ring-third-500"
            placeholder=""
            required
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-lg bg-third-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-third-800 focus:outline-none focus:ring-4 focus:ring-third-300 dark:bg-third-600 dark:hover:bg-third-700 dark:focus:ring-third-800"
        >
          Apply Code
        </button>
      </form>
    </div>
  );
}

export default GiftVoucher;
