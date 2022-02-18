import PropTypes from 'prop-types';

export default function StatsCard({ title, stats, userType, handleFilter }) {
  return (
    <>
      <div
        className="flex justify-between bg-white  rounded hover:bg-slate-50 hover:cursor-pointer drop-shadow p-3 w-full md:w-64 md:mr-5 mb-2"
        onClick={() => handleFilter(userType)}
      >
        <span className="mb-1 text-base text-slate-700">{title}</span>
        <span className="text-lg text-blue-900">{stats}</span>
      </div>
    </>
  );
}

StatsCard.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.number,
  userType: PropTypes.string,
  handleFilter: PropTypes.func,
};
