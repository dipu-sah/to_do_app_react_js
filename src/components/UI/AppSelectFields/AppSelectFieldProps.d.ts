import {SelectProps} from "@mui/material";

export interface AppSelectFieldProps extends SelectProps{
    name:string
    options?:string[]
}