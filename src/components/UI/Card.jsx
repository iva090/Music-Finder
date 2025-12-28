function Card(props) {
  return (
    <div key={props.id} className="p-4 border border-gray-700 rounded shadow">
      <img
        src={props.image}
        alt={props.name}
        className="w-full aspect-square object-cover mb-2"
      />
      <h3 className="font-bold">{props.name}</h3>
      <p className="text-sm text-gray-400">{props.artist}</p>
    </div>
    
  );
}

export default Card;
