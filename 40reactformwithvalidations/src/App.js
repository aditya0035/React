import React,{Component} from 'react';
import Input from './UI/Input'
class App extends Component{
        constructor(){
          super();
          this.state={"CommentForm":{
           Email: {
            elementType:"Text",
            elementConfig:{
              //properties for html fields
              type:"text",
              placeholder:"Please provide Email"
            },
            value:"",
            validations:{"Required":true},
            isValid:true,
            isTouched:false
          },
          Password:{
            elementType:"Text",
            elementConfig:{
              //properties for html fields
              type:"text",
              placeholder:"Please provide password"
            },
            value:"",
            validations:[],
            isValid:true,
            isTouched:false
          },
          Comments:{
            elementType:"TextArea",
            elementConfig:{
              //properties for html fields
              type:"TextArea",
              placeholder:"Please provide comments"
            },
            value:"",
            validations:[],
            isValid:true,
            isTouched:false
          }, 
          Gender:{
            elementType:"DropDown",
            elementConfig:{
              options:[
                {"value":"Male",key:"Male"},
                {"value":"Female",key:"Female"}
              ]
            },
            value:"",
            validations:[],
            isValid:true,
            isTouched:false
          }
        },
        FormData:[],
        isValid:false,
      }
    }
    CheckFieldValidations=(validations,value)=>{
      for (const validator in validations) {
        switch(validator){
          case "Required":
            if(!value && value.trim()==='')
            {
              return false;
            }
            return true;
          default:
            return true;
        }
      }
    }
    ContactFormInputOnChangeHandler=(fieldName,event)=>{
      let CommentForm={...this.state.CommentForm};
      let fieldProperties={...CommentForm[fieldName]};
      let value=event.target.value
      fieldProperties["value"]=value;
      fieldProperties["isValid"]=this.CheckFieldValidations(fieldProperties.validations,value)
      CommentForm[fieldName]=fieldProperties;
      if(!fieldProperties["isTouched"]){
        fieldProperties["isTouched"]=true;
      }
      this.setState({CommentForm:CommentForm},this.IsCommentFormValid);
    }
    IsCommentFormValid(){
      let CommentForm={...this.state.CommentForm};
      let isValid=true;
      for (const field in CommentForm) {
        let fieldProperties={...CommentForm[field]};
          if(!fieldProperties.isValid)
          {
            isValid=false;
          }
      }
      this.setState({"isValid":isValid});
    }
    ContactFormSubmitHandler=(event)=>{
      event.preventDefault();
      let formData=[]
      for (const field in this.state.CommentForm) {
        let fieldValue=this.state.CommentForm[field]
        formData.push({
          [field]:fieldValue,
        });
      }
      this.setState({FormData:formData},this.ResetFormFieldValue);
    }
    ResetFormFieldValue=()=>{
      let commentForm={...this.state.CommentForm};
      for (const field in commentForm) {
        commentForm[field].value=''
      }
      this.setState({"CommentForm":commentForm});
    }
    render() {
          let formElements=[];
          for (const field in this.state.CommentForm) {
            let fieldProps=this.state.CommentForm[field]
            formElements.push({
              elementType:fieldProps.elementType,
              label:field,
              config:fieldProps.elementConfig,
              value:fieldProps.value,
              onChange:this.ContactFormInputOnChangeHandler.bind(this,field)
            });
          }
          return (
            <div>
            <form onSubmit={this.ContactFormSubmitHandler}>
            {formElements.map(element=>{
              return (
                <Input key={element.label} elementType={element.elementType} elementConfig={element.config} value={element.value} label={element.label} onChange={element.onChange}></Input>)
            })}
            <br/>
            <button type="submit" disabled={this.state.isValid?false:true}>Submit</button>
            <button type="reset" onClick={()=>{this.ResetFormFieldValue()}}>Reset</button>
            </form>
            </div>
          )
        }
}
export default App;
