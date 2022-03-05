import {
  FaPlay, FaPause
} from 'react-icons/fa';
import { useState } from "react";

export default function Player( {
  props
}) {
const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="rounded-full bg-cyan-400 grid place-items-center p-4">
{ !isPlaying ?
    <FaPlay onClick={() => setIsPlaying(true)} className=" text-white w-9 h-9 ml-1 mr-[-.25rem]"/>
    :
    <FaPause onClick={() => setIsPlaying(false)} className="text-white w-9 h-9"/>
}
    </div>
  )
}