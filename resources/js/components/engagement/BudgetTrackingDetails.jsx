// BudgetTrackingDetails.jsx

import React, { useState } from 'react';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';

const BudgetTrackingDetails = () => {
    // État pour stocker les valeurs éditables
    const [values, setValues] = useState({
        'Ligne Budgétaire': 'A0.12',
        'Montant inscrit au budget': '1,500,000',
        'Montant déjà dépensé': '500,000',
        'Montant accordé': '250,000',
        'Ancien Solde': '1,000,000',
        'Nouveau Solde': '750,000',
        'Fournisseurs/Prestataire': 'Nom du Prestataire',
        'Avis favorable': 'Favorable',
        'Avis': '“Fermentum urna donec morbi nisi eget euismod morbi in etiam nullam consectetur egestas odio in id tempus mauris quis...”',
        'Moyens de paiement': 'Caisse',
    });

    // État pour déterminer quel champ est en mode édition
    const [editingField, setEditingField] = useState(null);

    // Fonction pour gérer le changement de valeur
    const handleChange = (e) => {
        setValues({ ...values, [editingField]: e.target.value });
    };

    // Fonction pour sauvegarder la nouvelle valeur
    const handleSave = () => {
        // Ici, vous pouvez ajouter une logique pour sauvegarder les données (par exemple, une requête API)
        setEditingField(null);
    };

    // Fonction pour annuler l'édition
    const handleCancel = () => {
        // Vous pouvez réinitialiser la valeur si nécessaire
        setEditingField(null);
    };

    // Liste des champs à afficher
    const fields = [
        'Ligne Budgétaire',
        'Montant inscrit au budget',
        'Montant déjà dépensé',
        'Montant accordé',
        'Ancien Solde',
        'Nouveau Solde',
        'Fournisseurs/Prestataire',
        'Avis favorable',
        'Avis',
        'Moyens de paiement',
    ];

    // État pour les signatures
    const [selectedSignature, setSelectedSignature] = useState('');

    // Fonction pour gérer la sélection des signatures
    const handleSignatureChange = (event) => {
        setSelectedSignature(event.target.value);
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Suivi Budgétaire</h3>

            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <tbody>
                    {fields.map((field) => (
                        <tr key={field}>
                            <td className="py-2 px-4 font-semibold border-b border-gray-300">{field}</td>
                            <td className="py-2 px-4 border-b border-gray-300 flex items-center justify-end space-x-2">
                                {editingField === field ? (
                                    <>
                                        <input
                                            type="text"
                                            value={values[field]}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg px-2 py-1 w-full"
                                        />
                                        <button onClick={handleSave} className="text-green-500 hover:text-green-700">
                                            <FaSave />
                                        </button>
                                        <button onClick={handleCancel} className="text-red-500 hover:text-red-700">
                                            <FaTimes />
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <span>{values[field]}</span>
                                        <FaEdit
                                            className="text-gray-500 cursor-pointer"
                                            onClick={() => setEditingField(field)}
                                        />
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Section des signatures avec boutons radio */}
            <div className="mt-6">
                <h4 className="font-semibold mb-2">Signature</h4>
                <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="signature"
                            value="Visa Comptable"
                            checked={selectedSignature === 'Visa Comptable'}
                            onChange={handleSignatureChange}
                            className="form-radio h-5 w-5 text-green-500"
                        />
                        <span>Visa Comptable</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="signature"
                            value="Visa Chef Comptable"
                            checked={selectedSignature === 'Visa Chef Comptable'}
                            onChange={handleSignatureChange}
                            className="form-radio h-5 w-5 text-green-500"
                        />
                        <span>Visa Chef Comptable</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="signature"
                            value="Visa DAF"
                            checked={selectedSignature === 'Visa DAF'}
                            onChange={handleSignatureChange}
                            className="form-radio h-5 w-5 text-green-500"
                        />
                        <span>Visa DAF</span>
                    </label>
                    {/* Ajout de Visa DEF */}
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="signature"
                            value="Visa DEF"
                            checked={selectedSignature === 'Visa DEF'}
                            onChange={handleSignatureChange}
                            className="form-radio h-5 w-5 text-green-500"
                        />
                        <span>Visa DEF</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default BudgetTrackingDetails;
