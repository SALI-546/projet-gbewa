// BudgetTrackingDetails.jsx
import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const BudgetTrackingDetails = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSignature, setSelectedSignature] = useState('');

    // Fonction pour ouvrir et fermer la modale
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    // Fonction pour gérer la sélection des signatures
    const handleSignatureChange = (event) => {
        setSelectedSignature(event.target.value);
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Suivi Budgétaire</h3>
            
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <tbody>
                    <tr>
                        <td className="py-2 px-4 font-semibold border-b border-gray-300">Ligne Budgétaire</td>
                        <td className="py-2 px-4 border-b border-gray-300 flex items-center justify-end space-x-2">
                            <span>A0.12</span>
                            <FaEdit className="text-gray-500 cursor-pointer" onClick={toggleModal} />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-semibold border-b border-gray-300">Montant inscrit au budget</td>
                        <td className="py-2 px-4 border-b border-gray-300 flex items-center justify-end space-x-2">
                            <span>1,500,000</span>
                            <FaEdit className="text-gray-500 cursor-pointer" onClick={toggleModal} />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-semibold border-b border-gray-300">Montant déjà dépensé</td>
                        <td className="py-2 px-4 border-b border-gray-300 flex items-center justify-end space-x-2">
                            <span>500,000</span>
                            <FaEdit className="text-gray-500 cursor-pointer" onClick={toggleModal} />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-semibold border-b border-gray-300">Montant accordé</td>
                        <td className="py-2 px-4 border-b border-gray-300 flex items-center justify-end space-x-2">
                            <span>250,000</span>
                            <FaEdit className="text-gray-500 cursor-pointer" onClick={toggleModal} />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-semibold border-b border-gray-300">Ancien Solde</td>
                        <td className="py-2 px-4 border-b border-gray-300 flex items-center justify-end space-x-2">
                            <span>1,000,000</span>
                            <FaEdit className="text-gray-500 cursor-pointer" onClick={toggleModal} />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-semibold border-b border-gray-300">Nouveau Solde</td>
                        <td className="py-2 px-4 border-b border-gray-300 flex items-center justify-end space-x-2">
                            <span>750,000</span>
                            <FaEdit className="text-gray-500 cursor-pointer" onClick={toggleModal} />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-semibold border-b border-gray-300">Fournisseurs/Prestataire</td>
                        <td className="py-2 px-4 border-b border-gray-300 flex items-center justify-end space-x-2">
                            <span>Nom du Prestataire</span>
                            <FaEdit className="text-gray-500 cursor-pointer" onClick={toggleModal} />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-semibold border-b border-gray-300">Avis favorable</td>
                        <td className="py-2 px-4 border-b border-gray-300 flex items-center justify-end space-x-2">
                            <span>Favorable</span>
                            <FaEdit className="text-gray-500 cursor-pointer" onClick={toggleModal} />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-semibold border-b border-gray-300">Avis</td>
                        <td className="py-2 px-4 border-b border-gray-300">
                            “Fermentum urna donec morbi nisi eget euismod morbi in etiam nullam consectetur egestas odio in id tempus mauris quis...”
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-semibold border-b border-gray-300">Moyens de paiement</td>
                        <td className="py-2 px-4 border-b border-gray-300 flex items-center justify-end space-x-2">
                            <span>Caisse</span>
                            <FaEdit className="text-gray-500 cursor-pointer" onClick={toggleModal} />
                        </td>
                    </tr>
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
                </div>
            </div>

            {/* Modale */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"> 
                    <div className="bg-white rounded-lg p-6 w-1/3">
                        <h2 className="text-2xl font-bold mb-4">ORDRE DE PAIEMENT</h2>
                        
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Nom du projet</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg w-full px-4 py-2"
                                    placeholder="SWEDD"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">COMPTE</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg w-full px-4 py-2"
                                    placeholder="ONG GBEWA PIB SWEDD"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">INTITULE</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg w-full px-4 py-2"
                                    placeholder="003712170137"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">N° Facture</label>
                                <div className="relative">
                                 
                                    <input
                                        type="date"
                                        className="border border-gray-300 rounded-lg w-full px-4 py-2"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">N° BL</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg w-full px-4 py-2"
                                    placeholder="106/MOOV/24"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={toggleModal}
                                className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
                            >
                                Fermer
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BudgetTrackingDetails;
