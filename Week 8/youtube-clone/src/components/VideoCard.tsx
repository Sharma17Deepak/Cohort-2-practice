export default function VideoCard(props: any) {
  return (
    <div>
      <img src={props.thumbImg} className="rounded-xl w-200 h-100" />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img className={"rounded-full w-12 h-12"} src={props.image}></img>
        </div>
        <div className="col-span-11">
          <div>{props.title}</div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.author}
          </div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
