// EngagementDetails.jsx
import React from 'react';
import BudgetTrackingDetails from './BudgetTrackingDetails';
import AccountingImputationDetails from './AccountingImputationDetails';

const EngagementDetails = ({ onClose, activeTab, onTabChange }) => {

    // Handle tab switching and notify parent component
    const handleTabClick = (tab) => {
        onTabChange(tab); // Update active tab in the parent component
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            {/* Header Details */}
            <div className="flex justify-between mb-6">
                {/* Left Column */}
                <div>
                    <p><span className="font-semibold">Date:</span> Octobre 2024</p>
                    <p><span className="font-semibold">WBS:</span> </p>
                    <p><span className="font-semibold">Référence:</span> FDN°034/GBEWA/24</p>
                </div>
                {/* Right Column */}
                <div>
                    <p><span className="font-semibold">Service demandeur:</span> Logistique</p>
                    <p><span className="font-semibold">Motif de la demande:</span> Dotation en forfait de communication, Octobre 2024</p>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex mb-4">
                <button
                    className={`px-4 py-2 rounded-t-lg ${activeTab === 'description' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => handleTabClick('description')}
                >
                    Description de l'Operation
                </button>
                <button
                    className={`px-4 py-2 rounded-t-lg ${activeTab === 'suivie' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => handleTabClick('suivie')}
                >
                    Suivie Budgétaire
                </button>
                <button
                    className={`px-4 py-2 rounded-t-lg ${activeTab === 'imputation' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => handleTabClick('imputation')}
                >
                    Imputation Comptable
                </button>
            </div>

            {/* Dynamic Content Based on Active Tab */}
            <div className="p-4 border border-t-0 rounded-b-lg bg-gray-50">
                {activeTab === 'description' && (
                    <div>
                        <h3 className="text-lg font-bold mb-4">Description de l'Operation</h3>
                        <div className="relative">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                                <thead>
                                    {/* Global Header for the Table */}
                                    <tr>
                                        <th
                                            colSpan="7"
                                            className="py-2 px-4 bg-gray-200 text-center text-lg font-bold border-b border-gray-300 border-l border-gray-300"
                                        >
                                            Description de l'Operation
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="py-2 px-4 border border-gray-300">N°</th>
                                        <th className="py-2 px-4 border border-gray-300">Désignation</th>
                                        <th className="py-2 px-4 border border-gray-300">Qté</th>
                                        <th className="py-2 px-4 border border-gray-300">Nombre</th>
                                        <th className="py-2 px-4 border border-gray-300">PU</th>
                                        <th className="py-2 px-4 border border-gray-300">Montant</th>
                                        <th className="py-2 px-4 border border-gray-300">Observations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4 border border-gray-300">1</td>
                                        <td className="py-2 px-4 border border-gray-300">Forfait communication</td>
                                        <td className="py-2 px-4 border border-gray-300">10</td>
                                        <td className="py-2 px-4 border border-gray-300">1</td>
                                        <td className="py-2 px-4 border border-gray-300">25000</td>
                                        <td className="py-2 px-4 border border-gray-300">250000</td>
                                        <td className="py-2 px-4 border border-gray-300"></td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border border-gray-300">2</td>
                                        <td className="py-2 px-4 border border-gray-300"></td>
                                        <td className="py-2 px-4 border border-gray-300"></td>
                                        <td className="py-2 px-4 border border-gray-300"></td>
                                        <td className="py-2 px-4 border border-gray-300"></td>
                                        <td className="py-2 px-4 border border-gray-300">0</td>
                                        <td className="py-2 px-4 border border-gray-300"></td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border border-gray-300">3</td>
                                        <td className="py-2 px-4 border border-gray-300"></td>
                                        <td className="py-2 px-4 border border-gray-300"></td>
                                        <td className="py-2 px-4 border border-gray-300"></td>
                                        <td className="py-2 px-4 border border-gray-300"></td>
                                        <td className="py-2 px-4 border border-gray-300">0</td>
                                        <td className="py-2 px-4 border border-gray-300"></td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border border-gray-300 font-bold" colSpan="5">Total</td>
                                        <td className="py-2 px-4 border border-gray-300 font-bold">250000</td>
                                        <td className="py-2 px-4 border border-gray-300"></td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Footer information  */}
                            <div className="flex justify-end mt-4">
                                <div className="text-right">
                                    <p>Emetteur: (signature et date)</p>
                                    <p style={{ marginBottom: '20px' }}>Le chargé de logistique:</p>
                                    <p>SINSIN Daniel</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'suivie' && (
                    <BudgetTrackingDetails />
                )}
                {activeTab === 'imputation' && (
                    <AccountingImputationDetails />
                )}
            </div>

            {/* Close Button */}
            <button onClick={onClose} className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">
                Close
            </button>
        </div>
    );
};

export default EngagementDetails;
