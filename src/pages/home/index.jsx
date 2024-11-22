import React from 'react'

function Home() {
  return (
    <div className="contiener flex justify-around flex-wrap">
      <div className="flex flex-col w-[300px] gap-3 items-center p-4 bg-slate-400">
        <iframe
          width="260"
          height="215"
          src="https://www.youtube.com/embed/gb7gMluAeao?si=_s7SaiFKCMwHXr7o"
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
          src="https://www.youtube.com/embed/9kqql88J7rY?si=8V8dnBFbXFjZ_feD"
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

export default Home