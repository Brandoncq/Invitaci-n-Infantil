import {
	//  PayloadAction,
	createSlice,
} from "@reduxjs/toolkit";

interface QrState {
	loading: boolean;
}

const initialState: QrState = {
	loading: false,
};

const codeqrSlice = createSlice({
	name: "codigoqr",
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

// export const {
// 	newMessageReceived,
// 	messageUpdatedRead,
// 	tempMessageReceived,
// 	deleteHistory,
// 	resetUnreadMessages,
// 	deleteSelectedChat,
// 	setSelectedChat,
// } = chatSlice.actions;
export default codeqrSlice.reducer;
