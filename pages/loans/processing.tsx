import Link from 'next/link';
import Layout from '../../components/templates/Layout';

export default function Processing() {
    const loans = [
        {
            id: 1,
            name: 'John Doe',
            amount: 500,
            status: 0
        },
        {
            id: 2,
            name: 'John Doe',
            amount: 1500,
            status: 1
        },
        {
            id: 3,
            name: 'John Doe',
            amount: 2000,
            status: 0
        },
    ];

    return (
        <Layout>
            <div className="flex flex-col mt-10">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-solid border-t-2 border-slate-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-slate-100">
                        <tr>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                            #
                            </th>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                            Name
                            </th>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                            Amount
                            </th>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                            Status
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Action</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {loans.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                        {index + 1}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                    {item.name}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5">
                                    Ksh.{item.amount}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 0 ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'} `}>
                                       {item.status === 0 ? 'Pending Approvals' : 'Pending Disbursement'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link href={`/loans/${item.id}`} key={item.name}>
                                        <a
                                            className='text-blue-500 hover:text-gray-800 text-xs font-medium'
                                        >
                                            View
                                        </a>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
        </Layout>
    )
}

