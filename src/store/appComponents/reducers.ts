import { AllComponentStates } from "../../@types/redux/states";
import { PayloadAction } from "@reduxjs/toolkit";

export const taskReducers = {
  setIsShowingLoginComponent(
    current: AllComponentStates,
    actionData: PayloadAction<AllComponentStates["isShowingLoginComponents"]>
  ) {
    current.isShowingLoginComponents = actionData.payload;
  },
};
