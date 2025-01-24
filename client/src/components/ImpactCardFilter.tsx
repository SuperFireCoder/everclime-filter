import React from 'react';
import { FiMapPin, FiUsers, FiTag } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setFilters, fetchImpactCards } from '../features/impactCards/impactCardsSlice';

const ImpactCardFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cards, filters } = useAppSelector((state) => state.impactCards);

  const locations = [...new Set(cards.map((card) => card.location))];
  const sponsors = [...new Set(cards.map((card) => card.sponsor))];
  const brands = [...new Set(cards.map((card) => card.brand))];

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    const newFilters = { ...filters, [name]: value };
    dispatch(setFilters(newFilters));
    dispatch(fetchImpactCards(newFilters));
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-6 bg-base-200 rounded-lg shadow-md animate-fade-in">
      <div className="form-control w-full md:w-1/3">
        <label className="label">
          <span className="label-text flex items-center gap-2">
            <FiMapPin /> Location
          </span>
        </label>
        <select
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          className="select select-bordered w-full"
        >
          <option value="">All Locations</option>
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>

      <div className="form-control w-full md:w-1/3">
        <label className="label">
          <span className="label-text flex items-center gap-2">
            <FiUsers /> Sponsor
          </span>
        </label>
        <select
          name="sponsor"
          value={filters.sponsor}
          onChange={handleFilterChange}
          className="select select-bordered w-full"
        >
          <option value="">All Sponsors</option>
          {sponsors.map(sponsor => (
            <option key={sponsor} value={sponsor}>{sponsor}</option>
          ))}
        </select>
      </div>

      <div className="form-control w-full md:w-1/3">
        <label className="label">
          <span className="label-text flex items-center gap-2">
            <FiTag /> Brand
          </span>
        </label>
        <select
          name="brand"
          value={filters.brand}
          onChange={handleFilterChange}
          className="select select-bordered w-full"
        >
          <option value="">All Brands</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ImpactCardFilter; 