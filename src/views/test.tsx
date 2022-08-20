import {AppInputSwitcher} from "../components/UI/AppInputSwitcher/AppInputSwitcher";

export function Test(){
    return <>

   <div className={"w-full"}>
       <AppInputSwitcher name={""}  type={"select"} options={["ABC","DEF"]} variant={"outlined"} label={"HELLO"}/>
   </div>
    </>
}