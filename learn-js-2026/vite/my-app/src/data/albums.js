// ============================================================
// 📦 albumsData.js — Day 13 & 14: React Fundamentals + Hooks
// Albums are separate from users — linked by user_id
// Just like a real database relationship!
// ============================================================

export const albums = [

  // ─── Aisha Tanaka (user_id: 1) ───────────────────────────
  { id: 101, user_id: 1, title: "Sunset at Chao Phraya",     image: "https://picsum.photos/seed/aisha1/400/300",  likes: 84,  isLiked: false },
  { id: 102, user_id: 1, title: "Street Food in Yaowarat",   image: "https://picsum.photos/seed/aisha2/400/300",  likes: 120, isLiked: true  },
  { id: 103, user_id: 1, title: "Laptop and Latte",           image: "https://picsum.photos/seed/aisha3/400/300",  likes: 55,  isLiked: false },
  { id: 104, user_id: 1, title: "React Conference 2025",      image: "https://picsum.photos/seed/aisha4/400/300",  likes: 200, isLiked: true  },
  { id: 105, user_id: 1, title: "Morning Run in Lumpini",     image: "https://picsum.photos/seed/aisha5/400/300",  likes: 39,  isLiked: false },
  { id: 106, user_id: 1, title: "Rooftop Views Bangkok",      image: "https://picsum.photos/seed/aisha6/400/300",  likes: 176, isLiked: false },
  { id: 107, user_id: 1, title: "Code Review Session",        image: "https://picsum.photos/seed/aisha7/400/300",  likes: 61,  isLiked: true  },
  { id: 108, user_id: 1, title: "Weekend at Koh Samet",       image: "https://picsum.photos/seed/aisha8/400/300",  likes: 310, isLiked: false },
  { id: 109, user_id: 1, title: "Team Hackathon Night",       image: "https://picsum.photos/seed/aisha9/400/300",  likes: 95,  isLiked: false },
  { id: 110, user_id: 1, title: "New Year Fireworks",         image: "https://picsum.photos/seed/aisha10/400/300", likes: 450, isLiked: true  },

  // ─── Marcus Webb (user_id: 2) ────────────────────────────
  { id: 201, user_id: 2, title: "Wireframes on Whiteboard",   image: "https://picsum.photos/seed/marcus1/400/300",  likes: 73,  isLiked: false },
  { id: 202, user_id: 2, title: "Doi Inthanon Hike",          image: "https://picsum.photos/seed/marcus2/400/300",  likes: 188, isLiked: true  },
  { id: 203, user_id: 2, title: "Figma Deep Dive",            image: "https://picsum.photos/seed/marcus3/400/300",  likes: 44,  isLiked: false },
  { id: 204, user_id: 2, title: "Night Bazaar Chiang Mai",    image: "https://picsum.photos/seed/marcus4/400/300",  likes: 230, isLiked: false },
  { id: 205, user_id: 2, title: "Minimal Desk Setup",         image: "https://picsum.photos/seed/marcus5/400/300",  likes: 390, isLiked: true  },
  { id: 206, user_id: 2, title: "Colour Palette Exploration", image: "https://picsum.photos/seed/marcus6/400/300",  likes: 112, isLiked: false },
  { id: 207, user_id: 2, title: "Temple at Dawn",             image: "https://picsum.photos/seed/marcus7/400/300",  likes: 267, isLiked: true  },
  { id: 208, user_id: 2, title: "Design System Workshop",     image: "https://picsum.photos/seed/marcus8/400/300",  likes: 58,  isLiked: false },
  { id: 209, user_id: 2, title: "Saturday Market Finds",      image: "https://picsum.photos/seed/marcus9/400/300",  likes: 99,  isLiked: false },
  { id: 210, user_id: 2, title: "Sunset Pixel Art",           image: "https://picsum.photos/seed/marcus10/400/300", likes: 144, isLiked: true  },

  // ─── Priya Sharma (user_id: 3) ───────────────────────────
  { id: 301, user_id: 3, title: "Terminal Life",              image: "https://picsum.photos/seed/priya1/400/300",  likes: 320, isLiked: true  },
  { id: 302, user_id: 3, title: "Remote Work Café Mumbai",    image: "https://picsum.photos/seed/priya2/400/300",  likes: 88,  isLiked: false },
  { id: 303, user_id: 3, title: "API Docs Done Right",        image: "https://picsum.photos/seed/priya3/400/300",  likes: 510, isLiked: true  },
  { id: 304, user_id: 3, title: "Monsoon from My Window",     image: "https://picsum.photos/seed/priya4/400/300",  likes: 720, isLiked: false },
  { id: 305, user_id: 3, title: "Database Schema Day",        image: "https://picsum.photos/seed/priya5/400/300",  likes: 145, isLiked: true  },
  { id: 306, user_id: 3, title: "Open Source PR Merged",      image: "https://picsum.photos/seed/priya6/400/300",  likes: 890, isLiked: true  },
  { id: 307, user_id: 3, title: "Night Coding Session",       image: "https://picsum.photos/seed/priya7/400/300",  likes: 201, isLiked: false },
  { id: 308, user_id: 3, title: "Chai and Debugging",         image: "https://picsum.photos/seed/priya8/400/300",  likes: 334, isLiked: true  },
  { id: 309, user_id: 3, title: "Conference Talk Prep",       image: "https://picsum.photos/seed/priya9/400/300",  likes: 175, isLiked: false },
  { id: 310, user_id: 3, title: "First 1000 GitHub Stars",    image: "https://picsum.photos/seed/priya10/400/300", likes: 980, isLiked: true  },

  // ─── Leo Fontaine (user_id: 4) ───────────────────────────
  { id: 401, user_id: 4, title: "My First React App",         image: "https://picsum.photos/seed/leo1/400/300",  likes: 12,  isLiked: false },
  { id: 402, user_id: 4, title: "Seine at Golden Hour",       image: "https://picsum.photos/seed/leo2/400/300",  likes: 88,  isLiked: true  },
  { id: 403, user_id: 4, title: "Bootcamp Day 1",             image: "https://picsum.photos/seed/leo3/400/300",  likes: 34,  isLiked: false },
  { id: 404, user_id: 4, title: "Croissant Break",            image: "https://picsum.photos/seed/leo4/400/300",  likes: 201, isLiked: true  },
  { id: 405, user_id: 4, title: "CSS Grid Finally Clicked",   image: "https://picsum.photos/seed/leo5/400/300",  likes: 55,  isLiked: false },
  { id: 406, user_id: 4, title: "Pair Programming Buddy",     image: "https://picsum.photos/seed/leo6/400/300",  likes: 29,  isLiked: false },
  { id: 407, user_id: 4, title: "Bug Fixed at Last",          image: "https://picsum.photos/seed/leo7/400/300",  likes: 76,  isLiked: true  },
  { id: 408, user_id: 4, title: "Montmartre on Sunday",       image: "https://picsum.photos/seed/leo8/400/300",  likes: 143, isLiked: false },
  { id: 409, user_id: 4, title: "First PR on GitHub",         image: "https://picsum.photos/seed/leo9/400/300",  likes: 18,  isLiked: false },
  { id: 410, user_id: 4, title: "JavaScript Makes Sense Now", image: "https://picsum.photos/seed/leo10/400/300", likes: 92,  isLiked: true  },

  // ─── Sara Okonkwo (user_id: 5) ───────────────────────────
  { id: 501, user_id: 5, title: "Pipeline Green ✅",          image: "https://picsum.photos/seed/sara1/400/300",  likes: 430, isLiked: true  },
  { id: 502, user_id: 5, title: "Lagos Skyline at Night",     image: "https://picsum.photos/seed/sara2/400/300",  likes: 615, isLiked: false },
  { id: 503, user_id: 5, title: "Docker Container Life",      image: "https://picsum.photos/seed/sara3/400/300",  likes: 278, isLiked: true  },
  { id: 504, user_id: 5, title: "Uptime 99.99%",              image: "https://picsum.photos/seed/sara4/400/300",  likes: 510, isLiked: false },
  { id: 505, user_id: 5, title: "Server Room Tour",           image: "https://picsum.photos/seed/sara5/400/300",  likes: 188, isLiked: true  },
  { id: 506, user_id: 5, title: "Afrobeats and Deploys",      image: "https://picsum.photos/seed/sara6/400/300",  likes: 344, isLiked: false },
  { id: 507, user_id: 5, title: "Cloud Architecture Sketch",  image: "https://picsum.photos/seed/sara7/400/300",  likes: 222, isLiked: true  },
  { id: 508, user_id: 5, title: "Zero Downtime Deploy 🎉",    image: "https://picsum.photos/seed/sara8/400/300",  likes: 890, isLiked: true  },
  { id: 509, user_id: 5, title: "Morning Stand-up",           image: "https://picsum.photos/seed/sara9/400/300",  likes: 67,  isLiked: false },
  { id: 510, user_id: 5, title: "Eko Bridge Sunrise",         image: "https://picsum.photos/seed/sara10/400/300", likes: 730, isLiked: true  },

];