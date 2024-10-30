// OperationDescriptionModal.jsx

import React from 'react';
import { FaEdit } from 'react-icons/fa';

const OperationDescriptionModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Description de l'opération</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-black focus:outline-none">
                        &times;
                    </button>
                </div>

                {/* Lignes Ajoutées Section */}
                <p className="font-medium mb-2">Numéro d'ordre</p>
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg mb-6">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-gray-100 text-left font-medium text-gray-600 border border-gray-300">N°</th>
                            <th className="py-2 px-4 bg-gray-100 text-left font-medium text-gray-600 border border-gray-300">Désignation</th>
                            <th className="py-2 px-4 bg-gray-100 text-left font-medium text-gray-600 border border-gray-300">Qté</th>
                            <th className="py-2 px-4 bg-gray-100 text-left font-medium text-gray-600 border border-gray-300">PU</th>
                            <th className="py-2 px-4 bg-gray-100 text-left font-medium text-gray-600 border border-gray-300">Total</th>
                            <th className="py-2 px-4 bg-gray-100 text-left font-medium text-gray-600 border border-gray-300">Montant</th>
                            <th className="py-2 px-4 bg-gray-100 text-left font-medium text-gray-600 border border-gray-300">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="py-2 px-4 border border-gray-300">01</td>
                            <td className="py-2 px-4 border border-gray-300">Forfait communication</td>
                            <td className="py-2 px-4 border border-gray-300">10</td>
                            <td className="py-2 px-4 border border-gray-300">250 000</td>
                            <td className="py-2 px-4 border border-gray-300">2 500 000</td>
                            <td className="py-2 px-4 border border-gray-300">Observations...</td>
                            <td className="py-2 px-4 border border-gray-300">
                                <button className="text-gray-600 hover:text-black focus:outline-none">
                                    <FaEdit />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Section Ajouter une ligne */}
                <div className="mb-4">
                    <p className="font-medium mb-2">Ajouter une ligne</p>
                    
                    {/* Désignation */}
                    <div className="mb-2">
                        <label className="font-medium">Désignation</label>
                        <input
                            type="date"
                            className="w-full border rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            placeholder="Facture EM100234-23 du 12/10/2024"
                        />
                    </div>
                    
                    {/* Qté */}
                    <div className="mb-2">
                        <label className="font-medium">Qté</label>
                        <input
                            type="number"
                            placeholder="250 000"
                            className="w-full border rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                    </div>
                    
                    {/* PU */}
                    <div className="mb-2">
                        <label className="font-medium">PU</label>
                        <input
                            type="number"
                            placeholder="250 000"
                            className="w-full border rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                    </div>

                    {/* Montant et Observation */}
                    <div className="mb-2">
                        <label className="font-medium">Montant</label>
                        <input
                            type="text"
                            placeholder="Bon de commande"
                            className="w-full border rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                    </div>

                    <div className="mb-2">
                        <label className="font-medium">Observation</label>
                        <textarea
                            placeholder="..."
                            className="w-full border rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                    </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex justify-between">
                    <button
                        onClick={onClose} // Modification ici
                        className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
                    >
                        Précédent
                    </button>
                    <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
                        Ajouter la ligne
                    </button>
                    <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
                        Enregistrer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OperationDescriptionModal;
