export default function Hero() {
    return (
      <div className="flex font-ibm flex-col justify-around w-full h-content sm:h-content-sm">
        <h1 className="my-28 sm:my-10 text-center select-none text-6xl sm:text-8.5xl leading-none tracking-tightest font-extrabold">
          <span
            data-content="Blog."
            className="relative block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-white before:animate-gradient-background-1"
          >
            <span className="px-2 text-transparent bg-clip-text bg-gradient-to-br from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1">
              Blog.
            </span>
          </span>
          <span
            data-content="Research."
            className="relative block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-white before:animate-gradient-background-2"
          >
            <span className="px-2 text-transparent bg-clip-text bg-gradient-to-br from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2">
              Research.
            </span>
          </span>
          <span
            data-content="Teaching."
            className="relative block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-white before:animate-gradient-background-3"
          >
            <span className="px-2 text-transparent bg-clip-text bg-gradient-to-br from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3">
              Teaching.
            </span>
          </span>
        </h1>
      </div>
    );
  }
  