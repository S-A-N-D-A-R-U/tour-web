import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";



 const selectedTour = [
    {
      id: "1",
      info: {
        title: "Sri Lanka & Maldives Tour Itinerary",
        Destinations:"Sri Lanka (Habarana, Kandy, Nuwara Eliya, Ella, Yala, Weligama, Negombo) & Maldives",
        des: "Embark on an unforgettable journey through the breathtaking landscapes, rich heritage, and serene beaches of Sri Lanka and the Maldives. Begin your adventure in Sri Lanka, where ancient cultural wonders, lush jungles, scenic hill country, and thrilling wildlife safaris await. Conclude your journey with the ultimate tropical escape in the Maldives, enjoying pristine white-sand beaches, turquoise waters, and luxurious relaxation.",
        day: "13 Days / 12 Nights",
        price: "$ 250.00",
      },
      Highlights: [
        "Marvel at UNESCO World Heritage sites such as Dambulla Cave Temple, Sigiriya Rock Fortress, and Galle Fort",
        "Immerse yourself in local culture with village tours, cooking demonstrations, and traditional dance shows.",
        "Experience thrilling wildlife safaris in Minneriya, Kaudulla, and Yala National Parks.",
        "Enjoy scenic hikes to Little Adam’s Peak and Pidurangala Rock with stunning panoramic views.",
        "Explore iconic landmarks like the Nine Arches Bridge and Rawana Waterfall in Ella.",
        "Relax on powdery white beaches and bask in crystal-clear waters.",
        "Indulge in optional activities such as snorkeling, diving, and sunset cruises.",
        "Discover the tranquility of island life and unwind at a luxurious beach resort.",
      ],
      Includes: {
        include: [
          "Hotel pickup from the Yala area, including Kirinda, Palatupana, Tissamaharama, Weerawila, and Kataragama",
          "Transportation in a Safari Jeep (maximum of 6 passengers per jeep)",
          "Full-day or half-day tour (depending on option selected)",
          "Picnic lunch (if option selected)",
        ],
        notInclude: [
          "Park entrance fee (40 USD Per person)",
          "Snacks and drinks",
        ],
      },
      itinerary: [
        {
          day: 1,
          route:"Airport – Habarana",
          title: "Overnight stay in Golden Star Beach Hotel, Negombo",
          image: "/popular6.jpg",
          activities:[
            "Pick up from Bandaranaike International Airport (Colombo) and transfer to Habarana.",
            "En route, visit the **Dambulla Cave Temple**, a UNESCO World Heritage site renowned for its stunning Buddha statues and ancient frescoes.",
            "Evening climb **Pidurangala Rock** for breathtaking panoramic views of the Sigiriya Rock Fortress and surrounding landscapes.",
            "**Optional**: Enjoy an elephant ride through the lush Habarana jungles.",
          ],
          overnightStay: "Habarana",
        },
        {
          day: 2,
          route:"Habarana – Kandy",
          title: "Overnight stay in Golden Star Beach Hotel, Negombo",
          image: "/popular6.jpg",
          activities:[
            "Morning climb Sigiriya Rock Fortress, a UNESCO World Heritage site, to explore ancient frescoes, the mirror wall, and summit ruins.",
            "Experience a traditional village tour featuring an authentic Sri Lankan cooking demonstration and tasting.",
            "**Optional**: Participate in lake fishing with locals using traditional methods.",
            "Embark on an elephant jeep safari in Minneriya or Kaudulla National Park to observe wildlife in their natural habitat.",
            "Visit the Matale Herbal Village to learn about Ayurveda and Sri Lankas herbal heritage.",
            "Continue to Kandy for a city tour, including the Temple of the Tooth Relic and a stroll around Kandy Lake.",
            "End the day with a vibrant cultural dance show.",
          ],
          overnightStay: "Kandy",
        },
        {
          day: 3,
          route:"Kandy – Kitulgala – Nuwara Eliya",
          title: "Overnight stay in Golden Star Beach Hotel, Negombo",
          image: "/popular6.jpg",
          activities:[
            "Morning visit to the Royal Botanical Gardens in Peradeniya.",
            "Head to Kitulgala for an adrenaline-pumping white-water rafting adventure.",
            "En route to Nuwara Eliya, stop at a tea plantation and factory to learn about tea production and sample fresh Ceylon tea.",
            ,
          ],
          overnightStay: "Nuwara Eliya",
        },
        {
          day: 4,
          route:"Nuwara Eliya – Ella",
          title: "Overnight stay in Golden Star Beach Hotel, Negombo",
          image: "/popular6.jpg",
          activities:[
            "Morning transfer to Ella.",
            "Visit the iconic Nine Arches Bridge for stunning photo opportunities.",
            "Hike to Little Adam’s Peak for a scenic trek with panoramic views.",
            "Explore the picturesque Rawana Waterfall.",
            "Evening stroll through Ella town, enjoying its charming atmosphere.",
          ],
          overnightStay: "Ella",
        },
        {
          day: 5,
          route:"Ella – Yala",
          title: "Overnight stay in Golden Star Beach Hotel, Negombo",
          image: "/popular6.jpg",
          activities:[
            "Optional: Morning revisit to Little Adam’s Peak for sunrise.",
            "Depart for Yala, passing through scenic countryside.",
          ],
          overnightStay: "Yala",
        },
        {
          day: 6,
          route:"Yala",
          title: "Overnight stay in Golden Star Beach Hotel, Negombo",
          image: "/popular6.jpg",
          activities:[
            "Early morning jeep safari in Yala National Park, famous for its leopard sightings and diverse wildlife.",
            "Evening visit to Kirinda Beach to enjoy serene coastal views.",
          ],
          overnightStay: "Yala",
        },
        {
          day: 7,
          route:"Yala – Weligama",
          title: "Overnight stay in Golden Star Beach Hotel, Negombo",
          image: "/popular6.jpg",
          activities:[
            "After breakfast, transfer to Weligama.",
            "Engage in snorkeling or water activities.",
            "Optional: Enjoy fishing activities guided by locals.",
          ],
          overnightStay: "Weligama",
        },
        {
          day: 8,
          route:"Weligama – Negombo",
          title: "Overnight stay in Golden Star Beach Hotel, Negombo",
          image: "/popular6.jpg",
          activities:[
            "Early morning departure for whale watching in Mirissa.",
            "Visit Galle Fort, a UNESCO World Heritage site, for a guided tour.",
            "Evening transfer to Negombo.",
          ],
          overnightStay: "Negombo",
        },
        {
          day: 9,
          route:"Negombo – Maldives",
          title: "Overnight stay in Golden Star Beach Hotel, Negombo",
          image: "/popular6.jpg",
          activities:[
            "Morning flight to the Maldives.",
            "Upon arrival, transfer to your resort and relax on the beach.",
          ],
          overnightStay: "Maldives",
        },
        {
          day: 10,
          route:"Maldives",
          title: "Overnight stay in Golden Star Beach Hotel, Negombo",
          image: "/popular6.jpg",
          activities:[
            "Relax and unwind on pristine Maldivian beaches.",
            "Optional: Snorkeling, diving, sunset cruises, and island hopping.",
          ],
          overnightStay: "Maldives",
        },
        {
          day: 11,
          route:"End of Tour",
          title: "Overnight stay in Golden Star Beach Hotel, Negombo",
          image: "/popular6.jpg",
          activities:[
            "Depart from the Maldives with unforgettable memories of your Sri Lanka and Maldives adventure.",
          ],
          overnightStay: "Maldives",
        },
      ],
    }
];

