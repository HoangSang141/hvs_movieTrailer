import iconRating from "../assets/rating.png";
import iconRatingHalf from "../assets/rating-half.png";
import imgTemp from "../assets/temp-4.png";
import iconPlay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="w-full h-[600px] bg-Avatar bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[50%] pl-10">
          <p className="text-white bg-gradient-to-r from-red-600 to-red-300 text-md py-2 px-4 cursor-pointer">
            TV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-[40px] font-bold">Avatar</h2>
            <div className="flex items-center space-x-3">
              <img src={iconRating} alt="rating" className="w-8 h-8" />
              <img src={iconRating} alt="rating" className="w-8 h-8" />
              <img src={iconRating} alt="rating" className="w-8 h-8" />
              <img src={iconRating} alt="rating" className="w-8 h-8" />
              <img src={iconRatingHalf} alt="ratingHalf" className="w-8 h-8" />
            </div>
            <p className="text-white">
              Avatar is the story of the hero reluctantly Jake Sully - a
              former Marine Corps officer was paralyzed from the waist. Twin
              brother he was selected to participate in the program gene
              implanted with alien Navi to create a new species can breathe air
              at the planet Pandora. This new race called Avatar. After he
              killed Jake, Jake was chosen to replace his brother and became an
              Avatar, Jake has the task to learn and study the planet Pandora.
              The information he collected very valuable for the campaign to
              invade this second green planet of humans...
            </p>
            <div className="flex items-center space-x-4">
              <button className="p-3 text-black bg-white font-bold text-sm w-[80px]">
                Chi tiết
              </button>
              <button className="p-3 text-white bg-red-600 font-bold text-sm">
                Xem phim
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center ">
          <div className="w-[300px] h-[400px] relative group cursor-pointer">
            <img
              src={imgTemp}
              alt="temp"
              className="w-full h-full object-cover"
            />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img src={iconPlay} alt="iconPlay" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
