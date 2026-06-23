import { useRouter } from "next/router";
import type { Video } from "../videos";
import { Line } from "./Line";

export const VideoCard = ({ video }: { video: Video }) => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        router.push(`/video/${video.id}`);
      }}
    >
      <div className="rounded-xl overflow-hidden">
        <div>
          <img src={video.thumbnail} alt={"thumbnail image"} />
          <Line progress={20} />
        </div>
      </div>
      <div className="flex">
        <div className="col-span-1 pt-4">
          <img
            className={"rounded-full w-16 h-12 object-cover"}
            src={video.channel}
            alt={"channel image"}
          />
        </div>
        <div className="p-4">
          <div className={"text-white-800 text-sm font-medium"}>
            {video.title}
          </div>
          <div className={"text-gray-400 text-sm font-normal		"}>
            {video.description}
          </div>
          <div className="flex">
            <div className={"text-gray-400 text-sm font-normal	pr-2	"}>
              {video.viewCount}
            </div>
            <div className={"text-gray-400 text-sm font-normal		"}>
              • {video.timestamp}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
