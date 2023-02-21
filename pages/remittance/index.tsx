import { PlusIcon } from '@heroicons/react/outline';
import Layout from '../../components/templates/Layout';
import SelectMenu from 'components/atoms/SelectMenu';
import RangeDatePicker from 'components/atoms/RangeDatePicker';
import RemittanceModal from '@/components/atoms/modals/RemittanceModal';
import { useEffect, useState } from 'react';
import { mockRemittance, mockUsers } from 'helpers/data';

export default function Remittance() {
  const [remittance, setRemittance] = useState([]);
  const [members, setSelectedMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState({
    id: 0,
    name: 'Filter By Member',
  });
  const dateNow = new Date();
  const year = dateNow.getFullYear();
  const month = dateNow.getMonth();
  const day = dateNow.getDate();
  const date = new Date(year - 1, month, day);
  const [startDate, setStartDate] = useState(date);
  const [endDate, setEndDate] = useState(dateNow);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setSelectedMembers(mockUsers);
  }, []);

  useEffect(() => {
    let filterData =
      selectedMember.id === 0
        ? mockRemittance
        : mockRemittance.filter(item => item.user.id === selectedMember.id);
    filterData = filterData.filter(item => {
      const date = new Date(item.createdAt);
      return date >= startDate && date <= endDate;
    });
    setRemittance(filterData);
  }, [selectedMember.id, startDate, endDate]);

  function reset() {
    setSelectedMember({
      id: 0,
      name: 'Filter By Member',
    });
    setStartDate(date);
    setEndDate(dateNow);
  }

  return (
    <Layout>
      <div className="flex justify-between flex-col lg:flex-row lg:space-x-2 p-2 bg-slate-100 shadow-md">
        <div className="flex flex-col md:flex-row md:space-x-2 md:basis-4/5 mb-1 order-2 lg:order-1">
          <SelectMenu
            items={members}
            selected={selectedMember}
            setSelected={setSelectedMember}
          />
          <RangeDatePicker
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
          <div className="flex items-center px-5">
            <button
              className="bg-blue-800 hover:bg-blue-900 text-blue-200 hover:text-blue-300 rounded px-5 py-1"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="flex md:justify-end items-center order-1 lg:order-2 mb-5 md:mb-0">
          <button
            className="flex items-center bg-blue-800 hover:bg-blue-900 text-blue-200 hover:text-blue-300 rounded px-5 py-1"
            onClick={() => setOpen(true)}
          >
            <PlusIcon className="w-5 mr-1" aria-hidden="true" />
            Add Remittance
          </button>
        </div>
      </div>
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
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Remittance Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Amount
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {remittance.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {item.user.name}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.user.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {item.createdAt}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Ksh.{item.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <RemittanceModal open={open} setOpen={setOpen} members={members} />
    </Layout>
  );
}
