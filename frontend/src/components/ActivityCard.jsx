import React from "react";
import { MapPin, Clock} from "lucide-react";


const ActivityCard = ({activity}) => {
  return (
    <div
      key={activity.id}
      className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-64">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span
            className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full
                    text-sm font-medium"
          >
            {activity.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-4">
          <h3
            className="text-md font-bold text-gray-900 group-hover:text-blue-600 
                    transition-colors"
          >
            {activity.title}
          </h3>
        </div>

        <div className="pb-2 text-sm flex items-center gap-2 ">
          <div className="flex items-center gap-2 text-gray-500">
            <MapPin className="h-4 w-4" />
            <span>{activity.destination}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{activity.duration}</span>
          </div>
        </div>

        <div className=" flex justify-between items-center  py-2 mt-auto  border-t">
          <h3 className="text-center text-sm text-orange-600">
            From <span className="font-bold text-lg">${activity.price}</span>
          </h3>
          <a href={`/daytour/`}>
            <button className="mt-auto px-3 py-2 bg-[#003366] text-white rounded text-sm">
              View Details
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
