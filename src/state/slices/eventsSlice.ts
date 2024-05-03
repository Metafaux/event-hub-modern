import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { CmsEventItem } from '../../types/CmsWordpressTypes';

const initialState = { value: [] as CmsEventItem[] };

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<CmsEventItem[]>) => {
      state.value = action.payload;
    }
  }
});

export const { setEvents } = eventsSlice.actions;
export const selectEvents = (state: RootState) => state.events.value;
export default eventsSlice.reducer;
