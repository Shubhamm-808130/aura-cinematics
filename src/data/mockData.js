// Persistent Initial Data for Photographer Website & Admin Dashboard

export const initialPhotographer = {
  name: "Arjun Verma",
  brandName: "AURA CINEMATICS",
  tagline: "Preserving Timeless Wedding Stories in Royal Frames",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "arjun@auracinematics.com",
  instagram: "auracinematics.weddings",
  upiId: "auracinematics@upi",
  experienceYears: 9,
  weddingsCovered: 340,
  citiesTraveled: 28,
  about: "Award-winning wedding photographer and visual filmmaker with over 9 years of capturing heartfelt, unscripted royal celebrations. We believe in candid emotions, dramatic golden-hour portraits, and cinematic films that make you relive your wedding day for generations.",
  gearList: [
    "Sony A7S III & FX3 (4K 120fps Cinema Line)",
    "Sony 24-70mm f/2.8 GM II & 50mm f/1.2 GM",
    "DJI Mavic 3 Pro Cine Drone",
    "Godox AD600 Pro + Profoto Lighting Kit",
    "DJI RS3 Pro Gimbal & Wireless Audio"
  ]
};

export const initialPackages = [
  {
    id: "pkg-photo",
    type: "photography",
    title: "Timeless Photography",
    tagline: "For couples who cherish soulful candid frames",
    price: 35000,
    deposit: 10000,
    popular: false,
    badge: "Pure Photos",
    features: [
      "2 Days Coverage (Pre-wedding / Haldi + Wedding)",
      "1 Candid Photographer + 1 Traditional Photographer",
      "350+ Retouched & Color-graded High-Res Photos",
      "All Raw Unedited Photos delivered in SSD/Drive",
      "Dedicated Client QR Code for Family Sharing",
      "Delivery within 25 working days"
    ]
  },
  {
    id: "pkg-video",
    type: "videography",
    title: "Cinematic Filmography",
    tagline: "4K cinematic wedding trailer & documentary cut",
    price: 45000,
    deposit: 15000,
    popular: false,
    badge: "Pure Film",
    features: [
      "2 Days 4K Cinema Coverage (Sony FX3/A7SIII)",
      "1 Lead Cinematic Director + 1 Gimbal Operator",
      "Licensed Aerial Drone Coverage (Subject to venue)",
      "3-4 Min Cinematic Teaser for Instagram Reels",
      "20-25 Min Full Wedding Highlight Film",
      "Full Traditional Documentary Video Cut (2-3 hrs)",
      "Dedicated Client QR Code Gallery"
    ]
  },
  {
    id: "pkg-combo",
    type: "combo",
    title: "Royal Combo Deluxe",
    tagline: "Complete Photo + Video + Luxury Handcrafted Album",
    price: 75000,
    deposit: 20000,
    popular: true,
    badge: "Most Popular (Best Value)",
    features: [
      "3 Days Complete Coverage (Mehendi, Sangeet & Wedding)",
      "Full 5-Crew Team (2 Candid Photo, 2 Video, 1 Drone Pilot)",
      "Premium 40-Sheet Canvera Leather Hardcover Album",
      "500+ Retouched Master Photos + All RAW files",
      "Cinematic Teaser (1 Min) + Full Highlight Film (25 Mins)",
      "Drone 4K 60fps Aerial Cinematography",
      "Unique Wedding Day QR Code for Live Guest Downloads",
      "Priority 18-day express delivery"
    ]
  },
  {
    id: "pkg-royal",
    type: "combo",
    title: "Palace Destination Elite",
    tagline: "Full-scale multi-day destination wedding mastery",
    price: 135000,
    deposit: 35000,
    popular: false,
    badge: "Destination Elite",
    features: [
      "Up to 4 Days Unlimited Multi-Event Coverage",
      "Senior Creative Director + 6 Crew Production Team",
      "Dual Drone Coverage with 4K FPV Flythrough",
      "2 Premium Luxury Flush-Mount Leather Photobooks",
      "Same-Day Edit (SDE) Teaser shown at Reception",
      "Dedicated Personal QR Portal + VIP Cloud Storage",
      "International / Pan-India Travel & Crew Logistics"
    ]
  }
];

export const initialPortfolio = [
  {
    id: "p1",
    type: "photo",
    category: "candid",
    title: "Royal Palace Vows",
    couple: "Kabir & Mehr",
    location: "Udaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    featured: true
  },
  {
    id: "p2",
    type: "photo",
    category: "prewedding",
    title: "Golden Hour Romance",
    couple: "Rohan & Simran",
    location: "Jaipur Fort, Rajasthan",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    featured: true
  },
  {
    id: "p3",
    type: "video",
    category: "video",
    title: "The Regal Symphony — Wedding Film",
    couple: "Dev & Ananya",
    location: "Neemrana Fort, Delhi NCR",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "4:15",
    featured: true
  },
  {
    id: "p4",
    type: "photo",
    category: "haldi",
    title: "Colors of Joy (Haldi Frenzy)",
    couple: "Aakash & Natasha",
    location: "Goa Beach Resort",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
    featured: false
  },
  {
    id: "p5",
    type: "photo",
    category: "reception",
    title: "First Dance Under Chandeliers",
    couple: "Vikram & Sanjana",
    location: "The Leela Palace, Bengaluru",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    featured: true
  },
  {
    id: "p6",
    type: "video",
    category: "video",
    title: "Forever Begins Now — Cinematic Teaser",
    couple: "Aryan & Tanya",
    location: "Jim Corbett, Uttarakhand",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "2:50",
    featured: false
  },
  {
    id: "p7",
    type: "photo",
    category: "candid",
    title: "The Emotional Vidaai Glance",
    couple: "Siddharth & Pooja",
    location: "ITC Grand Bharat, Gurugram",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80",
    featured: false
  },
  {
    id: "p8",
    type: "photo",
    category: "prewedding",
    title: "Sunkissed Sand Dunes",
    couple: "Gaurav & Riya",
    location: "Jaisalmer, Rajasthan",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80",
    featured: false
  }
];

