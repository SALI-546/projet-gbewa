// AccountingImputationForm.jsx

import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const AccountingImputationForm = ({ onClose }) => {
    const [entries, setEntries] = useState([
        { id: '01', accountType: 'Débit', accountNumber: '1004343434', amountType: 'Crédit', amountPlaceholder: '...........................' },
        { id: '02', accountType: 'Débit', accountNumber: '1004343434', amountType: 'Crédit', amountPlaceholder: '...........................' }
    ]);
    const [accountType, setAccountType] = useState('Débit');
    const [accountNumber, setAccountNumber] = useState('');
    const [amountType, setAmountType] = useState('Débit');
    const [amount, setAmount] = useState('');

    const addEntry = () => {
        if (accountNumber && amount) {
            setEntries([
                ...entries,
                {
                    id: String(entries.length + 1).padStart(2, '0'),
                    accountType,
                    accountNumber,
                    amountType,
                    amountPlaceholder: amountType === 'Crédit' ? '...........................' : ''
                },
            ]);
            setAccountNumber('');
            setAmount('');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Imputation Comptable</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-black focus:outline-none">
                        &times;
                    </button>
                </div>

                <div className="space-y-4">
                    {/* Order Number Title */}
                    <div>
                        <h3 className="font-medium text-black">Numéro d'ordre</h3>
                    </div>

                    {/* Static Display for "Lignes Ajoutés" */}
                    <div>
                        <label className="font-medium text-gray-700">Lignes Ajoutés</label>
                        <div className="space-y-1 text-sm border-b pb-2">
                            <div className="flex justify-between items-center font-semibold text-gray-500">
                                <span className="w-8">ID</span>
                                <span className="w-20">Type</span>
                                <span className="w-32">Numéro</span>
                                <span className="w-20 text-right">Montant</span>
                                <span className="w-8"></span>
                            </div>
                            {entries.map((entry) => (
                                <div key={entry.id} className="flex justify-between items-center text-sm">
                                    <span className="w-8 text-gray-600">{entry.id}</span>
                                    <span className="w-20 text-gray-800">{entry.accountType}</span>
                                    <span className="w-32 truncate text-gray-800">{entry.accountNumber}</span>
                                    <span className="w-20 text-gray-800 text-right">{entry.amountPlaceholder}</span>
                                    <button className="w-8 text-gray-500 hover:text-gray-700 focus:outline-none">
                                        <FaEdit />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section to Add New Line */}
                    <div className="space-y-4 mt-4">
                        <label className="font-medium text-gray-700">Ajouter une ligne</label>
                        
                        {/* Type de compte */}
                        <div>
                            <p className="font-medium text-gray-700">Type de compte</p>
                            <div className="flex space-x-4">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="accountType"
                                        checked={accountType === 'Débit'}
                                        onChange={() => setAccountType('Débit')}
                                        className="form-radio text-green-600 focus:ring-green-600 checked:bg-green-600"
                                    />
                                    <span>Débit</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="accountType"
                                        checked={accountType === 'Crédit'}
                                        onChange={() => setAccountType('Crédit')}
                                        className="form-radio text-green-600 focus:ring-green-600 checked:bg-green-600"
                                    />
                                    <span>Crédit</span>
                                </label>
                            </div>
                        </div>

                        {/* Numéro de compte */}
                        <div>
                            <label className="font-medium text-gray-700">Numéro de compte</label>
                            <input
                                type="text"
                                placeholder="Assistant Financière du Projet YEWA2"
                                value={accountNumber}
                                onChange={(e) => setAccountNumber(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Montant */}
                        <div>
                            <p className="font-medium text-gray-700">Montant</p>
                            <div className="flex space-x-4">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="amountType"
                                        checked={amountType === 'Débit'}
                                        onChange={() => setAmountType('Débit')}
                                        className="form-radio text-green-600 focus:ring-green-600 checked:bg-green-600"
                                    />
                                    <span>Débit</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="amountType"
                                        checked={amountType === 'Crédit'}
                                        onChange={() => setAmountType('Crédit')}
                                        className="form-radio text-green-600 focus:ring-green-600 checked:bg-green-600"
                                    />
                                    <span>Crédit</span>
                                </label>
                            </div>
                            <input
                                type="text"
                                placeholder="250 000"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                onClick={addEntry}
                                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none"
                            >
                                Ajouter la ligne
                            </button>
                            <div className="flex space-x-4">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 focus:outline-none"
                                >
                                    Précédent
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none"
                                >
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountingImputationForm;
