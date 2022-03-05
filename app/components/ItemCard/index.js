import Player from "./Player";
import Info from "./Info";
import Tags from "./Tags";
import {
  AiFillHeart
} from 'react-icons/ai';

export default function ItemCard( {
  props
}) {

  return (
    <>
    <div className="grid place-items-center grid-cols-[auto_auto] gap-6 shadow-sm bg-white rounded-md py-3 px-3">
    <Player />
    <Info/>
    <div className="col-span-2 place-self-start space-x-2">
    <Tags/>
    </div>
      
    <AiFillHeart className="w-8 h-8 text-slate-300"/>
    <a className="place-self-end text-white px-3 py-1.5 bg-cyan-400 rounded-md">Download</a>
  
    </div>
    
    </>
  )
}