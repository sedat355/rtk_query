const Photo = ({photo}) => {
  return (
    <div 
      className="flex items-center justify-center border border-slate-400 w-24 h-32 bg-slate-200 hover:opacity-50">
    
      {photo.name}
     
    </div>
  )
}

export default Photo