import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../../firebase';

const initialState = {
	user: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		setLoggedIn(state) {
			const userData = auth.currentUser;

			state.user = {
				displayName: userData.displayName,
				email: userData.email,
				photoURL: userData.photoURL,
				emailVerified: userData.emailVerified,
        createdAt: userData.metadata.creationTime,
			};
		},
		setLoggedOut(state) {
			state.user = null;
		},
    setEmail(state, action){
      state.email = action.payload;
    },
    setFullName(state, action) {
      state.fullName = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    }
	},
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
