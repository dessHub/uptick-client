import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { mockUsers } from 'helpers/data';
import { LoanApplicationObject, Guarantor } from '@/types/loans';

type Inputs = {
  amount: number;
  guarantor: [];
};

interface Props {
    updateStepper: (arg: number) => void,
    loanApplicationObject: LoanApplicationObject,
    setLoanApplicationObject: (arg: LoanApplicationObject) => void
}

const LoanDetails = ({ updateStepper, loanApplicationObject, setLoanApplicationObject }: Props) => {
    const interestRate = 10;

    const [guarantors, setGuarantors] = useState([{percentage: 0, amount: 0, savings: 0 }]);
    const [repaymentAmount, setRepaymentAmount] = useState<number>(0);
    const [isError, setIsError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const {
        register,
        unregister,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();

    const onSubmit: SubmitHandler<Inputs> = async data => {
        const _sum = guarantors.reduce((acc, item) => {
            return acc += item.amount
        }, 0);
        if (_sum < data.amount) {
            setErrorMessage('Loan amount should be quaranteed fully');
            setIsError(true);
        } else {
            const _guarantors: Guarantor[] = data.guarantor.map((item, index) => {
                const _item = {
                    member: item,
                    quaranteePercentage: guarantors[index].percentage,
                    quatanteeAmount: guarantors[index].amount,
                }
                return _item;
            })
            setIsError(false);
            setErrorMessage('');
            setLoanApplicationObject({
                ...loanApplicationObject,
                amount: data.amount,
                guarantors: _guarantors
            })
            updateStepper(2)
        }
    }
    console.log('errors', errors);

    useEffect(() => {
        setValue('amount', 500)
    }, []);

    const amount = watch('amount');
    const guarantorWatch = watch('guarantor');

    // Get guarantors savings
    const getMemberSavings = (email: string) => {
        const _user = mockUsers.find((item) => item.email === email);
        if (_user) {
            return _user.savings
        } else {
            return 0
        }

    }

    // Calculate repayment amount
    useEffect(() => {
        if(amount) {
            const _amount = ((amount * (100 + interestRate)) / 100).toFixed(2);
            setRepaymentAmount(parseInt(_amount));
        }
    }, [amount])

    const handlePercentageChange = (e: number, idx: number) => {
        const percentageTracker = guarantors.reduce((acc, item) => acc += item.percentage, 0);

        const _guarantor = guarantors[idx];
        const _guarantors = [...guarantors];
        const isNeg = _guarantor.percentage > e;

        if (percentageTracker !== 100 || isNeg) {
            const _savings = getMemberSavings(guarantorWatch[idx])
            const _amount = getAmount(e);
            if (_amount <= _savings) {
                _guarantor['percentage'] = e;
                _guarantor['amount'] = _amount
                _guarantors[idx] = _guarantor;
                setGuarantors(_guarantors);
            }
        }
    }

    const addGuarantor = () => {
        const _gurantors = [...guarantors];
        _gurantors.push({percentage: 0, amount: 0, savings: 0});
        setGuarantors(_gurantors);
    }

    const removeGuarantor = (idx: number) => {
        const _gurantors = [...guarantors];
        _gurantors.splice(idx, 1)
        unregister(`guarantor.${idx}`)
        setGuarantors([..._gurantors]);
    }

    const getAmount = (percentage: number) => Math.ceil(((amount || 0) * Number(percentage)) / 100)

    return (

        <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="px-0 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-12 md:gap-6">
                        <div className="col-span-12 sm:col-span-6">
                            <label
                                htmlFor="member"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Amount (KSH)
                            </label>
                            <input
                                {...register('amount', { 
                                    required: "This is required.",
                                    min: {
                                        value: 500,
                                        message: 'Accept minimum of KSH.500'
                                    } 
                                })}
                                type="number"
                                name="amount"
                                id="amount"
                                placeholder="1000"
                                className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                            />
                            <ErrorMessage 
                             errors={errors} 
                             name="amount"
                             render={({ message }) => <p className='text-red-500 text-sm'>{message}</p>}
                             />
                        </div>
                        <div className="col-span-12 sm:col-span-2 text-right">
                            <label
                                htmlFor="period"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Repayment Period
                            </label>
                            <span className='text-sm font-light pl-1'>1 Month</span>
                        </div>
                        <div className="col-span-12 sm:col-span-2 text-right">
                            <label
                                htmlFor="loanInterest"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Loan Interest
                            </label>
                            <span className='text-sm font-light pl-1'>10%</span>
                        </div>
                        <div className="col-span-12 sm:col-span-2 text-right">
                            <label
                                htmlFor="repaymentAmount"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Amount To Repay
                            </label>
                            <span className='text-sm font-light pl-1'>KSH.{repaymentAmount}</span>
                        </div>
                    </div>
                    <div className="pt-3 mt-5">
                        <div className="pb-2 text-lg font-semibold border-b-2 border-solid border-gray-200">Select Guarantor(s)</div>
                        {guarantors.map((item, index) => (
                            <div className="grid grid-cols-12 gap-6 py-3 mt-2 mb-2 border-b-2 border-b-solid" key={index}>
                                <div className="col-span-12 md:col-span-2">
                                    <label
                                        htmlFor="member"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Guarantor
                                    </label>
                                    <select
                                        {...register(`guarantor.${index}`, { required: "This is required." })}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="">Select Guarantor</option>
                                        {mockUsers.map(member => (
                                        <option value={member.email} disabled={guarantorWatch && guarantorWatch.includes(member.email)} key={member.id}>
                                            {member.name}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-span-12 md:col-span-4">
                                    <label
                                        htmlFor="member"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Select % to guarantee
                                    </label>
                                    <Slider
                                        min={0}
                                        max={100}
                                        value={item.percentage}
                                        marks={{
                                            0: '0',
                                            100: '100',
                                        }}
                                        disabled={guarantorWatch && guarantorWatch[index] === ''}
                                        onChange={(e) => handlePercentageChange(e as number, index)}
                                    />
                                </div>
                                <div className="col-span-12 md:col-span-2 text-right">
                                    <label
                                        htmlFor="member"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Amount
                                    </label>
                                    <span className='text-sm font-light pl-1'>KSH.{item.amount}</span>
                                </div>
                                <div className="col-span-12 md:col-span-2 text-right">
                                    <label
                                        htmlFor="member"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Savings
                                    </label>
                                    <span className='text-sm font-light pl-1'>KSH.{guarantorWatch ? getMemberSavings(guarantorWatch[index]) : 0}</span>
                                </div>
                                {index === guarantors.length - 1 ? (
                                    <div className="flex items-center justify-end col-span-12 md:col-span-2">
                                        <button
                                        className={`text-white px-4 px-3 rounded-md ${guarantorWatch && guarantorWatch[index] === '' ? 'bg-green-300 cursor-not-allowed' : 'bg-green-600'} hover:bg-green-500`}
                                        onClick={() => addGuarantor()}
                                        disabled={guarantorWatch && guarantorWatch[index] === ''}
                                        >+</button>
                                    </div>
                                ):(
                                    <div className="flex items-center justify-end col-span-12 md:col-span-2">
                                        <button
                                        className={`text-white px-4 px-3 rounded-md bg-orange-300 hover:bg-orange-500`}
                                        onClick={() => removeGuarantor(index)}
                                        >-</button>
                                    </div>
                                )
                                }
                            </div>
                        ))}
                        {isError && (<div className='text-xs text-red-700'>{errorMessage}</div>)}
                    </div>
                </div>
                <div className="mt-3 px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center w-full sm:w-auto py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    )
};

export default LoanDetails;