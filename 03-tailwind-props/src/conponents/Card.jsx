const Card = ({
  imageUrl,
  description,
  username = "Raj",
  role = "FE",
  city = "Jaipur",
}) => {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 md:pl-5 md:items-center dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={imageUrl}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">{description}</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {role}, {city}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
