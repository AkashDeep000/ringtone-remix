import { useReducer } from "react";
import { context } from "./Context";


const reducer = (state, action) => {
  switch (action) {
    case 'PLAY':
      return {
        ...state,
        isPlaying: true,
      }
      break;
    
    default:
      return state;
  }
}

export default function Provider({ children }) {
  
 const [state, dispatch] = useReducer(reducer)

  return (
    <AudioContext.Provider value={[state, dispatch]}>
        {children}
    </AudioContext.Provider>
  );
}