import { DocumentIcon } from "../icons/DocumentIcon";
import { ShareIcon } from "../icons/shareIcon";
import { TrashIcon } from "../icons/trashIcon";
import {useEffect } from 'react'

interface CardProps{
    title:string;
    link?:string;
    type:"twitter" | "youtube"
    onClose?: ()=> void
}

// helper to convert any YouTube link into a clean embed URL
function getYoutubeEmbedUrl(url: string): string {
  const videoIdMatch = url.match(/(?:v=|\.be\/)([^&\n?#]+)/);
  return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : url;
}


export function Card({ title, link, type}:CardProps){

    useEffect(() => {
        if (type === "twitter") {
        // Trigger Twitter script to render the tweet
        if ((window as any).twttr?.widgets) {
            (window as any).twttr.widgets.load();
        }
        }
    }, [type, link]);

    return  <div className="p-4 bg-white rounded-md shadow-md border border-gray-200 max-w-72 ">
        <div className="flex justify-between">
                <div className="flex justify-between items-center text-md">
                    <div className="pr-2 text-gray-500">
                      <DocumentIcon/>
                    </div>
                    {title}
                </div>

                <div className="flex justify-between text-gray-500 items-center">
                    <div className="pr-4">
                        <a href={link} target="_blank">
                        <ShareIcon/>
                        </a>
                    </div>
                    <TrashIcon/>
                </div>

        </div>
        <div className="pt-6">
         
         {type==="youtube" && link && <iframe className="w-full" src={getYoutubeEmbedUrl(link)}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
         
         {type=="twitter" && <div className="flex justify-center max-h-[300px] overflow-y-auto"><blockquote className="twitter-tweet w-full"> <a href={link}></a>  </blockquote></div>}
        {/* <blockquote class="twitter-tweet"><p lang="en" dir="ltr">A landmark partnership 🤝<a href="https://twitter.com/GoogleIndia?ref_src=twsrc%5Etfw">@GoogleIndia</a> becomes a major, women&#39;s-only <a href="https://twitter.com/ICC?ref_src=twsrc%5Etfw">@ICC</a> partner ahead of the <a href="https://twitter.com/cricketworldcup?ref_src=twsrc%5Etfw">@cricketworldcup</a> <a href="https://twitter.com/hashtag/CWC25?src=hash&amp;ref_src=twsrc%5Etfw">#CWC25</a>.<br><br>All the details ➡️ <a href="https://t.co/PsPxIhfAQQ">https://t.co/PsPxIhfAQQ</a> <a href="https://t.co/rEud2hbTK1">pic.twitter.com/rEud2hbTK1</a></p>&mdash; ICC (@ICC) <a href="https://twitter.com/ICC/status/1961323994985959426?ref_src=twsrc%5Etfw">August 29, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
        </div>

    </div>
}