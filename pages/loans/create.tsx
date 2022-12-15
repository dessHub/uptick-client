import Layout from '../../components/templates/Layout';
import {CheckCircleIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline';
import LoanTypeForm from '@/components/atoms/forms/LoanTypeForm';
import LoanUserDetails from '@/components/atoms/forms/LoanUserDetails';
import LoanDetails from '@/components/atoms/forms/LoanDetails';
import { useState } from 'react';
import LoanFilesUpload from '@/components/atoms/forms/LoanFilesUpload';
import type { LoanApplicationObject } from '@/types/loans';

interface Step {
    key: number,
    label: number,
    title: string,
    isActive: boolean,
    isCompleted: boolean
}

export default function NewLoan() {
    const stepperData: Step[] = [
        {
            key: 1,
            label: 1,
            isActive: true,
            isCompleted: false,
            title: 'Loan Type'
        },
        {
            key: 2,
            label: 2,
            isActive: false,
            isCompleted: false,
            title: 'Applicant Details'
        },
        {
            key: 3,
            label: 3,
            isActive: false,
            isCompleted: false,
            title: 'Loan Details'
        },
        {
            key: 4,
            label: 4,
            isActive: false,
            isCompleted: false,
            title: 'Loan Documents Upload'
        }
    ];

    const [steppers, setSteppers] = useState<Step[]>([...stepperData]);
    const [loanApplicationObject, setLoanApplicationObject] = useState<LoanApplicationObject>({
        firstName: '',
        lastName: '',
        phoneNo: '',
        idNo: '',
        type: 0,
        amount: 500,
        interest: 7,
        guarantors: [],
        idFile: '',
        loalFile: ''
    });

    const updateStepper = (idx) => {
        const _steppers = [...steppers];
        const current = steppers[idx];
        const next = steppers[idx + 1];
        current.isActive = false;
        current.isCompleted = true;
    
        _steppers[idx] = current;
        if (next) {
           next.isActive = true;
           _steppers[idx + 1] = next;
        }
        setSteppers([..._steppers])
    }

    const handleStepper = (idx: number) => {
        const _steppers = [...steppers];
        const current = steppers[idx];
        current.isActive = !current.isActive;
    
        _steppers[idx] = current;
        setSteppers([..._steppers])
    }
    console.log('setLoanApplicationObject', loanApplicationObject)

    const isDisabled = (step: Step) => {
        if (step.key === 1) return false;

        return !step.isCompleted;
    }

    return (
        <Layout>
            <div className="px-5 py-2">
                <div className="bg-slate-100 shadow-md text-xl font-bold text-blue-400 p-3 mb-5">
                    New Loan Widget
                </div>

                <div className="bg-slate-100 shadow-md p-3">
                    {steppers.map((step, index) => (
                        <div className='' key={step.key}>
                            <button className='flex items-center w-full cursor-pointer' disabled={isDisabled(step)} onClick={()=> handleStepper(index)}>
                                {step.isCompleted ? 
                                  (<CheckCircleIcon className="block mr-2 w-6 h-6 bg-green-800 text-white rounded-full" aria-hidden="true" />) :
                                  (<div className={`flex items-center justify-center mr-2 w-6 h-6 rounded-full border-2 border-solid text-center ${step.isActive || step.key === 1 ? 'text-green-800 border-green-800' : 'text-gray-300'}`}>
                                    {step.label}
                                   </div>)
                                }
                                <div className="flex flex-1 justify-between item-center">
                                    <div className={`py-1 text-md ${step.isActive || step.isCompleted || step.key === 1 ? 'text-gray-900' : 'text-gray-300' }`}>{step.title}</div>
                                    {step.isActive ? 
                                      <ChevronUpIcon className="block mr-2 w-5 h-5" aria-hidden="true" /> :
                                      <ChevronDownIcon className="block mr-2 w-5 h-5" aria-hidden="true" />
                                    }
                                </div>
                            </button>
                            <div className='flex'>
                                <div className='w-5 h-auto flex justify-center'>
                                    <div className={`w-1 h-full border-r-2 ${step.isCompleted ? 'border-solid border-green-800' : `border-dotted ${step.isActive ? 'border-green-800' : 'border-gray-300'}`}`}></div>
                                </div>
                                <div className={`flex-1 p-2 ${step.isActive ? 'bg-white' : 'bg-inherit'}`}>
                                    {(step.key === 1 && step.isActive) && (<LoanTypeForm updateStepper={updateStepper} loanApplicationObject={loanApplicationObject} setLoanApplicationObject={setLoanApplicationObject} />)}
                                    {(step.key === 2 && step.isActive) && (<LoanUserDetails updateStepper={updateStepper} loanApplicationObject={loanApplicationObject} setLoanApplicationObject={setLoanApplicationObject} />)}
                                    {(step.key === 3 && step.isActive) && (<LoanDetails updateStepper={updateStepper} loanApplicationObject={loanApplicationObject} setLoanApplicationObject={setLoanApplicationObject} />)}
                                    {(step.key === 4 && step.isActive) && (<LoanFilesUpload updateStepper={updateStepper} />)}
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </Layout>
    )
}