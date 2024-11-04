// BudgetTrackingForm.jsx

import React from 'react';

const BudgetTrackingForm = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div
                className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Pour les navigateurs Firefox et IE
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">SUIVI BUDGÉTAIRE</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-black focus:outline-none">
                        &times;
                    </button>
                </div>

                <form className="space-y-4">
                    {/* Champs du formulaire */}
                    <div>
                        <label className="font-medium">Nom du projet</label>
                        <input
                            type="text"
                            placeholder="Nom du projet"
                            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                    </div>

                    <div>
                        <label className="font-medium">Ligne budgétaire</label>
                        <input
                            type="text"
                            placeholder="SINSIN Daniel"
                            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                    </div>

                    <div>
                        <label className="font-medium">Montant inscrit au budget</label>
                        <input
                            type="text"
                            placeholder="Chef Comptable et Logistique"
                            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                    </div>

                    <div>
                        <label className="font-medium">Montant déjà dépensés</label>
                        <input
                            type="text"
                            placeholder="Assistants Comptable"
                            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                    </div>

                    <div>
                        <label className="font-medium">Montant accordé</label>
                        <input
                            type="text"
                            placeholder="Finance"
                            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                    </div>

                    <div>
                        <label className="font-medium">Ancien solde</label>
                        <input
                            type="text"
                            placeholder="Assistant Financière du Projet YEWA2"
                            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                    </div>

                    <div>
                        <label className="font-medium">Fournisseurs / Prestataire</label>
                        <input
                            type="text"
                            placeholder="Assistant Financière du Projet YEWA2"
                            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                    </div>

                    {/* Section Avis */}
                    <div className="space-y-2 mt-4">
                        <label className="font-medium">Avis</label>
                        <div className="flex space-x-4">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="avis" className="form-radio text-green-500" />
                                <span>Favorable</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="avis" className="form-radio text-green-500" />
                                <span>Défavorable</span>
                            </label>
                        </div>
                        <textarea
                            placeholder="Commentaires"
                            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                    </div>

                    {/* Section Moyens de paiement */}
                    <div className="space-y-2 mt-4">
                        <label className="font-medium">Moyens de paiement</label>
                        <div className="flex space-x-4">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="payment" className="form-radio text-green-500" />
                                <span>Caisse</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="payment" className="form-radio text-green-500" />
                                <span>Chèque</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="payment" className="form-radio text-green-500" />
                                <span>Virement</span>
                            </label>
                        </div>
                    </div>

                    {/* Section Signature */}
                    <div className="space-y-2 mt-4">
                        <label className="font-medium">Signature</label>
                        <div className="flex space-x-4">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="signature" className="form-radio text-green-500" />
                                <span>Visa Comptable</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="signature" className="form-radio text-green-500" />
                                <span>Visa Chef Comptable</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="signature" className="form-radio text-green-500" />
                                <span>Visa DAF</span>
                            </label>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-green-600 text-white py-2 px-4 rounded-lg w-full mt-4 hover:bg-green-700"
                    >
                        OK
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BudgetTrackingForm;
