/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface Props {
    open: boolean,
    setOpen: (arg: boolean) => void,
    proceed: () => void
}

export default function Modal({ open, setOpen, proceed }: Props) {
  const cancelButtonRef = useRef(null);

  const [comment, setComment] = useState<string>('')

  const handleSubmit = () => {
      console.log('_value', comment);
      proceed();
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="px-6">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium text-gray-900"
                  >
                    Add a review
                  </Dialog.Title>
                </div>
                <div className="hidden sm:block" aria-hidden="true">
                  <div className="py-3">
                    <div className="border-t border-gray-200" />
                  </div>
                </div>

                <div className="sm:flex sm:items-start">
                  <form className='w-full'>
                    <div className="bg-white w-full">
                        <textarea className='bg-neutral-200 p-2 h-20 w-full' value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    </div>
                    <div className="mt-1 p-2 bg-gray-50 text-right">
                      <button
                        onClick={(e) => {
                            e.preventDefault();
                            handleSubmit()
                        }}
                        className="inline-flex justify-center w-full sm:w-auto py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Proceed
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => {
                            setOpen(false);
                        }}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
