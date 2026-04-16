const Icon59 = ({ images = ["https://picsum.photos/seed/picsum/200/300"] }) => {
  return (
    <div className="w-full bg-gray-100">
      {/* IMAGES */}
      <div className="mb-5 mt-5">
        <div className="flex items-center gap-3">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Icon59;
