import VideoCard from "./VideoCard";

const Videos = [
  {
    title: "30 days coding challenge | Figuring Out | Raj shamani clips",
    image: "image.jpg",
    thumbImg: "thumb.jpg",
    author: "Raj shamani",
    views: "840k",
    timestamp: "5 days ago",
  },
  {
    title: "30 days coding challenge | Figuring Out | Raj shamani clips",
    image: "image.jpg",
    thumbImg: "thumb.jpg",
    author: "Raj shamani",
    views: "840k",
    timestamp: "5 days ago",
  },
  {
    title: "30 days coding challenge | Figuring Out | Raj shamani clips",
    image: "image.jpg",
    thumbImg: "thumb.jpg",
    author: "Raj shamani",
    views: "840k",
    timestamp: "5 days ago",
  },
  {
    title: "30 days coding challenge | Figuring Out | Raj shamani clips",
    image: "image.jpg",
    thumbImg: "thumb.jpg",
    author: "Raj shamani",
    views: "840k",
    timestamp: "5 days ago",
  },
  {
    title: "30 days coding challenge | Figuring Out | Raj shamani clips",
    image: "image.jpg",
    thumbImg: "thumb.jpg",
    author: "Raj shamani",
    views: "840k",
    timestamp: "5 days ago",
  },
  {
    title: "30 days coding challenge | Figuring Out | Raj shamani clips",
    image: "image.jpg",
    thumbImg: "thumb.jpg",
    author: "Raj shamani",
    views: "840k",
    timestamp: "5 days ago",
  },
];

export default function VideoGrid() {
  return (
    <>
      <div className="grid grid-cols-4">
        {Videos.map((video) => <>
          <VideoCard
            title={video.title}
            image={video.image}
            thumbImg={video.thumbImg}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          ></VideoCard>;
        </>)}
      </div>
    </>
  );
}
