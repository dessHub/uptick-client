import { } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

type Inputs = {
  idFile: string;
  loanFile: string;
};

interface Props {
    updateStepper: (arg: number) => void
}

const LoanFilesUpload = ({ updateStepper }: Props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log('rrrrd',data);
        updateStepper(3)
    }
    console.log('errors', errors);

    return (

        <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="px-0 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="last-name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                ID (Upload scanned ID)
                            </label>
                            <input
                                {...register('idFile', { required: "This is required." })}
                                type="file"
                                name="idFile"
                                id="idFile"
                                className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                            />
                            <ErrorMessage 
                             errors={errors} 
                             name="idFile"
                             render={({ message }) => <p className='text-red-500 text-sm'>{message}</p>}
                             />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="last-name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Loan Application form
                            </label>
                            <input
                                {...register('loanFile', { required: "This is required." })}
                                type="file"
                                name="loanFile"
                                id="loanFile"
                                className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                            />
                            <ErrorMessage 
                             errors={errors} 
                             name="loanFile"
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

export default LoanFilesUpload;