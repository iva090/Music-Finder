import AudioPlayer from "../Audio";

function Card(props) {
  return (
    <div key={props.id} className="p-4 border border-gray-700 rounded shadow-">
      <img
        src={props.image}
        alt={props.name}
        className="w-full aspect-square object-cover mb-2 border-none rounded-lg"
      />
      <a className="font-bold text-xl">{props.name}</a>
      <p className="text-sm text-gray-400">{props.artist}</p>
      <AudioPlayer src={props.audio}/>
    </div>

  );
}

export default Card;
