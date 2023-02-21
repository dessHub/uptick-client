import { useState } from 'react';
import { useRouter } from 'next/router';
import { LoanApplicationObject } from '@/types/loans';
import Layout from '../../components/templates/Layout';
import ReviewModal from '@/components/atoms/modals/ReviewModal';

export default function Loans() {
    const router = useRouter()
    const { id } = router.query;
    console.log('id', id);
    const [loanApplicationObject] = useState<LoanApplicationObject>({
        firstName: 'John',
        lastName: 'Doe',
        phoneNo: '+254792746432',
        idNo: '3434343343',
        type: 0,
        amount: 500,
        interest: 7,
        guarantors: [],
        idFile: 'http://www.pdf995.com/samples/pdf.pdf',
        loanFile: 'http://www.pdf995.com/samples/pdf.pdf'
    });

    const [reviewOpen, setReviewOpen] = useState<boolean>(false);
    const handleReview = () => {
        setReviewOpen(false)
    }

  return (
    <Layout>
      <div>
          <div className="bg-slate-100 shadow-md p-3">
              <div className='my-5'>
                  <div className='text-md font-bold pb-2'>Applicant Info</div>
                  <div className='bg-white px-5 py-2 flex flex-col flex-wrap'>
                      <div className="m-2 flex flex-1 items-center">
                          <div className='text-sm font-semibold mr-2'>Name:</div>
                          <div className='text-sm font-thin'>{loanApplicationObject.firstName} {loanApplicationObject.lastName}</div>
                      </div>
                      <div className="m-2 flex flex-1 items-center">
                          <div className='text-sm font-semibold mr-2'>Mobile No:</div>
                          <div className='text-sm font-thin'>{loanApplicationObject.phoneNo}</div>
                      </div>
                      <div className="m-2 flex flex-1 items-center">
                          <div className='text-sm font-semibold mr-2'>Id No:</div>
                          <div className='text-sm font-thin'>{loanApplicationObject.idNo}</div>
                      </div>
                  </div>
              </div>
              <div className='my-5'>
                  <div className='text-md font-bold pb-2'>Loan Info</div>
                  <div className='bg-white px-5 py-2 flex flex-col flex-wrap'>
                      <div className="m-2 flex flex-1 items-center">
                          <div className='text-sm font-semibold mr-2'>Amount:</div>
                          <div className='text-sm font-thin'>KES: {loanApplicationObject.amount}</div>
                      </div>
                      <div className="m-2 flex flex-1 items-center">
                          <div className='text-sm font-semibold mr-2'>Interest:</div>
                          <div className='text-sm font-thin'>{loanApplicationObject.interest}%</div>
                      </div>
                      <div className="m-2 flex flex-1 items-center">
                          <div className='text-sm font-semibold mr-2'>Amount To Repay:</div>
                          <div className='text-sm font-thin'>KES: {loanApplicationObject.amount * ((100 + loanApplicationObject.interest) / 100)}</div>
                      </div>
                  </div>
              </div>
              <div className='my-5'>
                  <div className='text-md font-bold pb-2'>Guarantors</div>
                  <div className='bg-white px-5 py-2 flex flex-row flex-wrap'>
                      <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                              <tr>
                                  <th
                                      scope="col"
                                      className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                      Member
                                  </th>
                                  <th
                                      scope="col"
                                      className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                      Amount
                                  </th>
                              </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                              {loanApplicationObject.guarantors.map(person => (
                              <tr key={person.member}>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                      <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900">
                                          {person.member}
                                      </div>
                                      </div>
                                  </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">
                                      {person.quatanteeAmount}
                                  </div>
                                  </td>
                              </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </div>
              <div className='my-5'>
                  <div className='text-md font-bold pb-2'>Documents</div>
                  <div className='bg-white px-5 py-2 flex flex-row flex-wrap'>
                      <div className="m-2 flex flex-1">
                          <div className='text-sm font-semibold mr-2'>ID:</div>
                          <a className='text-blue-800 text-sm underline' href='http://www.pdf995.com/samples/pdf.pdf' target="_blank" rel="noreferrer">http://www.pdf995.com/samples/pdf.pdf</a>
                      </div>
                      <div className="m-2 flex flex-1">
                          <div className='text-sm font-semibold mr-2'>Application Form:</div>
                          <a className='text-blue-800 text-sm underline' href='http://www.pdf995.com/samples/pdf.pdf' target="_blank" rel="noreferrer">http://www.pdf995.com/samples/pdf.pdf</a>
                      </div>
                  </div>
              </div>

              <div className='my-5 flex justify-end'>
                  <button className='text-white hover:bg-blue-600 bg-blue-900 rounded p-2 mr-2'>Approve</button>
                  <button 
                      className='text-white hover:bg-orange-600 bg-orange-700 rounded p-2' 
                      onClick={
                          () => {setReviewOpen(true)}
                      }>
                      Decline
                  </button>
              </div>
          </div>
      
      </div>
      <ReviewModal open={reviewOpen} setOpen={setReviewOpen} proceed={handleReview} />
    </Layout>
  );
}
