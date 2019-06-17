import React from 'react'
// import inputcss from './Input.module.css'
const Input=(props)=>{
    let InputElement=null;
    switch (props.elementType) {
        case "Text":
            InputElement=<input type="text" {...props.elementConfig} value={props.value} onChange={props.onChange}/>
            break;
        case "TextArea":
            InputElement=<textarea {...props.elementConfig} value={props.value} onChange={props.onChange}></textarea>
            break;
        case "DropDown":
            let options=props.elementConfig.options.map(item=>{
                return(
                    <option key={item.key} value={item.key}>{item.value}</option>
                )
            });
            InputElement=<select onChange={props.onChange} {...props.elementConfig} value={props.value}>{options}</select>
            break;
        default:
            InputElement=<input type="text" {...props.elementConfig} value={props.value} onChange={props.onChange}/>
            break;
    }
    return (
    <div>
    <div><label>{props.label}</label></div>
    <div>{InputElement}</div>
    </div>
    )
}
export default Input