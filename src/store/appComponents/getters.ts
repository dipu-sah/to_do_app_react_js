import { AllComponentStates } from "../../@types/redux/states";
import { useSelector } from "react-redux";
import { storeStateType } from "../index";

function getSpecificKeyFromTaskState<T>(
  key: keyof AllComponentStates,
  currentState: storeStateType,
  defaultValue: T
): T {
  const temp: Record<string, any> = currentState["allComponents"];
  return temp[key] || defaultValue;
}

export const AllComponentGetters = {
  getIsShowingLoginComponent() {
    return useSelector<storeStateType, boolean>((t) =>
      getSpecificKeyFromTaskState<boolean>("isShowingLoginComponents", t, false)
    );
  },
};
