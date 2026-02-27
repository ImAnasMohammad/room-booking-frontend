import React, { useState } from "react";

const DynamicTabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    if (!tabs || tabs.length === 0) {
        return <div className="text-center py-8 text-gray-500">No tabs available.</div>;
    }

    return (
        <div className="w-full  mx-auto">
            {/* Tab Headers */}
            <div className="flex border-b border-gray-200 bg-white rounded-t-lg overflow-x-auto">
                {tabs.map((tab, idx) => (
                    <button
                        key={tab.label}
                        className={`px-6 py-3 text-sm font-medium focus:outline-none transition
              ${activeTab === idx
                                ? "border-b-2 border-blue-500 text-blue-600 bg-blue-50"
                                : "text-gray-600 hover:text-blue-500 hover:bg-blue-50"}
            `}
                        onClick={() => setActiveTab(idx)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            {/* Tab Content */}
            <div className="bg-white rounded-b-lg shadow p-6 min-h-[120px]">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default DynamicTabs;