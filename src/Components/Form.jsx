import React, { useState } from "react";

const DynamicForm = ({ fields, onSubmit }) => {
    const initialState = fields.reduce((acc, field) => {
        acc[field.name] = field.type === "checkbox" ? false : "";
        return acc;
    }, {});
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e, field) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow space-y-6"
        >
            {fields.map((field) => (
                <div key={field.name} className="flex flex-col">
                    <label className="mb-2 font-medium text-gray-700">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    {field.type === "select" ? (
                        <select
                            name={field.name}
                            value={formData[field.name]}
                            onChange={(e) => handleChange(e, field)}
                            required={field.required}
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">Select...</option>
                            {field.options.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    ) : field.type === "textarea" ? (
                        <textarea
                            name={field.name}
                            value={formData[field.name]}
                            onChange={(e) => handleChange(e, field)}
                            required={field.required}
                            rows={field.rows || 3}
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    ) : field.type === "checkbox" ? (
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name={field.name}
                                checked={formData[field.name]}
                                onChange={(e) => handleChange(e, field)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-gray-700">{field.checkboxLabel}</span>
                        </div>
                    ) : (
                        <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={(e) => handleChange(e, field)}
                            required={field.required}
                            placeholder={field.placeholder}
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    )}
                </div>
            ))}
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold"
            >
                Submit
            </button>
        </form>
    );
};

export default DynamicForm;