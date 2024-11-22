import React from 'react'

function Reels() {
  return (
    <div className="contiener flex justify-around flex-wrap">
      <div className="flex flex-col w-[300px] gap-3 items-center p-4 bg-slate-400">
        <iframe
          width="260"
          height="215"
          src="https://www.youtube.com/embed/EMDhqk8VHlE?si=70rsF8buKcrOEWX8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <h2 className="font-bold">Lorem ipsum dolor sit amet.</h2>
      </div>
      <div className="flex flex-col w-[300px] gap-3 items-center p-4 bg-slate-400">
        <iframe
          width="260"
          height="215"
          src="https://www.youtube.com/embed/dSw3xRwPIIk?si=DVW4FS0CfCQyA18l"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <h2 className="font-bold">Lorem ipsum dolor sit amet.</h2>
      </div>
    </div>
  );
}

export default Reels