const PlanForm = ({  }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tourId: selectedTour.id,
      tourName: selectedTour.id,
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage(null);
    try {
      const response = await axios.post("/api/plan-tour", data);
      if (response.status === 200) {
        setMessage("Your booking request has been submitted successfully! We'll contact you shortly.");
      } else {
        setMessage("Failed to submit the booking request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Book Your Tour</h1>
            <p className="text-gray-600 mt-2">{}</p>
            <div className="flex justify-center items-center gap-2 mt-4">
              <span className="text-2xl font-bold text-blue-600">{}</span>
              <span className="text-gray-500">per person</span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {step === 1 && (
              <div>
                <h2 className="text-xl font-semibold">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input {...register("fullName", { required: "Full name is required" })} type="text" className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 p-3 focus:border-blue-500 focus:ring-blue-500" />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input {...register("email", { required: "Email is required" })} type="email" className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 p-3 focus:border-blue-500 focus:ring-blue-500" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>
              </div>
            )}

            {step < 3 ? (
              <button type="button" onClick={nextStep} className="ml-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Next</button>
            ) : (
              <button type="submit" disabled={loading} className={`ml-auto px-8 py-3 bg-blue-600 text-white rounded-lg ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"} transition-colors`}>
                {loading ? "Submitting..." : "Complete Booking"}
              </button>
            )}
          </form>

          {message && (
            <div className={`mt-6 p-4 rounded-lg ${message.includes("successfully") ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>{message}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanForm;
