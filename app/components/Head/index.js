

export default function Head( {
  props
}) {
  return (
    <div className="p-5 md:grid md:place-items-center bg-slate-200 bg-[linear-gradient(45deg,_#eff6ff_0%,_#e2e8f0_80%,_#fae8ff_100%)]">
    <div className="md:text-center md:max-w-prose">
     <h3 className="text-2xl font-bold text-cyan-500">Shreya Ghosal Ringtone</h3>
     <p className="text-xl text-cyan-500">{props.datetime}</p>
     <p className="text-slate-500">Here Are the Best Shreya Ghosal Ringtone to Download. </p>
     
     </div>
    
    </div>
  )
}