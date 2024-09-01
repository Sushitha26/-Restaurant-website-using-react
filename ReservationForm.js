import React, { useState } from "react";
import Box from "@mui/material/Box";
import { TextField, MenuItem } from "@mui/material";

const ReservationForm = () => {
  "";
  const [dinning, setDinning] = useState("");
  const Handler = (e) => {
    setDinning(e.target.value);
  };
  return (
    <div className="bg-white my-10 p-6 border-4 border-black rounded-lg shadow-lg max-w-lg mx-auto">
      <form>
        <div className="mb-4">
          <label className="block text-xl font-bold text-gray-700 mb-10">
            SELECT YOUR ENCHANCED DINING SPACE:
          </label>
          <Box width="250px">
            <TextField
              label="Select The Dinning"
              select
              value={dinning}
              onChange={Handler}
              fullWidth
            >
              <MenuItem value="partyEnclave">Party Enclave</MenuItem>
              <MenuItem value="CozyNook">Cozy Nook</MenuItem>
              <MenuItem value="enchantedTerrace">Enchanted Terrace</MenuItem>
              <MenuItem value="classicheaven">Classic Heaven</MenuItem>
            </TextField>
          </Box>
          {/* <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="partyEnclave">Party Enclave</option>
            <option value="cozyNook">Cozy Nook</option>
            <option value="enchantedTerrace">Enchanted Terrace</option>
            <option value="classicHaven">Classic Haven</option>
          </select> */}
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Date & Time:
          </label>
          <input
            type="datetime-local"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Number of Guests:
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Special Requests:
          </label>
          <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white font-semibold rounded-md shadow-md hover:bg-white hover:text-black border-black border-2"
            onClick={() => {
              alert("Submitted");
            }}
          >
            Submit Reservation
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
