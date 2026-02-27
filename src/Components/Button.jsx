import React from "react";

// Pass the icon component as a prop, e.g., { Plus, Trash2 } from "lucide-react"
const DynamicButton = ({
    label = "Button",
    Icon,
    onClick,
    color = "primary", // "primary", "secondary", or "danger"
    className = "",
    ...props
}) => {
    // Tailwind color classes
    const colorClasses =
        color === "primary"
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : color === "secondary"
                ? "bg-gray-200 hover:bg-gray-300 text-gray-800"
                : color === "danger"
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "";

    return (
        <div className="flex justify-end mb-4">
            <button
                onClick={onClick}
                className={`flex items-center gap-2 font-semibold px-6 py-2 rounded shadow transition ${colorClasses} ${className}`}
                {...props}
            >
                {Icon && <Icon size={20} />}
                {label}
            </button>
        </div>
    );
};

export default DynamicButton;