const itineraries = [
  {
    slug: "classic-lake-malawi",
    title: "Classic Lake Malawi Escape",
    durationDays: 5,
    category: "lake",
    priceRange: "USD 600 - 1,200",
    highlights: ["Lake boat tour", "Beach time", "Local seafood tasting"],
    description:
      "A relaxing escape to Lake Malawi with beach days, boat trips, and fresh seafood.",
    itineraryDays: [
      {
        day: 1,
        title: "Arrival & Beach",
        activities: ["Arrival at Lilongwe", "Transfer to lakeside resort"],
        meals: ["Dinner"],
        images: ["/images/gallery/landscapes/lake-sunset.jpg"],
      },
      {
        day: 2,
        title: "Boat Tour",
        activities: ["Morning boat trip", "Snorkelling"],
        meals: ["Breakfast", "Lunch"],
        images: ["/images/gallery/activities/boat-tour.jpg"],
      },
    ],
    included: ["Accommodation", "Breakfasts", "Boat tour"],
    excluded: ["International flights", "Travel insurance"],
    mainImage: "/images/gallery/landscapes/lake-sunset.jpg",
    destinationIds: [6],
  },
  {
    slug: "culinary-lilongwe",
    title: "Culinary Lilongwe",
    durationDays: 3,
    category: "food",
    priceRange: "USD 300 - 600",
    highlights: ["Market food tour", "Cooking class"],
    description:
      "Taste your way through Lilongwe with markets, street food and a hands-on cooking class.",
    itineraryDays: [
      {
        day: 1,
        title: "Market Tour",
        activities: ["Central Market walk", "Street food sampling"],
        meals: ["Lunch", "Dinner"],
        images: ["/images/gallery/food/market-stall.jpg"],
      },
    ],
    included: ["Market tour", "Cooking class"],
    excluded: ["Meals not listed", "Gratuities"],
    mainImage: "/images/gallery/food/market-stall.jpg",
    destinationIds: [7],
  },
  {
    slug: "mulanje-hike-adventure",
    title: "Mulanje Hike Adventure",
    durationDays: 4,
    category: "hiking",
    priceRange: "USD 450 - 900",
    highlights: ["Guided hikes", "Scenic viewpoints"],
    description:
      "Active hiking through Mulanje massif with local guides and scenic views.",
    itineraryDays: [
      {
        day: 1,
        title: "Arrival & Short Hike",
        activities: ["Meet guide", "Acclimatization walk"],
        meals: ["Dinner"],
        images: ["/images/gallery/activities/hiking-mulanje.jpg"],
      },
    ],
    included: ["Guiding", "Park fees"],
    excluded: ["Personal gear", "Tips"],
    mainImage: "/images/gallery/activities/hiking-mulanje.jpg",
    destinationIds: [3],
  },
];

export default itineraries;