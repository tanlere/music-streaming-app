import { Error, Loader, SongCard } from '../components'
import { genres } from '../assets/constants'
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
    const { data, isFetching, error } = useGetTopChartsQuery();
    const genreTitle = 'Pop'

    console.log(data);

    return (
// flex-col sets all items within it in a vertical column
// jesus christ tailwind is so goated
        <div className= "flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
                
                <select
                    onChange={() => {}}
                    value=""
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                >
                {/* shows a list of the created/existing genres by calling back the "genre" variable. it then creates an option out of each key to identify which genre is being listed, later listing just the title alone */}
                {// is "key={genre.value} not redundant?"
                }
                   {genres.map((genre => <option key={genre.value} value={genre.value}>{genre.title}</option>))}
                </select>
            </div>
            {// creates a centered div of 10 song cards using a key to identify each and song to ID each song. i=the number in the array it shows under (?)
}
            <div className= "flex flex-wrap sm:justify-start justify-center gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
                     <SongCard
                     key={song.key}
                     song={song}
                     i={i}
                 />
                ))}
            </div>
        </div>
    );
};
export default Discover;
