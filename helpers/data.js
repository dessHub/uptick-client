export const mockUsers = [
  {
    id: 1,
    identificationCard: '8475847584',
    status: 'Active',
    name: 'Mark Petterson',
    roles: ['Admin', 'Member'],
    email: 'markr@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    id: 2,
    identificationCard: '8475847584',
    status: 'Active',
    name: 'Jane Cooper',
    roles: ['Member'],
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    id: 3,
    identificationCard: '8475847584',
    status: 'Active',
    name: 'Ben mark',
    roles: ['User'],
    email: 'ben.mark@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    id: 4,
    identificationCard: '8475847584',
    status: 'Active',
    name: 'Merry Marc',
    roles: ['Treasurer', 'Member'],
    email: 'mary@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    id: 5,
    identificationCard: '8475847584',
    status: 'Active',
    name: 'Jennifer Jay',
    roles: ['User'],
    email: 'jay@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    id: 6,
    identificationCard: '8475847584',
    status: 'Active',
    name: 'Harry kane',
    roles: ['Member'],
    email: 'harry@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
];

export const mockRemittance = [
  {
    id: 1,
    user: {
      id: 2,
      identificationCard: '8475847584',
      status: 'Active',
      name: 'Jane Cooper',
      roles: ['Member'],
      email: 'jane.cooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    createdAt: '02/04/2022',
    updatedAt: '02/04/2022',
    amount: 3000,
  },
  {
    id: 2,
    user: {
      id: 1,
      identificationCard: '8475847584',
      status: 'Active',
      name: 'Mark Petterson',
      roles: ['Admin', 'Member'],
      email: 'markr@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    createdAt: '02/04/2022',
    updatedAt: '02/04/2022',
    amount: 3000,
  },
  {
    id: 3,
    user: {
      id: 6,
      identificationCard: '8475847584',
      status: 'Active',
      name: 'Harry kane',
      roles: ['Member'],
      email: 'harry@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    createdAt: '02/04/2022',
    updatedAt: '02/04/2022',
    amount: 3000,
  },
  {
    id: 4,
    user: {
      id: 2,
      identificationCard: '8475847584',
      status: 'Active',
      name: 'Jane Cooper',
      roles: ['Member'],
      email: 'jane.cooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    createdAt: '08/04/2021',
    updatedAt: '02/04/2022',
    amount: 3000,
  },
  {
    id: 5,
    user: {
      id: 1,
      identificationCard: '8475847584',
      status: 'Active',
      name: 'Mark Petterson',
      roles: ['Admin', 'Member'],
      email: 'markr@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    createdAt: '08/08/2021',
    updatedAt: '02/04/2022',
    amount: 3000,
  },
  {
    id: 6,
    user: {
      id: 6,
      identificationCard: '8475847584',
      status: 'Active',
      name: 'Harry kane',
      roles: ['Member'],
      email: 'harry@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    createdAt: '06/08/2021',
    updatedAt: '02/04/2022',
    amount: 3000,
  },
];
