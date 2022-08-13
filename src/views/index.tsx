import React from "react";
import {Button} from "@mui/material";

function HomePageComponent(props: any,ref:React.LegacyRef<HTMLHeadingElement>){
    return <div>
        <h1 ref={ref} className="text-3xl font-bold underline">
        </h1>
        <Button>HELLO</Button>
    </div>
}
export const HomePage=React.forwardRef(HomePageComponent);