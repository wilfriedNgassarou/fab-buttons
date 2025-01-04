import clsx from "clsx"
import { useState } from "react"
import { SmileSVG } from "./components/smile-svg"
import { ChatSVG } from "./components/chat-svg"
import { BookmarkSVG } from "./components/bookmark-svg"
import { HeartSVG } from "./components/heart-svg"
import { Credits } from "./components/credits"

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const icons = [ <SmileSVG />, <ChatSVG />, <BookmarkSVG />, <HeartSVG /> ]

  return (
    <section className="h-dvh w-full flex justify-center items-center">
      <Credits />
      <section className="w-80 h-20 overflow-hidden flex justify-between items-center relative">
        {icons.map((item, index, array) => {
          const lastIndex = array.length - 1 ;
          const openDelay = index * 0.15 ;
          const closeDelay = (lastIndex - index) * 0.1

          return (
            <div 
              key={index}
              style={{ transitionDelay: isOpen ? `${openDelay}s` : `${closeDelay}s` }}
              className={clsx(
                "w-14 h-14 overflow-hidden rounded-full flex justify-center items-center duration-200 ease-in-out",
                index == 0 && "bg-green-500",
                index == 1 && "bg-blue-500",
                index == 2 && "bg-yellow-400",
                index == 3 && "bg-red-500",
                !isOpen ? 'blur-[1px] scale-90 -rotate-[18deg]' : 'blur-none scale-100 rotate-0'
              )}
            >
              {item}
            </div>
          )
        })}
        {/* A fake element used to render 5 icons with a great gap between each  */}
        <div className="w-14 h-14 rounded-full" />

        {/*An element that hides the icons when state is closed */}
        <div
          className={clsx(
            "absolute left-0 w-full h-14 bg-white rounded-full duration-700 ease-in-out",
            // 264px = 320 (container width) - 56 (box width)
            isOpen ? 'translate-x-[264px]' : 'translate-x-0'
          )}
        />
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            "w-14 h-14 absolute rounded-full bg-gray-400 flex items-center justify-center duration-700 ease-in-out",
            isOpen ? 'translate-x-[264px] rotate-45' : 'translate-x-0 rotate-0'
          )}
        >
          <div className="w-7 h-1 rounded-full bg-white" />
          <div className="absolute rotate-90 w-7 h-1 rounded-full bg-white" />
        </button>
      </section>
    </section>
  )
}

export default App
