import React from 'react'
// import Table from '../Components/Table';
import DynamicTable from '../Components/Table';
import DynamicTabs from '../Components/Tabs';
import DynamicForm from '../Components/Form';
import CreateRoomButton from '../Components/Button';

        import {Trash2} from "lucide-react";

import { Plus, Edit } from "lucide-react";
import DynamicButton from '../Components/Button';

const AdminDashboard = () => {
    const sampleData = [
        { Name: "Alice", Age: 25, Country: "USA" },
        { Name: "Bob", Age: 30, Country: "Canada" },
        { Name: "Charlie", Age: 28, Country: "UK" },
    ];

    const formFields = [
        { name: "name", label: "Name", type: "text", required: true, placeholder: "Enter your name" },
        { name: "email", label: "Email", type: "email", required: true, placeholder: "Enter your email" },
        { name: "age", label: "Age", type: "number", required: false, placeholder: "Enter your age" },
        { name: "bio", label: "Bio", type: "textarea", required: false, rows: 4, placeholder: "Tell us about yourself" },
        {
            name: "role", label: "Role", type: "select", required: true, options: [
                { value: "user", label: "User" },
                { value: "admin", label: "Admin" },
            ]
        },
        { name: "subscribe", label: "Subscribe", type: "checkbox", checkboxLabel: "Subscribe to newsletter" },
    ];

    const handleFormSubmit = (data) => {
        alert(JSON.stringify(data, null, 2));
    };

    const tabData = [
        { label: "Profile", content: <DynamicTable data={sampleData} actions={rowActions} /> },
        { label: "Settings", content: <DynamicForm fields={formFields} onSubmit={handleFormSubmit} /> },
        { label: "Activity", content: <div>Activity log content goes here.</div> },
    ];



    return <>
        <DynamicButton
            label="Create Room"
            Icon={Plus}
            onClick={() => alert("Room created!")}
        />

        <DynamicTabs tabs={tabData} />
    </>
}

// Optional actions (e.g., Edit/Delete)
const rowActions = (row) => (
    <>
        <DynamicButton
            label="Edit Room"
            Icon={Edit}
            onClick={() => alert("Room created!")}
            color="secondary"
        />

        <DynamicButton
            label="Delete"
            Icon={Trash2}
            color="danger" // Add support for "danger" color in DynamicButton
            onClick={() => alert("Deleted!")}
            className="mt-2"
        />
    </>
);

export default AdminDashboard