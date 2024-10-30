// EngagementList.jsx

import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';
import EngagementForm from './EngagementForm';
import BudgetTrackingForm from './BudgetTrackingForm';
import AccountingImputationForm from './AccountingImputationForm';
import EngagementDetails from './EngagementDetails';

const EngagementList = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [activeTab, setActiveTab] = useState('description');

    const handleAddClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="p-6">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4 lg:mb-0 lg:mr-6">
                    FICHE D’ENGAGEMENT ET DE LIQUIDATION DES DEPENSES
                </h2>

                <div className="flex items-center space-x-4">
                    <div className="bg-white border border-gray-300 rounded-lg flex items-center space-x-4 p-2 shadow-sm">
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="border border-gray-300 rounded-lg text-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            placeholder="Date de début"
                        />
                        <span>-</span>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="border border-gray-300 rounded-lg text-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            placeholder="Date de fin"
                        />
                    </div>

                    <button
                        onClick={handleAddClick}
                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center shadow-md"
                    >
                        <span className="mr-2">Ajouter</span>
                        <FaPlus />
                    </button>
                </div>
            </div>

            {showDetails ? (
                <EngagementDetails 
                    activeTab={activeTab} 
                    onTabChange={handleTabChange} 
                    onClose={() => setShowDetails(false)} 
                />
            ) : (
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr>
                            <th className="py-3 px-4 bg-gray-100 text-left font-medium text-gray-600 border border-gray-300">Projet</th>
                            <th className="py-3 px-4 bg-gray-100 text-left font-medium text-gray-600 border border-gray-300">Service demandeur</th>
                            <th className="py-3 px-4 bg-gray-100 text-left font-medium text-gray-600 border border-gray-300">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border border-gray-300">SWEDD</td>
                            <td className="py-3 px-4 border border-gray-300">Logistique</td>
                            <td className="py-3 px-4 border border-gray-300 flex space-x-4">
                                <button onClick={() => setShowDetails(true)} className="text-gray-600 hover:text-black focus:outline-none">
                                    <FaEye />
                                </button>
                                <button onClick={() => setShowForm(true)} className="text-gray-600 hover:text-black focus:outline-none">
                                    <FaEdit />
                                </button>
                                <button className="text-red-600 hover:text-red-800 focus:outline-none">
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}

            {showForm && activeTab === 'description' && <EngagementForm onClose={handleCloseForm} />}
            {showForm && activeTab === 'suivie' && <BudgetTrackingForm onClose={handleCloseForm} />}
            {showForm && activeTab === 'imputation' && <AccountingImputationForm onClose={handleCloseForm} />}
        </div>
    );
};

export default EngagementList;
