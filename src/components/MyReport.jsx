import { useState } from "react";

const LostFoundReport = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    subCategory: "",
    description: "",
    location: "",
    urgency: "low",
  });
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Complaint submitted!");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Report Lost Item</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Item Name */}
        <div>
          <label className="block text-gray-700 mb-1">Item Name</label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            placeholder="Enter item name"
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Category & Subcategory */}
        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="accessory">Accessory</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Subcategory</label>
            <select
              name="subCategory"
              value={formData.subCategory}
              onChange={handleChange}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select Subcategory</option>
              <option value="wallet">Wallet</option>
              <option value="phone">Phone</option>
              <option value="bag">Bag</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the item"
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={3}
            required
          ></textarea>
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 mb-1">Location</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select Location</option>
            <option value="library">Library</option>
            <option value="cafeteria">Cafeteria</option>
            <option value="classroom">Classroom</option>
          </select>
        </div>

        {/* Urgency */}
        <div>
          <label className="block text-gray-700 mb-2">Urgency</label>
          <div className="flex gap-4 items-center">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="urgency"
                value="low"
                checked={formData.urgency === "low"}
                onChange={handleChange}
              />
              <span className="text-green-600">Low</span>
            </label>

            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="urgency"
                value="medium"
                checked={formData.urgency === "medium"}
                onChange={handleChange}
              />
              <span className="text-yellow-600">Medium</span>
            </label>

            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="urgency"
                value="high"
                checked={formData.urgency === "high"}
                onChange={handleChange}
              />
              <span className="text-red-600">High</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default LostFoundReport;
