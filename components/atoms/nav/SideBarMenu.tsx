import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function Menu({ menuObject }) {
    const router = useRouter();

    function classNames(...classes) {
       return classes.filter(Boolean).join(' ');
    }

  return (
    <>
        <div className='w-full'>
            <Link href={menuObject.href} key={menuObject.name} className="flex items-center p-2">
                <menuObject.icon className="block h-5 w-5 mr-2" aria-hidden="true" />
                <div className='text-sm font-bold'>{menuObject.name}</div>
            </Link>
            <div className={router.asPath.includes(menuObject.base) ? 'block' : 'hidden'}>
                {menuObject.items.map(item => (
                    <Link href={item.href} key={item.name} className={classNames(
                        router.asPath === item.href
                            ? 'bg-neutral-300 hover:text-gray-800 hover:bg-neutral-500  hover:border-t-neutral-400'
                            : 'hover:bg-neutral-300 hover:text-gray-800',
                        'flex items-center hover:border-t pl-9 py-2 text-sm font-medium'
                        )}
                        aria-current={router.asPath === item.href ? 'page' : undefined}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    </>
  );
}

Menu.propTypes = {
  menuObject: PropTypes.object
};