export const initialBookings = [
  {
    id: "BK-9021",
    clientName: "Rahul & Priya Sharma",
    phone: "+91 98112 34567",
    email: "rahul.sharma@example.com",
    weddingDate: "2026-11-24",
    venueName: "The Oberoi Amarvilas",
    city: "Agra, Uttar Pradesh",
    packageId: "pkg-combo",
    packageName: "Royal Combo Deluxe",
    packagePrice: 75000,
    depositPaid: 20000,
    paymentStatus: "Advance Paid",
    bookingStatus: "Confirmed",
    createdAt: "2026-10-15",
    notes: "Requires drone permission in hotel lawns. 250 guests expected."
  },
  {
    id: "BK-9022",
    clientName: "Amit & Sneha Kapoor",
    phone: "+91 98220 98765",
    email: "sneha.k@example.com",
    weddingDate: "2026-12-05",
    venueName: "Taj Lake Palace",
    city: "Udaipur, Rajasthan",
    packageId: "pkg-royal",
    packageName: "Palace Destination Elite",
    packagePrice: 135000,
    depositPaid: 35000,
    paymentStatus: "Advance Paid",
    bookingStatus: "Confirmed",
    createdAt: "2026-10-22",
    notes: "Pre-wedding boat shoot requested at sunset on Lake Pichola."
  },
  {
    id: "BK-9023",
    clientName: "Varun & Ananya Reddy",
    phone: "+91 97400 11223",
    email: "varun.reddy@example.com",
    weddingDate: "2026-12-18",
    venueName: "JW Marriott Prestige Golfshire",
    city: "Bengaluru, Karnataka",
    packageId: "pkg-video",
    packageName: "Cinematic Filmography",
    packagePrice: 45000,
    depositPaid: 0,
    paymentStatus: "Pending Deposit",
    bookingStatus: "Inquiry / Review",
    createdAt: "2026-11-01",
    notes: "Requested a phone call consultation regarding lighting setup."
  },
  {
    id: "BK-9024",
    clientName: "Kunal & Tanvi Malhotra",
    phone: "+91 99991 44556",
    email: "tanvi.m@example.com",
    weddingDate: "2027-01-14",
    venueName: "Noor Mahal Palace",
    city: "Karnal, Haryana",
    packageId: "pkg-photo",
    packageName: "Timeless Photography",
    packagePrice: 35000,
    depositPaid: 10000,
    paymentStatus: "Advance Paid",
    bookingStatus: "Confirmed",
    createdAt: "2026-11-02",
    notes: "Morning Anand Karaj ceremony followed by evening celebration."
  }
];

export const initialClientGalleries = [
  {
    id: "gal-1",
    slug: "kabir-mehr-2026",
    clientCode: "KM2026",
    coupleName: "Kabir & Mehr",
    weddingDate: "15 Oct 2026",
    venue: "City Palace, Udaipur",
    coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    googleDriveLink: "https://drive.google.com/drive/folders/demo-kabir-mehr",
    pin: "1234",
    totalScans: 480,
    totalDownloads: 184,
    photos: [
      { id: "g1", title: "The Royal Entrance", url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80" },
      { id: "g2", title: "Varmala Moment", url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80" },
      { id: "g3", title: "Mandap Whispers", url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80" },
      { id: "g4", title: "Sindoor & Blessings", url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1000&q=80" },
      { id: "g5", title: "The Bride's Glow", url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=80" },
      { id: "g6", title: "Family Cheers", url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80" }
    ]
  },
  {
    id: "gal-2",
    slug: "rohan-simran-2026",
    clientCode: "RS2026",
    coupleName: "Rohan & Simran",
    weddingDate: "28 Oct 2026",
    venue: "Jaipur Marriott",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    googleDriveLink: "https://drive.google.com/drive/folders/demo-rohan-simran",
    pin: "5678",
    totalScans: 310,
    totalDownloads: 92,
    photos: [
      { id: "g7", title: "Golden Glow", url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80" },
      { id: "g8", title: "Sunset Walk", url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=80" },
      { id: "g9", title: "Laughter in Sangeet", url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80" }
    ]
  }
];

export const initialAnalytics = {
  totalRevenue: 540000,
  thisMonthRevenue: 125000,
  advanceCollected: 65000,
  pendingCollections: 60000,
  totalBookingsCount: 14,
  upcomingWeddings: 4,
  totalQrScans: 1420,
  totalGuestDownloads: 512,
  monthlyData: [
    { month: "May", revenue: 45000, bookings: 2 },
    { month: "Jun", revenue: 35000, bookings: 1 },
    { month: "Jul", revenue: 40000, bookings: 1 },
    { month: "Aug", revenue: 30000, bookings: 1 },
    { month: "Sep", revenue: 75000, bookings: 2 },
    { month: "Oct", revenue: 190000, bookings: 4 },
    { month: "Nov", revenue: 125000, bookings: 3 }
  ],
  packageBreakdown: [
    { name: "Royal Combo Deluxe", percentage: 55, color: "#e59e19" },
    { name: "Cinematic Filmography", percentage: 25, color: "#fbd471" },
    { name: "Palace Destination Elite", percentage: 12, color: "#c87c10" },
    { name: "Timeless Photography", percentage: 8, color: "#78716c" }
  ]
};
