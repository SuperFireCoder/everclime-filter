import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchImpactCards } from '../features/impactCards/impactCardsSlice';
import ImpactCardFilter from '../components/ImpactCardFilter';
import ImpactCard from '../components/ImpactCard';
import { FiLoader } from 'react-icons/fi';

const ImpactCardsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cards, loading, error } = useAppSelector((state) => state.impactCards);

  useEffect(() => {
    dispatch(fetchImpactCards({}));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <FiLoader className="animate-spin text-4xl text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error">
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Impact Cards
      </h1>
      
      <ImpactCardFilter />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {cards.map(card => (
          <ImpactCard key={card.card_id} {...card} />
        ))}
      </div>

      {cards.length === 0 && (
        <div className="text-center py-12 text-base-content/70">
          No impact cards found with the selected filters.
        </div>
      )}
    </div>
  );
};

export default ImpactCardsPage; 