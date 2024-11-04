// AccountingImputationDetails.jsx
import React from 'react';

const AccountingImputationDetails = () => {
    return (
        <div>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <thead>
                    <tr>
                        <th colSpan="6" className="py-2 px-4 bg-gray-200 text-center text-lg font-bold border-b border-gray-300">
                            Imputation Comptable
                        </th>
                    </tr>
                    <tr>
                        <th className="py-2 px-4 border border-gray-300" rowSpan="2">N°</th>
                        <th colSpan="2" className="py-2 px-4 border border-gray-300">N° de Compte</th>
                        <th rowSpan="2" className="py-2 px-4 border border-gray-300">REFERENCE</th>
                        <th colSpan="2" className="py-2 px-4 border border-gray-300">Montant</th>
                    </tr>
                    <tr>
                        <th className="py-2 px-4 border border-gray-300">Débit</th>
                        <th className="py-2 px-4 border border-gray-300">Crédit</th>
                        <th className="py-2 px-4 border border-gray-300">Débit</th>
                        <th className="py-2 px-4 border border-gray-300">Crédit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 px-4 border border-gray-300">1</td>
                        <td className="py-2 px-4 border border-gray-300"></td>
                        <td className="py-2 px-4 border border-gray-300"></td>
                        <td rowSpan="6" className="py-2 px-4 border border-gray-300 text-center">FACTURE + BL</td>
                        <td className="py-2 px-4 border border-gray-300">250000</td>
                        <td className="py-2 px-4 border border-gray-300">250000</td>
                    </tr>
                    {[2, 3, 4, 5, 6].map((num) => (
                        <tr key={num}>
                            <td className="py-2 px-4 border border-gray-300">{num}</td>
                            <td className="py-2 px-4 border border-gray-300"></td>
                            <td className="py-2 px-4 border border-gray-300"></td>
                            <td className="py-2 px-4 border border-gray-300"></td>
                            <td className="py-2 px-4 border border-gray-300"></td>
                        </tr>
                    ))}
                    <tr>
                        <td className="py-2 px-4 border border-gray-300 font-bold" colSpan="4">TOTAL</td>
                        <td className="py-2 px-4 border border-gray-300 font-bold">250000</td>
                        <td className="py-2 px-4 border border-gray-300 font-bold">250000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AccountingImputationDetails;
