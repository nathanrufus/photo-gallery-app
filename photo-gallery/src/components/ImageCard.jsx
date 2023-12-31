import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src={image.webformatURL}
        alt=""
        loading="lazy"
        className="w-full h-64 object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <strong>Downloads:</strong>
          {image.downloads}
        </ul>
        <ul>
          <strong>Views:</strong>
          {image.views}
        </ul>
        <ul>
          <strong>Likes:</strong>
          {image.likes}
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2"
            >
              #{tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCard;
