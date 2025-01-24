import React from 'react';
import { FiMapPin, FiAward, FiTag, FiHeart, FiRefreshCw, FiPlay, FiMoreVertical } from 'react-icons/fi';

interface ImpactCardProps {
  card_id: string;
  brand: string;
  location: string;
  sponsor: string;
  reward: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({
  card_id,
  brand,
  location,
  sponsor,
  reward
}) => {
  return (
    <div className="card bg-gradient-to-br from-primary via-blue-500 to-indigo-600 text-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
      <div className="card-body p-6 flex flex-col gap-6">
        {/* Main content area */}
        <div className="space-y-3">
          <h2 className="card-title text-3xl font-extrabold">
            {brand}
          </h2>
        </div>

        {/* Stats row */}
        <div className="flex gap-6 mt-16 justify-center flex-wrap">
          <div className="flex flex-1 flex-col items-center gap-2 bg-white/20 p-6 rounded-lg shadow-md hover:shadow-lg transition justify-center">
            <div className='flex gap-2 items-center'>
              <FiAward className="text-white/70 text-2xl" />
              <span className="text-sm text-white/50">Reward</span>
            </div>
            <span className="text-xs font-semibold text-center">{reward}</span>
          </div>
          <div className="flex flex-1 flex-col items-center gap-2 bg-white/20 p-6 rounded-lg shadow-md hover:shadow-lg transition justify-center">
            <div className='flex gap-2 items-center'>
              <FiMapPin className="text-white/70 text-2xl" />
              <span className="text-sm text-white/50">Location</span>
            </div>
            <span className="text-sm font-semibold text-center">{location}</span>
          </div>
          <div className="flex flex-1 min-w-[120px] items-center bg-white/20 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <p className='text-white/70 text-sm italic text-center'>
              Sponsored by: <span className='font-semibold'>{sponsor}</span>
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="card-actions flex flex-col gap-3 mt-6">
          <button className="btn bg-white text-indigo-600 font-semibold py-3 w-full rounded-lg shadow-md hover:bg-gray-100 transition">
            Claim Reward
          </button>
          <div className="flex justify-between w-full px-2 text-white/70">
            <button className="btn btn-ghost btn-sm p-2 hover:bg-white/10 rounded-full">
              <FiTag />
            </button>
            <button className="btn btn-ghost btn-sm p-2 hover:bg-white/10 rounded-full">
              <FiHeart />
            </button>
            <button className="btn btn-ghost btn-sm p-2 hover:bg-white/10 rounded-full">
              <FiRefreshCw />
            </button>
            <button className="btn btn-ghost btn-sm p-2 hover:bg-white/10 rounded-full">
              <FiPlay />
            </button>
            <button className="btn btn-ghost btn-sm p-2 hover:bg-white/10 rounded-full">
              <FiMoreVertical />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactCard;