import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import type { User } from "@/types";

const initialState: User = {
  id: 0,
  username: 'johndanieldel',
  firstName: 'John Daniel',
  lastName: 'Del Monte',
  imageUrl: 'https://scontent.fmnl16-1.fna.fbcdn.net/v/t1.6435-9/81710879_2493312150907255_6445336796950691840_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEBVMYOhIDPGLpk_G94Nq6-iz8rnrCv71aLPyuesK_vVl_K0n6gB0jqQnHGvHUal68ukR1zT8MP5A2iG_KSDzvh&_nc_ohc=_bgXw4DSwRsQ7kNvgHqnwue&_nc_ht=scontent.fmnl16-1.fna&oh=00_AYC7_AKZ4dZ9cktzFlVSrP8wreNISv_vFwb-M99IK8uL9Q&oe=66AA65B2',
  followers: 2312323
}

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state = action.payload;
    }
  }
});

export default currentUserSlice.reducer;
export const { setCurrentUser } = currentUserSlice.actions;