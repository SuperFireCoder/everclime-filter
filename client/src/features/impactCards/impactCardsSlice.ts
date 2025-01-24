import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface ImpactCard {
  card_id: string;
  brand: string;
  location: string;
  sponsor: string;
  reward: string;
}

interface ImpactCardsState {
  cards: ImpactCard[];
  loading: boolean;
  error: string | null;
  filters: {
    location: string;
    sponsor: string;
    brand: string;
  };
}

const initialState: ImpactCardsState = {
  cards: [],
  loading: false,
  error: null,
  filters: {
    location: '',
    sponsor: '',
    brand: ''
  }
};

export const fetchImpactCards = createAsyncThunk(
  'impactCards/fetchImpactCards',
  async (filters: Partial<ImpactCardsState['filters']>) => {
    const queryParams = new URLSearchParams(
      Object.entries(filters).filter(([_, value]) => value !== '')
    );
    
    try {
      const response = await fetch(`/api/v1/impact_cards?${queryParams}`);
      if (!response.ok) throw new Error('Failed to fetch impact cards');
      return await response.json();
    } catch (error) {
      toast.error('Failed to load impact cards');
      throw error;
    }
  }
);

const impactCardsSlice = createSlice({
  name: 'impactCards',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImpactCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImpactCards.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload;
      })
      .addCase(fetchImpactCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch cards';
      });
  }
});

export const { setFilters } = impactCardsSlice.actions;
export default impactCardsSlice.reducer; 