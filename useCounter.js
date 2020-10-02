import { useEffect, useState } from "react"

export const useCounter = ( initialState = 10, factor = 1 ) => {

    const [state, setState] = useState(initialState);


    const increment = () => {

        setState( state + factor );

    }

    const decrement = () => {

        setState( state - factor );

    }

    const reset = () => {

        setState( initialState );

    }


    return {
        state,
        increment,
        decrement,
        reset,
    }


}
