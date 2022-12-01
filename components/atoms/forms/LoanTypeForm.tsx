import { } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

type Inputs = {
  type: string;
  idNo?: string;
};

interface Props {
    updateStepper: (arg: number) => void
}

const LoanTypeForm = ({ updateStepper }: Props) => {
    const loanTypes = [
        {
            value: 0,
            title: 'Self'
        },
        {
            value: 1,
            title: 'Customer'
        }
    ];

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data);
        updateStepper(0)
    }
    console.log('errors', errors);

    const watchType = watch("type");

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
                                Loan Type
                            </label>
                            <select
                                {...register('type')}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value={null}>Select Loan Type</option>
                                {loanTypes.map(type => (
                                <option value={type.value} key={type.value}>
                                    {type.title}
                                </option>
                                ))}
                            </select>
                        </div>

                        {watchType == 1 && (
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="last-name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Customer ID No
                            </label>
                            <input
                                {...register('idNo', { minLength: 4, required: "This is required." })}
                                type="text"
                                name="idNo"
                                id="idNo"
                                placeholder="1212"
                                className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                            />
                            <ErrorMessage 
                             errors={errors} 
                             name="idNo"
                             render={({ message }) => <p className='text-red-500 text-sm'>{message}</p>}
                             />
                        </div>)}
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

export default LoanTypeForm;