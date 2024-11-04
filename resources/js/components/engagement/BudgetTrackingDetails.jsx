// BudgetTrackingDetails.jsx
import React from 'react';
import { FaEdit } from 'react-icons/fa';

const BudgetTrackingDetails = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Suivie Budgétaire</h3>
            
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <tbody>
                    <tr>
                        <td className="py-2 px-4 font-semibold border-b border-gray-300">Ligne Budgétaire</td>
                        <td className="py-2 px-4 border-b border-gray-300 flex items-center justify-end space-x-2">
                            <span>A0.12</span>
                            <FaEdit className="text-gray-500 cursor-pointer" />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-semibold border-b border-gray-300">Montant inscrit au budget</td>
                        <td className="py-2 px-4 border-b border-gray-300 flex items-center justify-end space-x-2">
                            <span>1,500,000</span>
                            <FaEdit className="text-gray-500 cursor-pointer" />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-semibold border-b border-gray-300">Montant déjà</td>
                        <td className="py-2 px-4 border-b border-gray-300 flex items-center justify-end space-x-2">
                            <span>500,000</span>
                            <FaEdit className="text-gray-500 cursor-pointer" />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-semibold border-b border-gray-300">Montant accordé</td>
                        <td className="py-2 px-4 border-b border-gray-300 flex items-center justify-end space-x-2">
                            <span>250,000</span>
                            <FaEdit className="text-gray-500 cursor-pointer" />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-semibold border-b border-gray-300">Ancien Solde</td>
                        <td className="py-2 px-4 border-b border-gray-300 flex items-center justify-end space-x-2">
                            <span>1,000,000</span>
                            <FaEdit className="text-gray-500 cursor-pointer" />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-semibold border-b border-gray-300">Nouveau Solde</td>
                        <td className="py-2 px-4 border-b border-gray-300 flex items-center justify-end space-x-2">
                            <span>750,000</span>
                            <FaEdit className="text-gray-500 cursor-pointer" />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-semibold border-b border-gray-300">Fournisseurs/ Prestataire</td>
                        <td className="py-2 px-4 border-b border-gray-300 flex items-center justify-end space-x-2">
                            <span>750,000</span>
                            <FaEdit className="text-gray-500 cursor-pointer" />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 font-semibold border-b border-gray-300">Avis favorable</td>
                        <td className="py-2 px-4 border-b border-gray-300 flex items-center justify-end space-x-2">
                            <span>Favorable</span>
                            <FaEdit className="text-gray-500 cursor-pointer" />
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
                            <FaEdit className="text-gray-500 cursor-pointer" />
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Signature Section */}
            <div className="mt-6">
                <h4 className="font-semibold mb-2">Signature</h4>
                <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                        <span className="h-4 w-4 rounded-full bg-green-500 inline-block"></span>
                        <span>Visa Comptable</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <span className="h-4 w-4 rounded-full border border-green-500 inline-block"></span>
                        <span>Visa Chef Comptable</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <span className="h-4 w-4 rounded-full border border-green-500 inline-block"></span>
                        <span>Visa DAF</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default BudgetTrackingDetails;
