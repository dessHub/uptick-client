import { } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { LoanApplicationObject } from '@/types/loans';

type Inputs = {
  firstName: string;
  lastName: string;
};

interface Props {
    updateStepper: (arg: number) => void,
    loanApplicationObject: LoanApplicationObject,
    setLoanApplicationObject: (arg: LoanApplicationObject) => void
}

const LoanUserDetails = ({ updateStepper, loanApplicationObject, setLoanApplicationObject }: Props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
            defaultValues: {
                firstName: loanApplicationObject.firstName,
                lastName: loanApplicationObject.lastName,
                phoneNo: loanApplicationObject.phoneNo
            }
        });

    const onSubmit: SubmitHandler<Inputs> = data => {
        setLoanApplicationObject({
            ...loanApplicationObject,
            ...data
        })
        updateStepper(1)
    }
    console.log('errors', errors);

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
                                First Name
                            </label>
                            <input
                                {...register('firstName', { minLength: 2, required: "This is required." })}
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="John"
                                className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                            />
                            <ErrorMessage 
                             errors={errors} 
                             name="firstName"
                             render={({ message }) => <p className='text-red-500 text-sm'>{message}</p>}
                             />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="last-name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Last Name
                            </label>
                            <input
                                {...register('lastName', { minLength: 2, required: "This is required." })}
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Doe"
                                className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                            />
                            <ErrorMessage 
                             errors={errors} 
                             name="lastName"
                             render={({ message }) => <p className='text-red-500 text-sm'>{message}</p>}
                             />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="last-name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Phone Number
                            </label>
                            <input
                                {...register('phoneNo', { minLength: 10, maxLength: 10, required: "This is required." })}
                                type="text"
                                name="phoneNo"
                                id="phoneNo"
                                placeholder="0712345678"
                                className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                            />
                            <ErrorMessage 
                             errors={errors} 
                             name="phoneNo"
                             render={({ message }) => <p className='text-red-500 text-sm'>{message}</p>}
                             />
                        </div>
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

export default LoanUserDetails;