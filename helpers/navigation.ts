import { HomeIcon, UsersIcon, UserAddIcon, CurrencyDollarIcon } from '@heroicons/react/outline';

export const navigationData = [
    { 
      name: 'Dashboard', 
      href: '/',
      base: 'dashboard',
      icon: HomeIcon,
      items: []
    },
    { 
      name: 'Users', 
      href: '/users/members',
      base: 'users',
      icon: UsersIcon,
      items: [
        {
          name: 'Members',
          href: "/users/members"
        },
        {
          name: 'Clients',
          href: "/users/clients"
        },
      ]
    },
    { 
      name: 'Loans', 
      href: '/loans/create',
      base: 'loans',
      icon: CurrencyDollarIcon,
      items: [
        {
          name: 'All',
          href: "/loans"
        },
        {
          name: 'New',
          href: "/loans/create"
        },
        {
          name: 'Processing',
          href: "/loans/processing"
        }
      ]
    },
    { 
      name: 'Remittance', 
      href: '/remittance',
      base: 'remittance',
      icon: UserAddIcon,
      items: [
        {
          name: 'All',
          href: "/remittance"
        }
      ]
    },
  ];