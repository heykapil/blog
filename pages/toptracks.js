import TopTracks from 'components/TopTracks'
export default function SpotifyTopTracks() {
  return (
    <div className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16">
    <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Top Tracks
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Curious what I'm currently jamming to? Here's my top tracks on Spotify
          updated daily.
        </p>
      <TopTracks />
      </div>
  );
}