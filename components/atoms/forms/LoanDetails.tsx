import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { mockUsers } from 'helpers/data';

type Inputs = {
  amount: number;
  guarantor: [];
};

interface Props {
    updateStepper: (arg: number) => void
}

const LoanDetails = ({ updateStepper }: Props) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data);
        updateStepper(2)
    }
    console.log('errors', errors);

    const amount = watch('amount');
    const [guarantors, setGuarantors] = useState([{percentage: 0 }])

    const handlePercentageChange = (e, idx) => {
        const percentageTracker = guarantors.reduce((acc, item) => acc += item.percentage, 0);

        const _guarantor = guarantors[idx];
        const _guarantors = [...guarantors];
        const isNeg = _guarantor.percentage > e;

        if (percentageTracker !== 100 || isNeg) {
            _guarantor['percentage'] = e;
            _guarantors[idx] = _guarantor;
            setGuarantors(_guarantors);
        }
    }

    const addGuarantor = () => {
        const _gurantors = [...guarantors];
        _gurantors.push({percentage: 0});
        setGuarantors(_gurantors);
    }

    const getAmount = (percentage) => Math.ceil(((amount || 0) * Number(percentage)) / 100)

    return (

        <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="px-0 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="member"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Amount (KSH)
                            </label>
                            <input
                                {...register('amount', { required: "This is required." })}
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
                    </div>
                    <div className="pt-3 mt-5">
                        <div className="pb-2 text-lg font-semibold border-b-2 border-solid border-gray-200">Select Guarantor(s)</div>
                        {guarantors.map((item, index) => (
                            <div className="grid grid-cols-12 gap-6 pt-3 mt-2 mb-2" key={index}>
                                <div className="col-span-6 sm:col-span-3">
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
                                        <option value={null}>Select Guarantor</option>
                                        {mockUsers.map(member => (
                                        <option value={member.email} key={member.id}>
                                            {member.name}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-span-6 sm:col-span-6">
                                    <label
                                        htmlFor="member"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Select % to guatantee
                                    </label>
                                    <Slider
                                        min={0}
                                        max={100}
                                        value={item.percentage}
                                        marks={{
                                            0: '0',
                                            100: '100',
                                        }}
                                        onChange={(e) => handlePercentageChange(e, index)}
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-2 text-right">
                                    <label
                                        htmlFor="member"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Amount
                                    </label>
                                    <span className='text-sm font-light pl-1'>KSH.{getAmount(item.percentage)}</span>
                                </div>
                                {index === guarantors.length - 1 && (
                                    <div className="flex items-center col-span-6 sm:col-span-1">
                                        <button
                                        className='text-white bg-green-600 px-4 px-3 rounded-md'
                                        onClick={addGuarantor}
                                        >+</button>
                                    </div>
                                )}
                            </div>
                        ))}
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