"use client";
import React, { useState } from "react";

const events = [
  {
    id: 1,
    title: "Tech Conference",
    location: "Delhi, India",
    date: "15 March 2024",
    image: "/events/event_1.png",
  },
  {
    id: 2,
    title: "Startup Meetup",
    location: "Bangalore, India",
    date: "20 May 2024",
    image: "/events/event_1.png",
  },
  {
    id: 3,
    title: "Design Workshop",
    location: "Mumbai, India",
    date: "10 July 2024",
    image: "/events/event_1.png",
  },
  {
    id: 4,
    title: "AI Summit",
    location: "Hyderabad, India",
    date: "5 September 2024",
    image: "/events/event_1.png",
  },
];

export default function Page() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="min-h-screen text-green-500 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Our Events
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {event.title}
              </h2>

              <p className="text-gray-600">📍 {event.location}</p>
              <p className="text-gray-500 text-sm mt-1">
                📅 {event.date}
              </p>

              <button
                onClick={() => setSelectedEvent(event)}
                className="mt-4 w-full cursor-pointer bg-green-600 text-white py-2 rounded-lg hover:bg-green-800 transition"
              >
                Open
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl overflow-hidden  max-w-6xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-2 right-2 cursor-pointer bg-black text-white px-3 py-1 rounded-full"
            >
              ✕
            </button>

            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-80 object-cover"
            />

            <div className="p-4 text-black">
              <h2 className="text-xl font-semibold">
                {selectedEvent.title}
              </h2>
              <p>📍 {selectedEvent.location}</p>
              <p>📅 {selectedEvent.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}