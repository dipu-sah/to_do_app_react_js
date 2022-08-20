import {FormControlLabel, Radio, RadioGroup, RadioGroupProps, RadioProps} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {iFromOptions} from "../../../@types/formFields";


export function AppRadioButton({variant = "standard", options=[], value,...props}: RadioProps & {
    variant?: "standard" | "material",
    options?:iFromOptions[]
}) {
    const {control} = useForm();
    return (<Controller
        control={control}
        name={props.name || ""}
        render={() => <RadioGroup value={value} onChange={(e)=>{
            console.log(e)}
        } {...props as RadioGroupProps}>
            {options.map(({value,label}:iFromOptions,index)=>{
                return <FormControlLabel value={value} control={<Radio />} label={label} key={index}/>
            })}
        </RadioGroup>}
    />)
}