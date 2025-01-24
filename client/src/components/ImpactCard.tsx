import React from 'react';
import { FiMapPin, FiAward, FiTag } from 'react-icons/fi';

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
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
      <div className="card-body">
        <h2 className="card-title text-primary">
          <FiTag className="inline-block" /> {brand}
        </h2>
        
        <div className="flex items-center gap-2 text-sm">
          <FiMapPin className="text-secondary" />
          <span>{location}</span>
        </div>
        
        <p className="text-base-content/70">
          Sponsored by: {sponsor}
        </p>
        
        <div className="card-actions justify-end mt-4">
          <div className="flex items-center gap-2 badge badge-primary badge-lg">
            <FiAward />
            {reward}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactCard; 