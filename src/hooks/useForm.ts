import { useState } from "react";

export const useForm = <T>(initState: T) =>{
    const [formData, setFormData] = useState(initState);
    
    const handleOnChange = (target:any) => {
    setFormData({ ...formData, [target.id]: target.value });
    };

    const resetForm = () => {
        setFormData({...initState})
    }

    const validateString = (value:string) => {
        if(value.trim().length < 1){
          return false;
        }else{
            return true;
        }
      }
      
      const validatePercent = (value:Number) => {
        if ( value.toString() === "" || value < 0 || value > 100) {
          return false;
        }else{
          return true
        }
      }

    return {
        formData,
        handleOnChange,
        resetForm,
        validateString,
        validatePercent
    }
}