// EngagementForm.jsx

import React, { useState } from 'react';
import Select from 'react-select';
import OperationDescriptionModal from './OperationDescriptionModal';

// Options pour le composant Select
const options = [
    { value: 'logistique', label: 'Logistique' },
    { value: 'administration', label: 'Administration' },
    { value: 'finances', label: 'Finances' },
    // Ajoutez d'autres options si nécessaire
];

const EngagementForm = ({ onClose }) => {
    const [showDescriptionModal, setShowDescriptionModal] = useState(false);

    const handleDescriptionClick = () => {
        setShowDescriptionModal(true);
    };

    const handleCloseDescriptionModal = () => {
        setShowDescriptionModal(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Ajoutez une opération</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-black focus:outline-none">
                        &times;
                    </button>
                </div>

                <div className="mb-4">
                    <p className="font-medium mb-2">Numéro d'ordre</p>
                    <input
                        type="text"
                        placeholder="Facture EM100234-23 du 12/10/2024"
                        className="w-full border rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />

                    {/* Champs pour les détails de l'opération */}
                    <div className="grid grid-cols-1 gap-4">
                        {/* Utilisation de react-select */}
                        <Select
                            options={options}
                            placeholder="Service demandeur"
                            className="w-full focus:outline-none"
                            classNamePrefix="react-select"
                        />

                        <input
                            type="text"
                            placeholder="WBS"
                            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />

                        <input
                            type="text"
                            placeholder="Motif de la demande"
                            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                    </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={handleDescriptionClick}
                        className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                    >
                        Description de l’opération
                    </button>
                </div>

                {/* Modale pour la description */}
                {showDescriptionModal && (
                    <OperationDescriptionModal onClose={handleCloseDescriptionModal} />
                )}
            </div>
        </div>
    );
};

export default EngagementForm;
