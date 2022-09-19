import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
     name: "user", ///It is a Store Name 
     initialState: {
          name: "Shareef",
          email: "Shareef@Yahoo.com"
     },

     reducers: { //It us Reducer Which Include Action
          update: (state, action) => {  // It is Action in a Reducer
               state.name = action.payload.name;
               state.email = action.payload.email;
          }
     }

});
export const { update } = userSlice.actions; //Export "Update " Action to use in User Interface
export default userSlice.reducer;    //Export Reducer to be used in Store
