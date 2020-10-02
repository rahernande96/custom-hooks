import { useState } from "react";

export const useForm = ( form = {} ) => {
    
    const [state, setState] = useState(form);

    const reset = () => {

        setState(form);

    }

    const handleInputChange = ({ target }) => {

        setState({ 
            ...state,
            [target.name]:target.value
             
        });

    }

    return [state, handleInputChange, reset];


}
