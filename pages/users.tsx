import Layout from 'components/templates/Layout';
import StatsCard from 'components/atoms/StatsCard';
import { mockUsers } from 'helpers/data';
import { User } from 'types/users';
import { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [clients, setClients] = useState(0);
  const [members, setMembers] = useState(0);

  useEffect(() => {
    setUsers(mockUsers);
    setMembers(mockUsers.filter(user => user.roles.includes('Member')).length);
    setClients(mockUsers.filter(user => user.roles.includes('User')).length);
  }, []);

  function filterUsers(userType) {
    if (userType === 'All') {
      setUsers(mockUsers);
    } else {
      const userList: User[] = mockUsers.filter((user: User) =>
        user.roles.includes(userType)
      );
      setUsers(userList);
    }
  }

  return (
    <Layout>
      <div className="flex justify-start flex-col md:flex-row space-y-2 md:space-y-0 bg-slate-100 shadow-md px-2 py-5">
        <StatsCard
          title="No Users"
          stats={mockUsers.length}
          userType="All"
          handleFilter={filterUsers}
        />
        <StatsCard
          title="Members"
          stats={members}
          userType="Member"
          handleFilter={filterUsers}
        />
        <StatsCard
          title="Clients"
          stats={clients}
          userType="User"
          handleFilter={filterUsers}
        />
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
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map(person => (
                    <tr key={person.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {person.name}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {person.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.roles.map(item => (
                          <span
                            className="m-1 bg-gray-100 p-1 rounded"
                            key={item}
                          >
                            {item}
                          </span>
                        ))}
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
    </Layout>
  );
}
