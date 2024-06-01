import clips from "@/app/lib/place-holder";

export default function Grid() {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
      {clips.map((clip) => (
        <div key={clip.name} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={clip.cover}
                  alt={clip.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <span aria-hidden="true" className="absolute inset-0" />
                {clip.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{clip.tips}</p>
            </div>
          </div>
          <button>open</button>
        </div>
      ))}
    </div>
  );
}
