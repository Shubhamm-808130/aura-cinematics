/**
 * AURA CINEMATICS - Luxury Wedding Photography & Videography Platform
 * Full responsive frontend with Client Portal, QR Code Scanner & Admin Analytics Dashboard
 * Features:
 *  - Dynamic Hero Background Slideshow with smooth transitions (photographer work)
 *  - Fixed, always-visible Close buttons on all modals and galleries
 *  - Dedicated Customer Reviews / Testimonials Section
 *  - Luxury Light Theme (Warm Ivory, Crisp White & Royal Gold)
 */

// Global State with LocalStorage Synchronization
const DB_KEYS = {
  PHOTOGRAPHER: 'aura_photographer_profile',
  PACKAGES: 'aura_packages_data',
  PORTFOLIO: 'aura_portfolio_items',
  BOOKINGS: 'aura_bookings_records',
  GALLERIES: 'aura_client_galleries',
  REVIEWS: 'aura_customer_reviews',
  ANALYTICS: 'aura_analytics_stats',
  ADMIN_AUTH: 'aura_admin_logged_in',
  SEASONAL_OFFER: 'aura_seasonal_offer',
  ADMIN_CREDS: 'aura_admin_credentials',
  HERO_SLIDES: 'aura_hero_slides_data'
};

// Initial Seed Data
const defaultData = {
  seasonalOffer: {
    active: true,
    badge: "🪔 DIWALI & WINTER WEDDING SPECIAL",
    title: "Diwali & Winter Wedding Celebration Offer",
    discountType: "percentage",
    discountPercent: 15,
    discountAmount: 15000,
    bannerText: "🪔 Royal Festive Offer: Flat 15% OFF on 2026–2027 Winter & Diwali Wedding Bookings! Limited auspicious dates remaining.",
    tagline: "Celebrate with royal savings: Flat 15% festive discount applied across all 4K Cinema & Stills packages.",
    validTill: "31 Dec 2026",
    code: "ROYALDIWALI"
  },
  photographer: {
    name: "Arjun Verma",
    brandName: "AURA CINEMATICS",
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1000&q=80",
    tagline: "Preserving Timeless Wedding Stories in Royal Frames",
    phone: "+91 98765 43210",
    whatsapp: "+919876543210",
    email: "arjun@auracinematics.com",
    instagram: "auracinematics.weddings",
    upiId: "auracinematics@upi",
    experienceYears: 9,
    weddingsCovered: 340,
    citiesTraveled: 28,
    about: "Award-winning wedding photographer and visual filmmaker with over 9 years of capturing heartfelt, unscripted royal celebrations. We believe in candid emotions, dramatic golden-hour portraits, and cinematic films that make you relive your wedding day for generations to come.",
    gearList: [
      "Sony A7S III & FX3 (4K 120fps Cinema Line)",
      "Sony 24-70mm f/2.8 GM II & 50mm f/1.2 GM",
      "DJI Mavic 3 Pro Cine Aerial Drone",
      "Godox AD600 Pro + Profoto Lighting Systems",
      "DJI RS3 Pro Gimbal & 32-bit Float Wireless Audio"
    ]
  },
  heroSlides: [
    {
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=85",
      caption: "Kabir & Mehr — The Royal Vows",
      location: "City Palace, Udaipur",
      tag: "Royal Heritage Pheras"
    },
    {
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85",
      caption: "Rohan & Simran — Sunkissed Romance",
      location: "Jaipur Fort, Rajasthan",
      tag: "Cinematic Pre-Wedding"
    },
    {
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=85",
      caption: "Dev & Ananya — Fireworks & First Dance",
      location: "Neemrana Fort Palace",
      tag: "Royal Wedding Vows"
    },
    {
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=2000&q=85",
      caption: "Aakash & Natasha — Euphoric Haldi Splashes",
      location: "Goa Beachfront Resort",
      tag: "Pure Candid Joy"
    },
    {
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=2000&q=85",
      caption: "Vikram & Sanjana — Grand Ballroom Reception",
      location: "The Leela Palace, Bengaluru",
      tag: "Royal Evening Glamour"
    }
  ],
  reviews: [
    {
      id: "rev-1",
      coupleName: "Kabir & Mehr",
      venue: "City Palace, Udaipur",
      date: "October 2026",
      avatarType: "couple",
      rating: 5,
      packageBooked: "Palace Destination Elite",
      quote: "Arjun and his team are magicians with camera and light! Looking at our wedding photos and 4K film feels like stepping back into a royal fairytale. Every silent tear of my father and every laugh of our friends was captured without anyone feeling conscious. Hands down the best wedding decision we made!"
    },
    {
      id: "rev-2",
      coupleName: "Rohan & Simran",
      venue: "Jaipur Marriott, Rajasthan",
      date: "November 2026",
      avatarType: "male",
      rating: 5,
      packageBooked: "Royal Combo Deluxe",
      quote: "The unique QR code on our guest table cards was the superstar feature of our wedding! Over 350 family and guests scanned it right during dinner and were downloading their pictures. And the Canvera leather album is heavier and more luxurious than we ever imagined. 10/10 recommendation!"
    },
    {
      id: "rev-3",
      coupleName: "Dev & Ananya",
      venue: "Neemrana Fort Palace, Delhi NCR",
      date: "September 2026",
      avatarType: "female",
      rating: 5,
      packageBooked: "Cinematic Filmography",
      quote: "Our cinematic highlight video crossed 80,000 views on Instagram! The drone flythrough over the fort walls and the background score selection was so tasteful. Arjun's team is polite, punctual, and extremely creative."
    },
    {
      id: "rev-4",
      coupleName: "Siddharth & Kiara",
      venue: "ITC Grand Bharat, Gurugram",
      date: "August 2026",
      avatarType: "male",
      rating: 5,
      packageBooked: "Timeless Photography",
      quote: "No awkward stiff posing! Arjun captured genuine, raw emotions throughout our 3 days of events. The delivery of the full drive with 500+ retouched photos happened in less than 3 weeks as promised. Truly world-class quality."
    }
  ],
  packages: [
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
        "1 Candid Specialist + 1 Traditional Photographer",
        "350+ Retouched & Color-Graded Master Photos",
        "All Raw High-Res Photos Delivered on Drive",
        "Dedicated Client QR Code for Family Sharing",
        "Express delivery in 20 working days"
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
      badge: "Pure Cinema",
      features: [
        "2 Days 4K Cinema Coverage (Sony FX3/A7SIII)",
        "1 Lead Cinematographer + 1 Drone Pilot",
        "Licensed Aerial 4K Drone Footage",
        "3-4 Min Cinematic Instagram Reel / Teaser",
        "20-25 Min Master Wedding Highlight Film",
        "Full Documentary Video Cut (2-3 Hours)",
        "Dedicated Client QR Code for Film Streaming"
      ]
    },
    {
      id: "pkg-combo",
      type: "combo",
      title: "Royal Combo Deluxe",
      tagline: "Complete Photo + Video + Handcrafted Leather Album",
      price: 75000,
      deposit: 20000,
      popular: true,
      badge: "Most Popular (Best Value)",
      features: [
        "3 Days Complete Coverage (Mehendi, Sangeet & Wedding)",
        "5-Crew Production Team (2 Photo, 2 Video, 1 Drone)",
        "Handcrafted 40-Sheet Canvera Leather Photobook",
        "500+ Retouched Master Photos + All RAW Files",
        "Cinematic Teaser (1 Min) + Full Highlight Film (25 Mins)",
        "4K 60fps Aerial Drone Flythrough",
        "Unique Wedding Day QR Code for Live Guest Downloads",
        "Priority 15-day express delivery"
      ]
    },
    {
      id: "pkg-royal",
      type: "combo",
      title: "Palace Destination Elite",
      tagline: "Full-scale multi-day destination wedding production",
      price: 135000,
      deposit: 35000,
      popular: false,
      badge: "Destination Elite",
      features: [
        "Up to 4 Days Unlimited Multi-Event Coverage",
        "Senior Creative Director + 6-Crew Production Team",
        "Dual Drone Coverage with 4K FPV Flythrough",
        "2 Premium Flush-Mount Leather Photobooks for Families",
        "Same-Day Edit (SDE) Teaser shown at Reception",
        "VIP Client QR Portal with Cloud Photo Sync",
        "Pan-India & International Travel Logistics Handled"
      ]
    }
  ],
  portfolio: [
    {
      id: "p1",
      type: "photo",
      category: "candid",
      title: "Royal Palace Vows & Flower Shower",
      couple: "Kabir & Mehr",
      location: "City Palace, Udaipur",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p2",
      type: "photo",
      category: "prewedding",
      title: "Golden Hour Romance",
      couple: "Rohan & Simran",
      location: "Jaipur Fort, Rajasthan",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p3",
      type: "photo",
      category: "candid",
      title: "The Regal Symphony & Floral Arch",
      couple: "Dev & Ananya",
      location: "Neemrana Fort Palace",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p4",
      type: "photo",
      category: "haldi",
      title: "Colors of Joy & Phoolon Ki Holi",
      couple: "Aakash & Natasha",
      location: "Goa Beach Resort",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p5",
      type: "photo",
      category: "reception",
      title: "First Dance Under Crystal Chandeliers",
      couple: "Vikram & Sanjana",
      location: "The Leela Palace, Bengaluru",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p6",
      type: "photo",
      category: "prewedding",
      title: "Forest Trail Romance & Golden Light",
      couple: "Aryan & Tanya",
      location: "Jim Corbett, Uttarakhand",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p7",
      type: "photo",
      category: "candid",
      title: "The Emotional Vidaai Glance",
      couple: "Siddharth & Pooja",
      location: "ITC Grand Bharat, Gurugram",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p8",
      type: "photo",
      category: "prewedding",
      title: "Sunkissed Sand Dunes & Camel Trail",
      couple: "Gaurav & Riya",
      location: "Jaisalmer, Rajasthan",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p9",
      type: "photo",
      category: "candid",
      title: "Intricate Bridal Mehndi & Joy",
      couple: "Aditya & Meera",
      location: "Umaid Bhawan Palace, Jodhpur",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p10",
      type: "photo",
      category: "reception",
      title: "Grand Varmala Stage & Fireworks",
      couple: "Naveen & Shreya",
      location: "Rambagh Palace, Jaipur",
      image: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p11",
      type: "photo",
      category: "candid",
      title: "Royal Bride Heritage Elegance",
      couple: "Karan & Kritika",
      location: "Taj Lake Palace, Udaipur",
      image: "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p12",
      type: "photo",
      category: "prewedding",
      title: "Gentle Hands & Lifelong Promise",
      couple: "Rahul & Sneha",
      location: "Samode Palace, Rajasthan",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p13",
      type: "photo",
      category: "candid",
      title: "Bespoke Platinum & Gold Rings",
      couple: "Arjun & Riddhi",
      location: "Oberoi Udaivilas, Udaipur",
      image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p14",
      type: "photo",
      category: "candid",
      title: "The Grand Regal Floral Mandap",
      couple: "Varun & Anjali",
      location: "Fairmont, Jaipur",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p15",
      type: "photo",
      category: "prewedding",
      title: "Sunset Whispers & Lakeside Glow",
      couple: "Manish & Preeti",
      location: "Pushkar Lake, Rajasthan",
      image: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p16",
      type: "photo",
      category: "haldi",
      title: "Euphoric Sangeet & Folk Celebrations",
      couple: "Deepak & Tanvi",
      location: "Alila Fort Bishangarh",
      image: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p17",
      type: "photo",
      category: "candid",
      title: "Sacred Pheras & Eternal Love",
      couple: "Prateek & Ishita",
      location: "Suryagarh, Jaisalmer",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p18",
      type: "photo",
      category: "reception",
      title: "Starlit Reception Champagne Toast",
      couple: "Harsh & Divya",
      location: "JW Marriott Resort, Mussoorie",
      image: "https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p19",
      type: "photo",
      category: "prewedding",
      title: "Heritage Archway Twilight Promenade",
      couple: "Yash & Sonali",
      location: "Taj Falaknuma Palace, Hyderabad",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p20",
      type: "photo",
      category: "candid",
      title: "Sparkler Grand Exit & Forever After",
      couple: "Sameer & Priyanka",
      location: "The Imperial, New Delhi",
      image: "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  bookings: [
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
      bookingStatus: "Inquiry",
      createdAt: "2026-11-01",
      notes: "Requested a phone consultation regarding stage lighting."
    }
  ],
  galleries: [
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
  ]
};

// Database Access Helpers
function getDB(key, fallback) {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  } catch (e) {
    return fallback;
  }
}

function setDB(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error("Storage error:", e);
  }
}

// Global App State
let photographer = getDB(DB_KEYS.PHOTOGRAPHER, defaultData.photographer);
let packages = getDB(DB_KEYS.PACKAGES, defaultData.packages);
let portfolio = getDB(DB_KEYS.PORTFOLIO, defaultData.portfolio);
// Ensure portfolio contains all 20 pure demo wedding photos (no old nested sub-collections)
if (!portfolio || portfolio.length < 20 || portfolio.some(p => p.photos && p.photos.length > 0)) {
  portfolio = defaultData.portfolio;
  setDB(DB_KEYS.PORTFOLIO, portfolio);
} else {
  portfolio = portfolio.filter(item => item.type !== 'video');
  setDB(DB_KEYS.PORTFOLIO, portfolio);
}
let bookings = getDB(DB_KEYS.BOOKINGS, defaultData.bookings);
let galleries = getDB(DB_KEYS.GALLERIES, defaultData.galleries);
let reviews = getDB(DB_KEYS.REVIEWS, defaultData.reviews);
// Ensure all reviews use clean vector Profile Logos (Male/Female/Couple) instead of photos
reviews = reviews.map((r, idx) => {
  if (!r.avatarType) {
    if (r.id === 'rev-1') r.avatarType = 'couple';
    else if (r.id === 'rev-2') r.avatarType = 'male';
    else if (r.id === 'rev-3') r.avatarType = 'female';
    else if (r.id === 'rev-4') r.avatarType = 'male';
    else r.avatarType = (idx % 3 === 1) ? 'female' : (idx % 3 === 2 ? 'couple' : 'male');
  }
  delete r.avatar;
  return r;
});
setDB(DB_KEYS.REVIEWS, reviews);
let seasonalOffer = getDB(DB_KEYS.SEASONAL_OFFER, defaultData.seasonalOffer);
let heroSlides = getDB(DB_KEYS.HERO_SLIDES, defaultData.heroSlides);

// Helper function to calculate offer prices for any package
function getPackageDiscountedPrice(pkg) {
  if (!pkg) return { originalPrice: 0, finalPrice: 0, deposit: 0, discount: 0, hasOffer: false };
  if (!seasonalOffer || !seasonalOffer.active) {
    return {
      originalPrice: pkg.price,
      finalPrice: pkg.price,
      deposit: pkg.deposit,
      discount: 0,
      hasOffer: false
    };
  }
  let discount = 0;
  if (seasonalOffer.discountType === 'percentage') {
    discount = Math.round((pkg.price * (Number(seasonalOffer.discountPercent) || 15)) / 100);
  } else {
    discount = Number(seasonalOffer.discountAmount) || 15000;
  }
  // Cap discount at 50%
  discount = Math.min(discount, Math.round(pkg.price * 0.5));
  const finalPrice = Math.max(0, pkg.price - discount);

  return {
    originalPrice: pkg.price,
    finalPrice: finalPrice,
    deposit: pkg.deposit,
    discount: discount,
    hasOffer: discount > 0
  };
}

// Portfolio expanded toggle state (false = show 8 photos, true = show all 20 photos)
let isPortfolioExpanded = false;

function togglePortfolioExpand() {
  isPortfolioExpanded = !isPortfolioExpanded;
  renderPortfolio();
}

// Active portfolio filter
let currentPortfolioCategory = 'all';

// Hero Slideshow State
let currentHeroSlideIndex = 0;
let heroSlideshowTimer = null;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderHero();
  initHeroSlideshow();
  renderPortfolio();
  renderPackages();
  renderReviews();
  renderAbout();
  renderContact();
  renderFooter();
  setupEventListeners();
  checkUrlParamsForGallery();
});

// Format Indian Currency
function formatINR(val) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(val);
}

// ----------------------------------------------------
// NAVBAR (PROPER LUXURY LAYOUT)
// ----------------------------------------------------
function renderNavbar() {
  const navContainer = document.getElementById('navbar-container');
  if (!navContainer) return;

  navContainer.innerHTML = `
    <nav class="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      
      <!-- Festive & Winter Wedding Offer Announcement Bar (Manageable from Admin) -->
      ${seasonalOffer && seasonalOffer.active ? `
        <div id="festive-announcement-bar" class="w-full bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 text-amber-100 text-xs py-2 px-4 text-center font-medium shadow-inner flex items-center justify-between sm:justify-center space-x-2 border-b border-amber-600/40">
          <div class="flex items-center space-x-2 truncate">
            <span class="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold text-xs tracking-wider uppercase shadow-sm shrink-0">
              ${seasonalOffer.badge}
            </span>
            <span class="truncate">${seasonalOffer.bannerText}</span>
          </div>
          <a href="#packages" onclick="handleNavClick('packages')" class="underline text-amber-300 hover:text-white font-bold ml-2 shrink-0 text-xs">
            View Offers →
          </a>
        </div>
      ` : ''}

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Brand Logo & Crest -->
          <a href="#" class="flex items-center space-x-3.5 group">
            <div class="w-11 h-11 rounded-full border border-gold-500/50 flex items-center justify-center bg-gradient-to-br from-gold-50 to-amber-100 group-hover:scale-105 transition-all shadow-sm">
              <svg class="w-5 h-5 text-gold-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <span class="font-serif text-xl sm:text-2xl font-bold tracking-wider text-stone-900 group-hover:text-gold-700 transition uppercase block leading-none">
                ${photographer.brandName}
              </span>
              <span class="text-[10px] tracking-widest text-gold-700 uppercase font-sans font-bold mt-0.5 block">
                Royal Wedding Films & Stills
              </span>
            </div>
          </a>

          <!-- Desktop Navigation Center Links -->
          <div class="hidden lg:flex items-center space-x-9 text-sm">
            <a href="#portfolio" data-nav="portfolio" onclick="handleNavClick('portfolio')" class="nav-link">Gallery</a>
            <a href="#packages" data-nav="packages" onclick="handleNavClick('packages')" class="nav-link">Package</a>
            <a href="#about" data-nav="about" onclick="handleNavClick('about')" class="nav-link">About</a>
            <a href="#contact" data-nav="contact" onclick="handleNavClick('contact')" class="nav-link">Contact</a>
          </div>

          <!-- Desktop Action Cluster (Right Header) -->
          <div class="hidden lg:flex items-center space-x-3.5">
            
            <!-- Client Access Button -->
            <button onclick="openQRScannerModal()" class="flex items-center space-x-1.5 px-4 py-2 rounded-full border border-gold-400 bg-gold-50/90 hover:bg-gold-100 text-gold-900 text-xs font-bold transition shadow-sm cursor-pointer">
              <svg class="w-3.5 h-3.5 text-gold-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>Access Your Photo</span>
            </button>

            <!-- Book date button -->
            <button onclick="openBookingModal()" class="gold-btn px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase flex items-center space-x-1.5 shadow-md cursor-pointer hover:scale-105 transition">
              <span>Book Your Date</span>
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>

          </div>

          <!-- Mobile Quick Buttons -->
          <div class="flex lg:hidden items-center space-x-2">
            <button onclick="openQRScannerModal()" class="p-2 rounded-full border border-gold-400 text-gold-700 bg-gold-50 shadow-sm cursor-pointer" title="Access Your Photo">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            </button>
            <button onclick="toggleMobileMenu()" class="p-2 rounded-lg text-stone-800 hover:bg-stone-100 cursor-pointer" aria-label="Toggle Navigation">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div id="mobile-menu" class="hidden lg:hidden px-4 pt-2 pb-6 space-y-2 bg-white border-b border-stone-200 shadow-xl">
        <a href="#portfolio" data-nav="portfolio" onclick="handleNavClick('portfolio'); toggleMobileMenu();" class="mobile-nav-link block py-2.5 px-3 text-stone-800 hover:text-gold-700 font-bold border-b border-stone-100">Gallery</a>
        <a href="#packages" data-nav="packages" onclick="handleNavClick('packages'); toggleMobileMenu();" class="mobile-nav-link block py-2.5 px-3 text-stone-800 hover:text-gold-700 font-bold border-b border-stone-100">Package</a>
        <a href="#about" data-nav="about" onclick="handleNavClick('about'); toggleMobileMenu();" class="mobile-nav-link block py-2.5 px-3 text-stone-800 hover:text-gold-700 font-bold border-b border-stone-100">About</a>
        <a href="#contact" data-nav="contact" onclick="handleNavClick('contact'); toggleMobileMenu();" class="mobile-nav-link block py-2.5 px-3 text-stone-800 hover:text-gold-700 font-bold">Contact</a>
        
        <div class="pt-3 border-t border-stone-200">
          <button onclick="toggleMobileMenu(); openBookingModal();" class="w-full gold-btn py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow">
            Book Your Wedding Date
          </button>
        </div>
      </div>
    </nav>
  `;
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// ----------------------------------------------------
// HERO SECTION WITH DYNAMIC SMOOTH BACKGROUND SLIDESHOW
// ----------------------------------------------------
function renderHero() {
  const heroContainer = document.getElementById('hero-container');
  if (!heroContainer) return;

  const slides = (heroSlides && heroSlides.length) ? heroSlides : defaultData.heroSlides;

  heroContainer.innerHTML = `
    <section class="relative min-h-[92vh] flex items-center justify-center pt-28 sm:pt-32 pb-16 overflow-hidden">
      
      <!-- Dynamic Smooth Transition Slideshow of Photographer's Work -->
      <div id="hero-slides-wrapper" class="absolute inset-0 z-0 bg-stone-900 overflow-hidden">
        ${slides.map((slide, idx) => `
          <img src="${slide.image}" 
               alt="${slide.caption}" 
               id="hero-slide-${idx}"
               class="hero-slide ${idx === 0 ? 'active' : 'inactive'}" />
        `).join('')}

        <!-- High-Contrast Gradients for 100% Text Legibility against bright photos (Usability Issue 12) -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-[#fbf9f5] z-10"></div>
        <div class="absolute inset-0 bg-black/25 z-10"></div>
      </div>

      <div class="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <!-- Single Clean Showcase Tag (Eliminated Banner Stacking - Issue 10) -->
        <div class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-amber-400 text-stone-900 text-xs sm:text-sm font-semibold tracking-wide mb-4 shadow-md">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping"></span>
          <span id="hero-slide-badge" class="font-bold">
            Showcase: ${slides[0].tag || 'Royal Stills'} • ${slides[0].caption}
          </span>
        </div>

        <!-- Main Headline with Enhanced Drop-Shadow for 100% Crisp Legibility -->
        <h1 class="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
          Where Royal Elegance Meets <br class="hidden sm:inline" />
          <span class="text-amber-300 italic font-normal drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">Timeless Cinematography</span>
        </h1>

        <!-- Subtitle Card with Frosted Glass for 100% Readability -->
        <div class="max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-stone-200/90 shadow-lg mb-8">
          <p class="text-base sm:text-lg text-stone-800 font-medium leading-relaxed">
            ${photographer.tagline}. Candid emotions, 4K royal wedding films, and bespoke photo albums crafted for the most discerning couples.
          </p>
        </div>

        <!-- Primary Call-To-Action Cluster (Usability Issue 6 Fix) -->
        <div class="flex flex-wrap items-center justify-center gap-4 mb-6 z-20">
          <a href="#portfolio" onclick="handleNavClick('portfolio')" class="btn-primary">
            <span>View Our Work</span>
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
          </a>
          <button onclick="openBookingModal()" class="btn-secondary">
            <span>Check Date Availability</span>
            <svg class="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>

        <!-- Accessible, High-Contrast Carousel Pagination Dots (Usability Issues 22 & 23 Fix) -->
        <div class="flex items-center justify-center mt-6 z-20">
          <div class="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full bg-black/55 backdrop-blur-md border border-white/25 shadow-xl">
            ${slides.map((_, i) => `
              <button onclick="switchHeroSlide(${i})" 
                      id="hero-dot-${i}"
                      class="h-3 rounded-full transition-all duration-300 cursor-pointer ${i === 0 ? 'w-8 bg-amber-400 ring-2 ring-amber-300/60' : 'w-3 bg-white/60 hover:bg-white'}"
                      title="View Work Slide ${i + 1}"
                      aria-label="View Work Slide ${i + 1}">
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Live Statistics Counter Bar -->
        <div class="mt-12 pt-8 border-t border-stone-300 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-md border border-stone-200">
          <div class="p-2">
            <span class="font-serif text-3xl sm:text-4xl font-bold gold-text block">${photographer.weddingsCovered}+</span>
            <span class="text-xs text-stone-700 font-bold uppercase tracking-wider mt-1 block">Weddings Captured</span>
          </div>
          <div class="p-2">
            <span class="font-serif text-3xl sm:text-4xl font-bold gold-text block">${photographer.experienceYears}+ Years</span>
            <span class="text-xs text-stone-700 font-bold uppercase tracking-wider mt-1 block">Mastery & Craft</span>
          </div>
          <div class="p-2">
            <span class="font-serif text-3xl sm:text-4xl font-bold gold-text block">${photographer.citiesTraveled}+</span>
            <span class="text-xs text-stone-700 font-bold uppercase tracking-wider mt-1 block">Destination Cities</span>
          </div>
          <div class="p-2">
            <span class="font-serif text-3xl sm:text-4xl font-bold gold-text block">100%</span>
            <span class="text-xs text-stone-700 font-bold uppercase tracking-wider mt-1 block">Private QR Access</span>
          </div>
        </div>

      </div>
    </section>
  `;
}

// Background Slideshow Engine
function initHeroSlideshow() {
  if (heroSlideshowTimer) clearInterval(heroSlideshowTimer);
  heroSlideshowTimer = setInterval(nextHeroSlide, 4500);
}

function nextHeroSlide() {
  const slides = (heroSlides && heroSlides.length) ? heroSlides : defaultData.heroSlides;
  const nextIdx = (currentHeroSlideIndex + 1) % slides.length;
  switchHeroSlide(nextIdx);
}

function switchHeroSlide(idx) {
  const slides = (heroSlides && heroSlides.length) ? heroSlides : defaultData.heroSlides;
  const currentImg = document.getElementById(`hero-slide-${currentHeroSlideIndex}`);
  const nextImg = document.getElementById(`hero-slide-${idx}`);
  const currentDot = document.getElementById(`hero-dot-${currentHeroSlideIndex}`);
  const nextDot = document.getElementById(`hero-dot-${idx}`);
  const badge = document.getElementById('hero-slide-badge');

  if (currentImg && nextImg) {
    currentImg.classList.remove('active');
    currentImg.classList.add('inactive');

    nextImg.classList.remove('inactive');
    nextImg.classList.add('active');
  }

  if (currentDot && nextDot) {
    currentDot.className = 'h-3 w-3 rounded-full bg-white/60 hover:bg-white transition-all duration-300 cursor-pointer';
    nextDot.className = 'h-3 w-8 rounded-full bg-amber-400 ring-2 ring-amber-300/60 transition-all duration-300 cursor-pointer';
  }

  if (badge && slides[idx]) {
    badge.textContent = `Showcase: ${slides[idx].tag || 'Royal Stills'} • ${slides[idx].caption || 'Royal Moments'}`;
  }

  currentHeroSlideIndex = idx;
}

// ----------------------------------------------------
// PORTFOLIO SECTION (LIGHT THEME - PURE PHOTO SHOWCASE)
// ----------------------------------------------------
function renderPortfolio() {
  const container = document.getElementById('portfolio-container');
  if (!container) return;

  const totalPhotos = portfolio.length;
  const displayedItems = isPortfolioExpanded ? portfolio : portfolio.slice(0, 8);

  container.innerHTML = `
    <section id="portfolio" class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="text-xs uppercase tracking-widest text-gold-700 font-bold">Royal Portfolio</span>
        <h2 class="font-serif text-3xl sm:text-5xl font-bold text-stone-900 mt-2 mb-3">
          Capturing Soul, Not Just Poses
        </h2>
        <p class="text-stone-600 text-sm sm:text-base font-normal">
          A glimpse into our royal wedding photography. Tap any photo to view in high resolution.
        </p>
      </div>

      <!-- Portfolio Grid: 8 Initially, 20 on See More -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        ${displayedItems.map((item, idx) => {
          const thumbUrl = (item.image && item.image.includes('images.unsplash.com'))
            ? item.image.replace(/w=\d+/, 'w=600').replace(/q=\d+/, 'q=75')
            : item.image;
          return `
            <div class="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/90 shadow-sm hover:shadow-2xl transition duration-300 aspect-[4/3] cursor-pointer" 
                 onclick="openPortfolioPhotos(${idx})">
              <img src="${thumbUrl}" alt="Royal Wedding Photo" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
            </div>
          `;
        }).join('')}
      </div>

      <!-- See More / Show Less Button -->
      ${totalPhotos > 8 ? `
        <div class="mt-12 text-center">
          <button onclick="togglePortfolioExpand()" 
                  class="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full border-2 border-stone-300 bg-white hover:border-gold-500 hover:text-gold-700 text-stone-800 text-xs font-bold uppercase tracking-wider shadow-sm transition hover:scale-105 cursor-pointer">
            <span>${isPortfolioExpanded ? 'Show Less Photos ↑' : 'See More Photos ↓'}</span>
          </button>
        </div>
      ` : ''}

    </section>
  `;
}

function setPortfolioCategory(cat) {
  currentPortfolioCategory = cat;
  renderPortfolio();
}

// ----------------------------------------------------
// PACKAGES & PRICING SECTION
// ----------------------------------------------------
function renderPackages() {
  const container = document.getElementById('packages-container');
  if (!container) return;

  container.innerHTML = `
    <section id="packages" class="py-20 relative bg-stone-100/70 border-y border-stone-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-xs uppercase tracking-widest text-gold-700 font-bold">Transparent Investment</span>
          <h2 class="font-serif text-3xl sm:text-5xl font-bold text-stone-900 mt-2 mb-4">
            Curated Packages for Your Grand Day
          </h2>
          <p class="text-stone-600 text-sm sm:text-base font-normal">
            Whether you desire pure candid stills, a 4K cinematic film, or a complete royal photo+video production with luxury albums—we have a tailored solution.
          </p>
        </div>

        <!-- Packages Grid (Fixed Baseline & Horizontal Button Alignment - Issues 13 & 16) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          ${packages.map(pkg => {
            const pricing = getPackageDiscountedPrice(pkg);
            return `
            <div class="relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 bg-white ${
              pkg.popular 
                ? 'border-2 border-amber-500 gold-border-glow shadow-xl -translate-y-1' 
                : 'border border-stone-200 hover:border-amber-400 shadow-sm'
            }">
              
              <!-- Popular Badge -->
              ${pkg.popular ? `
                <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xs font-bold tracking-wider uppercase shadow-md whitespace-nowrap">
                  ${pkg.badge}
                </div>
              ` : `
                <div class="inline-block self-start px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold tracking-wide uppercase mb-2">
                  ${pkg.badge}
                </div>
              `}

              <!-- Top Content with Fixed Min-Height Header for Alignment (Issue 16 Fix) -->
              <div class="flex-1 flex flex-col">
                <div class="min-h-[96px] flex flex-col justify-start">
                  <h3 class="font-serif text-2xl font-bold text-stone-900 leading-snug">${pkg.title}</h3>
                  <p class="text-xs text-stone-500 font-normal mt-1 leading-relaxed">${pkg.tagline}</p>
                </div>

                <!-- Clean Simplified Price Box with Breathing Room (Issue 11 Fix) -->
                <div class="py-4 my-3 border-y border-stone-100">
                  ${pricing.hasOffer ? `
                    <div class="flex items-center space-x-2 mb-1.5">
                      <span class="text-xs text-stone-500 line-through font-mono">Regular: ${formatINR(pricing.originalPrice)}</span>
                      <span class="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold font-mono">
                        ${seasonalOffer.discountType === 'percentage' ? `${seasonalOffer.discountPercent}% OFF` : `SAVE ${formatINR(pricing.discount)}`}
                      </span>
                    </div>
                  ` : ''}
                  <div class="flex items-baseline space-x-1.5">
                    <span class="font-serif text-3xl sm:text-4xl font-bold gold-text">
                      ${formatINR(pricing.finalPrice)}
                    </span>
                    <span class="text-xs text-stone-500 font-medium">/ wedding</span>
                  </div>
                  <div class="text-xs text-stone-600 mt-2">
                    Advance deposit: <span class="text-amber-800 font-bold font-mono">${formatINR(pkg.deposit)}</span> to lock date
                  </div>
                </div>

                <!-- Feature List -->
                <ul class="space-y-3 my-4 text-xs text-stone-700 flex-1">
                  ${pkg.features.map(feat => `
                    <li class="flex items-start space-x-2.5">
                      <svg class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="leading-relaxed">${feat}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <!-- Action Button Anchored to Bottom (Issue 13 Fix) -->
              <div class="mt-auto pt-6 border-t border-stone-100">
                <button onclick="openBookingModal('${pkg.id}')" 
                        class="w-full ${pkg.popular ? 'btn-primary' : 'btn-secondary'}">
                  Book This Package
                </button>
              </div>

            </div>
            `;
          }).join('')}
        </div>

        <!-- Custom Combo Notice (Reduced Whitespace - Issue 15 Fix) -->
        <div class="mt-8 p-6 rounded-2xl bg-white border border-amber-200 max-w-2xl mx-auto text-center shadow-sm">
          <h3 class="font-serif text-lg font-bold text-stone-900 mb-1">Planning a multi-city or destination wedding?</h3>
          <p class="text-xs text-stone-600 mb-3">We customize bespoke itineraries with drone permits, same-day video edits, and family albums.</p>
          <a href="https://wa.me/${photographer.whatsapp}?text=Hi%20Arjun,%20I'd%20like%20a%20custom%20wedding%20quote!" 
             target="_blank" class="text-xs font-bold text-amber-800 hover:text-amber-900 hover:underline inline-flex items-center space-x-1">
            <span>Request Custom Itinerary on WhatsApp</span>
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>

      </div>
    </section>
  `;
}

// ----------------------------------------------------
// CUSTOMER REVIEWS & LOVE NOTES SECTION
// ----------------------------------------------------
function getReviewAvatar(rev, index = 0) {
  // Standardized luxury monogram & avatar (Issue 4 Fix)
  return `
    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 border-2 border-amber-300 flex items-center justify-center text-amber-900 shadow-sm flex-shrink-0 font-serif font-bold text-sm tracking-wider" title="${rev.coupleName}">
      <svg class="w-6 h-6 text-amber-800" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    </div>
  `;
}

function renderReviews() {
  const container = document.getElementById('reviews-container');
  if (!container) return;

  container.innerHTML = `
    <section id="reviews" class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12">
        <div class="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3 shadow-sm">
          <span>★★★★★</span>
          <span>5.0 Star Rated on WedMeGood & Google</span>
        </div>
        <h2 class="font-serif text-3xl sm:text-5xl font-bold text-stone-900 mb-3">
          Loved by Couples, Cherished for Generations
        </h2>
        <p class="text-stone-600 text-sm sm:text-base font-normal mb-6">
          Real stories from brides, grooms, and royal families across 340+ destination celebrations.
        </p>

        <!-- Prominent 'Write a Review' Button (Issue 9 Fix) -->
        <button onclick="openReviewModal()" class="btn-primary text-sm font-semibold shadow-lg hover:scale-105 transition cursor-pointer">
          <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
          <span>Write a Review / Share Your Experience</span>
        </button>
      </div>

      <!-- Reviews Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        ${reviews.map((rev, index) => `
          <div class="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 hover:border-amber-400 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between">
            <div>
              <!-- Star rating & Legible High-Contrast Category Tag (Issue 8 Fix) -->
              <div class="flex items-center justify-between mb-4">
                <div class="flex text-amber-500 text-sm tracking-wider">
                  ${'★'.repeat(rev.rating)}
                </div>
                <span class="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold tracking-wide">
                  ${rev.packageBooked}
                </span>
              </div>

              <!-- Quote -->
              <p class="text-stone-700 text-sm sm:text-base leading-relaxed italic mb-6">
                "${rev.quote}"
              </p>
            </div>

            <!-- Couple Bio with Proper Heading Level H3 (Issue 19 Fix) -->
            <div class="pt-4 border-t border-stone-100 flex items-center space-x-3.5">
              ${getReviewAvatar(rev, index)}
              <div>
                <h3 class="font-serif text-lg font-bold text-stone-900">${rev.coupleName}</h3>
                <span class="text-xs text-stone-500 block">${rev.venue} • ${rev.date}</span>
              </div>
            </div>

          </div>
        `).join('')}
      </div>

      <!-- Trust Badges Bar -->
      <div class="mt-14 p-6 rounded-2xl bg-amber-50/70 border border-amber-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <span class="font-serif text-2xl font-bold text-stone-900 block">100%</span>
          <span class="text-xs text-stone-600 font-semibold block mt-0.5">On-Time Album & Film Delivery Guarantee</span>
        </div>
        <div>
          <span class="font-serif text-2xl font-bold text-stone-900 block">340+ Couples</span>
          <span class="text-xs text-stone-600 font-semibold block mt-0.5">Zero Missed Moments & Full Privacy</span>
        </div>
        <div>
          <span class="font-serif text-2xl font-bold text-stone-900 block">15,000+ Guests</span>
          <span class="text-xs text-stone-600 font-semibold block mt-0.5">Enjoyed Instant Table QR Photo Downloads</span>
        </div>
      </div>

    </section>
  `;
}

// ----------------------------------------------------
// WRITE CUSTOMER REVIEW MODAL & FORM
// ----------------------------------------------------
let currentFormRating = 5;

function openReviewModal(couplePrefill = '', venuePrefill = '') {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return;

  currentFormRating = 5;

  modalRoot.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div class="relative w-full max-w-lg rounded-3xl bg-white border border-stone-200 p-6 sm:p-8 my-8 shadow-2xl">
        
        <!-- Single clean X close button -->
        <button onclick="closeModal()" class="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 flex items-center justify-center transition cursor-pointer" title="Close (Esc)">
          ✕
        </button>

        <div class="mb-5 text-left">
          <span class="text-xs uppercase tracking-widest text-gold-700 font-bold">Client Love & Feedback</span>
          <h3 class="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">Share Your Wedding Story</h3>
          <p class="text-xs text-stone-500 mt-1">Were you a bride, groom, or family member? We would love to hear your feedback!</p>
        </div>

        <form onsubmit="handleReviewSubmit(event)" class="space-y-4 text-left">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-stone-700 mb-1">Couple / Your Name *</label>
              <input type="text" id="rev-coupleName" required value="${couplePrefill}" placeholder="e.g. Rahul & Priya" 
                     class="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-stone-700 mb-1">Wedding Venue & City *</label>
              <input type="text" id="rev-venue" required value="${venuePrefill}" placeholder="e.g. Taj Lake Palace, Udaipur" 
                     class="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-stone-700 mb-1">Package / Service Booked</label>
              <select id="rev-package" class="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none">
                <option value="Royal Combo Deluxe">Royal Combo Deluxe</option>
                <option value="Palace Destination Elite">Palace Destination Elite</option>
                <option value="Cinematic Filmography">Cinematic Filmography</option>
                <option value="Royal Wedding Photography">Royal Wedding Photography</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-stone-700 mb-1">Wedding Month / Date</label>
              <input type="text" id="rev-date" placeholder="e.g. November 2026" 
                     class="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none" />
            </div>
          </div>

          <!-- Star Rating Selector -->
          <div>
            <label class="block text-xs font-semibold text-stone-700 mb-1">Your Rating *</label>
            <div class="flex items-center space-x-3">
              <div id="star-rating-container" class="flex items-center space-x-1.5 text-2xl text-amber-400 select-none">
                <button type="button" onclick="setFormRating(1)" class="star-btn hover:scale-125 transition text-amber-400 cursor-pointer focus:outline-none">★</button>
                <button type="button" onclick="setFormRating(2)" class="star-btn hover:scale-125 transition text-amber-400 cursor-pointer focus:outline-none">★</button>
                <button type="button" onclick="setFormRating(3)" class="star-btn hover:scale-125 transition text-amber-400 cursor-pointer focus:outline-none">★</button>
                <button type="button" onclick="setFormRating(4)" class="star-btn hover:scale-125 transition text-amber-400 cursor-pointer focus:outline-none">★</button>
                <button type="button" onclick="setFormRating(5)" class="star-btn hover:scale-125 transition text-amber-400 cursor-pointer focus:outline-none">★</button>
              </div>
              <span id="rating-label" class="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-300">5.0 - Royal Excellence!</span>
              <input type="hidden" id="rev-rating" value="5" />
            </div>
          </div>

          <!-- Profile Logo Selection -->
          <div>
            <label class="block text-xs font-semibold text-stone-700 mb-1.5">Select Profile Logo *</label>
            <div class="grid grid-cols-3 gap-2.5">
              <label class="flex items-center space-x-2 p-2.5 rounded-xl border border-stone-200 bg-stone-50 cursor-pointer hover:border-gold-500 transition">
                <input type="radio" name="rev-avatarType" value="male" checked class="text-gold-600 focus:ring-gold-500" />
                <span class="text-xs font-semibold text-stone-800 flex items-center space-x-1.5">
                  <svg class="w-4 h-4 text-stone-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a4 4 0 100 8 4 4 0 000-8zm0 10c-3.3 0-6 1.7-6 4v1h12v-1c0-2.3-2.7-4-6-4z"/></svg>
                  <span>Male Logo</span>
                </span>
              </label>
              <label class="flex items-center space-x-2 p-2.5 rounded-xl border border-stone-200 bg-stone-50 cursor-pointer hover:border-gold-500 transition">
                <input type="radio" name="rev-avatarType" value="female" class="text-gold-600 focus:ring-gold-500" />
                <span class="text-xs font-semibold text-stone-800 flex items-center space-x-1.5">
                  <svg class="w-4 h-4 text-rose-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9.24 2 7 4.24 7 7c0 2.22 1.45 4.1 3.5 4.73V13.5c-3.8 0-7 2.2-7 5.5v1h17v-1c0-3.3-3.2-5.5-7-5.5v-1.77c2.05-.63 3.5-2.51 3.5-4.73 0-2.76-2.24-5-5-5z"/></svg>
                  <span>Female Logo</span>
                </span>
              </label>
              <label class="flex items-center space-x-2 p-2.5 rounded-xl border border-stone-200 bg-stone-50 cursor-pointer hover:border-gold-500 transition">
                <input type="radio" name="rev-avatarType" value="couple" class="text-gold-600 focus:ring-gold-500" />
                <span class="text-xs font-semibold text-stone-800 flex items-center space-x-1.5">
                  <svg class="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                  <span>Couple Logo</span>
                </span>
              </label>
            </div>
          </div>

          <!-- Review Message -->
          <div>
            <label class="block text-xs font-semibold text-stone-700 mb-1">Your Review / Love Note *</label>
            <textarea id="rev-quote" required rows="4" placeholder="How was your experience with our photography, candid wedding moments, punctuality, and video delivery?" 
                      class="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none"></textarea>
          </div>

          <button type="submit" class="w-full gold-btn py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow hover:scale-[1.01] transition cursor-pointer">
            Publish Review to Website ✨
          </button>
        </form>
      </div>
    </div>
  `;
}

function setFormRating(num) {
  currentFormRating = num;
  const ratingInput = document.getElementById('rev-rating');
  if (ratingInput) ratingInput.value = num;

  const starBtns = document.querySelectorAll('#star-rating-container .star-btn');
  starBtns.forEach((btn, idx) => {
    if (idx < num) {
      btn.className = 'star-btn hover:scale-125 transition text-amber-400 cursor-pointer focus:outline-none';
    } else {
      btn.className = 'star-btn hover:scale-125 transition text-stone-300 cursor-pointer focus:outline-none';
    }
  });

  const ratingLabel = document.getElementById('rating-label');
  if (ratingLabel) {
    const labels = {
      1: '1.0 - Needs Improvement',
      2: '2.0 - Fair Experience',
      3: '3.0 - Good Work',
      4: '4.0 - Very Good & Polite',
      5: '5.0 - Royal Excellence!'
    };
    ratingLabel.textContent = labels[num] || `${num}.0 Star`;
  }
}

function handleReviewSubmit(e) {
  e.preventDefault();

  const coupleName = document.getElementById('rev-coupleName').value.trim();
  const venue = document.getElementById('rev-venue').value.trim();
  const packageBooked = document.getElementById('rev-package').value;
  const dateVal = document.getElementById('rev-date').value.trim() || 'Recent Wedding';
  const quote = document.getElementById('rev-quote').value.trim();
  const avatarRadio = document.querySelector('input[name="rev-avatarType"]:checked');
  const avatarType = avatarRadio ? avatarRadio.value : 'male';

  const newRev = {
    id: `rev-${Date.now()}`,
    coupleName: coupleName,
    venue: venue,
    date: dateVal,
    avatarType: avatarType,
    rating: currentFormRating,
    packageBooked: packageBooked,
    quote: quote
  };

  reviews.unshift(newRev);
  setDB(DB_KEYS.REVIEWS, reviews);

  closeModal();
  renderReviews();

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  alert(`Thank you, ${coupleName}! Your review has been published on the website.`);
}

// ----------------------------------------------------
// ABOUT SECTION (LIGHT THEME)
// ----------------------------------------------------
function renderAbout() {
  const container = document.getElementById('about-container');
  if (!container) return;

  container.innerHTML = `
    <section id="about" class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-stone-200 scroll-mt-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Artist Photo Collage -->
        <div class="lg:col-span-5 relative">
          <div class="relative rounded-3xl overflow-hidden bg-white p-3 border border-stone-200 shadow-xl">
            <img src="${photographer.photo || 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1000&q=80'}" 
                 alt="${photographer.name}" 
                 class="rounded-2xl w-full aspect-[4/5] object-cover" />
            <div class="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-stone-200 shadow-lg">
              <span class="font-serif text-lg font-bold text-stone-900 block">${photographer.name}</span>
              <span class="text-xs text-gold-700 font-semibold">Lead Cinematographer & Founder</span>
            </div>
          </div>
          <!-- Decorative Stamp -->
          <div class="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-gold-500 p-2 flex items-center justify-center text-center bg-white text-[10px] text-gold-800 font-serif font-bold rotate-12 shadow-xl">
            Vogue Wedding Featured
          </div>
        </div>

        <!-- Bio & Gear Highlights -->
        <div class="lg:col-span-7">
          <span class="text-xs uppercase tracking-widest text-gold-700 font-bold">The Storyteller</span>
          <h2 class="font-serif text-3xl sm:text-5xl font-bold text-stone-900 mt-2 mb-6">
            We Don't Just Shoot Weddings, We Craft Family Heirlooms
          </h2>
          <p class="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            ${photographer.about}
          </p>

          <!-- Production Gear Standard (Proper Heading Level H3 - Issue 20 Fix) -->
          <div class="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm mb-8">
            <h3 class="text-xs uppercase tracking-wider text-amber-800 font-bold mb-3 flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              <span>Cinema-Grade Equipment Standard</span>
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              ${photographer.gearList.map(g => `
                <div class="flex items-center space-x-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>${g}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Follow on Instagram CTA -->
          <div class="flex flex-wrap items-center gap-4">
            <a href="https://instagram.com/${photographer.instagram}" target="_blank" rel="noopener noreferrer" class="px-6 py-3 rounded-full border border-pink-500/40 text-pink-700 bg-pink-50 hover:bg-pink-100 text-xs font-semibold flex items-center space-x-2 transition shadow-sm">
              <svg class="w-4 h-4 fill-current text-pink-600" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              <span>Follow @${photographer.instagram}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  `;
}

// ----------------------------------------------------
// CONTACT & INQUIRIES SECTION (LIGHT THEME)
// ----------------------------------------------------
function renderContact() {
  const container = document.getElementById('contact-container');
  if (!container) return;

  container.innerHTML = `
    <section id="contact" class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-stone-200 scroll-mt-20">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14">
        <span class="text-xs uppercase tracking-widest text-gold-700 font-bold">Get In Touch</span>
        <h2 class="font-serif text-3xl sm:text-5xl font-bold text-stone-900 mt-2 mb-4">
          Let’s Create Timeless Memories Together
        </h2>
        <p class="text-stone-600 text-sm sm:text-base font-normal">
          Have wedding dates in mind? Reach out to check date availability, schedule a coffee chat, or request custom destination quotes.
        </p>
      </div>

      <!-- 3 Contact Cards (Proper Heading Level H3 - Issue 21 Fix) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        <!-- Phone & WhatsApp -->
        <div class="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-xl hover:border-amber-400 transition text-center flex flex-col justify-between">
          <div>
            <div class="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mx-auto mb-4 border border-amber-200">
              <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <h3 class="font-serif text-xl font-bold text-stone-900 mb-1">Call / WhatsApp</h3>
            <p class="text-xs text-stone-500 mb-4">Instant phone consultation & date lock</p>
            <span class="text-sm font-bold text-amber-800 font-mono block">${photographer.phone}</span>
          </div>
          <div class="mt-6 flex flex-col space-y-2.5">
            <a href="tel:${photographer.phone}" class="w-full py-2.5 rounded-xl border border-stone-300 hover:border-amber-500 text-xs font-semibold text-stone-800 bg-stone-50 hover:bg-white transition text-center">Direct Call</a>
            <a href="https://wa.me/${photographer.whatsapp.replace(/[^0-9]/g, '')}?text=Hi!%20I'm%20inquiring%20about%20wedding%20photography." target="_blank" rel="noopener noreferrer" class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white transition flex items-center justify-center space-x-1.5 shadow-sm">
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        <!-- Email & Studio Inquiry (Consistent High-Contrast Solid Action - Issue 7 Fix) -->
        <div class="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-xl hover:border-amber-400 transition text-center flex flex-col justify-between">
          <div>
            <div class="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mx-auto mb-4 border border-amber-200">
              <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <h3 class="font-serif text-xl font-bold text-stone-900 mb-1">Official Email</h3>
            <p class="text-xs text-stone-500 mb-4">Detailed itinerary, proposal & RFP requests</p>
            <span class="text-sm font-bold text-amber-800 font-mono block">${photographer.email}</span>
          </div>
          <div class="mt-6">
            <a href="mailto:${photographer.email}" class="w-full btn-primary py-3 rounded-xl text-xs font-bold text-center block shadow">
              Send Email Inquiry
            </a>
          </div>
        </div>

        <!-- Studio Address & Location (Consistent Title Case - Issue 5 Fix) -->
        <div class="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-xl hover:border-amber-400 transition text-center flex flex-col justify-between">
          <div>
            <div class="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mx-auto mb-4 border border-amber-200">
              <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <h3 class="font-serif text-xl font-bold text-stone-900 mb-1">Studio Locations</h3>
            <p class="text-xs text-stone-500 mb-3">Available for weddings pan-India & globally</p>
            <p class="text-xs text-stone-700 leading-relaxed font-medium">
              📍 Flagship Studio: Defense Colony, New Delhi<br />
              📍 Heritage Lounge: City Palace Road, Udaipur
            </p>
          </div>
          <div class="mt-6">
            <button onclick="openBookingModal()" class="w-full btn-primary py-3 rounded-xl text-xs font-bold shadow">
              Check Date Availability →
            </button>
          </div>
        </div>

      </div>

    </section>
  `;
}

// ----------------------------------------------------
// FOOTER (LIGHT THEME - BALANCED COLUMNS - ISSUE 14 FIX)
// ----------------------------------------------------
function renderFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  container.innerHTML = `
    <footer class="bg-stone-100 border-t border-stone-200 pt-16 pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Balanced 12-Column Grid eliminating dead space (Issue 14 Fix) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          <!-- Brand (Col 4/12) -->
          <div class="lg:col-span-4">
            <span class="font-serif text-2xl font-bold text-stone-900 uppercase tracking-wider block mb-2">
              ${photographer.brandName}
            </span>
            <p class="text-stone-600 text-xs sm:text-sm font-normal leading-relaxed mb-4 max-w-sm">
              Exclusive destination wedding photography & cinematic 4K films across India & abroad.
            </p>
            <div class="text-xs text-stone-700 space-y-1.5 font-medium">
              <div>📍 Studio: New Delhi & Udaipur</div>
              <div>📧 Email: ${photographer.email}</div>
              <div>📞 Phone: ${photographer.phone}</div>
            </div>
          </div>

          <!-- Quick Navigation (Col 2/12) -->
          <div class="lg:col-span-2">
            <h4 class="text-xs uppercase tracking-widest text-amber-800 font-bold mb-4">Quick Links</h4>
            <ul class="space-y-2.5 text-xs text-stone-600 font-medium">
              <li>
                <a href="#portfolio" onclick="handleNavClick('portfolio')" class="hover:text-amber-700 hover:translate-x-1 inline-block transition transform duration-150">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#packages" onclick="handleNavClick('packages')" class="hover:text-amber-700 hover:translate-x-1 inline-block transition transform duration-150">
                  Package
                </a>
              </li>
              <li>
                <a href="#about" onclick="handleNavClick('about')" class="hover:text-amber-700 hover:translate-x-1 inline-block transition transform duration-150">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" onclick="handleNavClick('contact')" class="hover:text-amber-700 hover:translate-x-1 inline-block transition transform duration-150">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <!-- Follow Us (Col 3/12) -->
          <div class="lg:col-span-3">
            <h4 class="text-xs uppercase tracking-widest text-amber-800 font-bold mb-4">Follow Us</h4>
            <p class="text-xs text-stone-600 mb-3.5 leading-relaxed">
              Experience our latest royal wedding films, candid moments & behind-the-scenes on Instagram.
            </p>
            <a href="https://instagram.com/${photographer.instagram}" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-xl border border-pink-300 bg-white hover:bg-pink-50 text-stone-800 hover:text-pink-700 transition shadow-sm font-semibold text-xs group">
              <div class="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-sm flex-shrink-0 group-hover:scale-105 transition transform">
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
              <span class="font-medium text-xs">@${photographer.instagram}</span>
            </a>
          </div>

          <!-- Studio Portal (Col 3/12) -->
          <div class="lg:col-span-3">
            <h4 class="text-xs uppercase tracking-widest text-amber-800 font-bold mb-4">Studio Portal</h4>
            <p class="text-xs text-stone-600 mb-4 leading-relaxed">
              Authorized studio management access for live bookings, inquiries & analytics.
            </p>
            <div class="space-y-2">
              <button onclick="openAdminModal()" class="w-full btn-secondary py-2.5 text-xs font-semibold">
                <span>🔒 Admin Login</span>
              </button>
            </div>
          </div>

        </div>

        <div class="pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500">
          <div>© ${new Date().getFullYear()} ${photographer.brandName}. All Rights Reserved.</div>
          <div class="mt-2 sm:mt-0 flex items-center space-x-4">
            <span>Crafted for Royal Celebrations</span>
            <button onclick="resetDemoData()" class="text-xs text-stone-500 hover:text-stone-800 underline">Reset Demo Data</button>
          </div>
        </div>

      </div>
    </footer>
  `;
}

// ----------------------------------------------------
// DEDICATED CLIENT GALLERY VIEW MODAL (WITH ALWAYS-VISIBLE CLOSE BUTTONS)
// ----------------------------------------------------
let currentGalleryFromAdmin = false;

function returnToAdminFromGallery() {
  currentGalleryFromAdmin = false;
  adminActiveTab = 'qr-manager';
  renderAdminDashboardModal();
}

function openClientGallery(slug, fromAdmin = false) {
  const isAdmin = Boolean(fromAdmin) || (sessionStorage.getItem(DB_KEYS.ADMIN_AUTH) === 'true');
  currentGalleryFromAdmin = isAdmin;
  const gallery = galleries.find(g => g.slug === slug);
  if (!gallery) {
    alert("Gallery not found!");
    return;
  }

  gallery.totalScans = (gallery.totalScans || 0) + 1;
  setDB(DB_KEYS.GALLERIES, galleries);

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return;

  const currentUrl = window.location.origin + window.location.pathname + `?gallery=${gallery.slug}`;

  modalRoot.innerHTML = `
    <!-- Full-screen backdrop -->
    <div class="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
      
      <!-- Modal Card -->
      <div id="client-gallery-modal-card" class="relative w-full max-w-5xl rounded-3xl bg-white border border-stone-200 p-5 sm:p-8 my-4 shadow-2xl">
        
        <!-- Sticky In-Card Header Bar -->
        <div class="flex items-center justify-between pb-4 mb-4 border-b border-stone-200">
          <button onclick="${isAdmin ? 'returnToAdminFromGallery()' : 'closeModal()'}" class="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl ${isAdmin ? 'bg-amber-100 hover:bg-amber-200 text-amber-950' : 'bg-stone-100 hover:bg-stone-200 text-stone-700'} text-xs font-bold transition shadow-sm cursor-pointer">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            <span>Back</span>
          </button>
          
          <span class="text-xs font-serif font-bold text-stone-900 truncate max-w-[200px] sm:max-w-none text-center">
            ${gallery.coupleName} • Official Wedding Gallery
          </span>

          <button onclick="${isAdmin ? 'returnToAdminFromGallery()' : 'closeModal()'}" 
                  class="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 font-bold flex items-center justify-center transition cursor-pointer" 
                  title="${isAdmin ? 'Back to Admin' : 'Close Gallery'}">
            ✕
          </button>
        </div>

        <!-- Gallery Hero Banner -->
        <div class="relative rounded-2xl overflow-hidden mb-8 aspect-[21/9] sm:aspect-[21/7] bg-stone-100">
          <img src="${gallery.coverImage}" alt="${gallery.coupleName}" class="w-full h-full object-cover filter brightness-90" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
            <span class="text-xs uppercase tracking-widest text-gold-300 font-bold">Official Wedding Collection</span>
            <h2 class="font-serif text-3xl sm:text-5xl font-bold text-white mt-1">${gallery.coupleName}</h2>
            <div class="text-xs text-stone-200 mt-2 flex flex-wrap gap-4 font-medium">
              <span>📅 ${gallery.weddingDate}</span>
              <span>📍 ${gallery.venue}</span>
              <span>👁️ ${gallery.totalScans} Family Scans</span>
            </div>
          </div>
        </div>

        <!-- Download & Cloud Sharing Toolbar -->
        <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <span class="text-xs font-bold text-stone-900 block">Download & Share Collection</span>
            <span class="text-[11px] text-stone-600">Available in Print High-Resolution (Original 24MP) and Social Media sizes.</span>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <!-- Download Zip Button -->
            <button onclick="simulateDownloadZip('${gallery.coupleName}')" class="gold-btn px-4 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow-sm">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              <span>Download All (ZIP)</span>
            </button>

            <!-- Google Drive Button -->
            <a href="${gallery.googleDriveLink}" target="_blank" rel="noopener noreferrer" 
               class="px-4 py-2.5 rounded-xl border border-stone-300 hover:border-gold-500 bg-white text-xs font-semibold text-stone-800 flex items-center space-x-1.5 transition shadow-sm">
              <span>Google Drive Folder</span>
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>

            <!-- WhatsApp Share Button -->
            <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(`View our royal wedding photos: ${currentUrl}`)}" 
               target="_blank" rel="noopener noreferrer"
               class="px-4 py-2.5 rounded-xl border border-emerald-500/40 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 text-xs font-bold flex items-center space-x-1.5 transition shadow-sm">
              <span>Share to Family</span>
            </a>

            <!-- Write Client Review Button -->
            <button onclick="openReviewModal('${gallery.coupleName}', '${gallery.venue}')" 
                    class="px-4 py-2.5 rounded-xl border border-amber-400 bg-amber-50 hover:bg-amber-100 text-amber-950 text-xs font-bold flex items-center space-x-1.5 transition shadow-sm cursor-pointer">
              <span>⭐ Rate & Review Us</span>
            </button>
          </div>
        </div>

        <!-- Photos Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          ${gallery.photos.map((p, idx) => `
            <div class="group relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-100 cursor-pointer shadow-sm hover:shadow-md border border-stone-200" onclick="openClientGalleryPhoto('${gallery.id}', ${idx})">
              <img src="${p.url}" alt="${p.title}" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition p-3 flex flex-col justify-end">
                <span class="text-xs text-white font-medium">${p.title}</span>
                <span class="text-[10px] text-gold-300">Tap to View High-Res / Gallery</span>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Bottom Footer Info -->
        <div class="mt-10 pt-6 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <div>
            Photographed by ${photographer.brandName} • Unique Gallery ID: <span class="font-mono text-gold-700 font-bold">${gallery.clientCode}</span>
          </div>
        </div>

      </div>
    </div>
  `;
}

function simulateDownloadZip(coupleName) {
  alert(`Preparing high-resolution ZIP file for ${coupleName}... In a production environment, this triggers a direct cloud download!`);
}

function checkUrlParamsForGallery() {
  const urlParams = new URLSearchParams(window.location.search);
  const galParam = urlParams.get('gallery');
  if (galParam) {
    openClientGallery(galParam);
  }
}

// ----------------------------------------------------
// MULTI-PHOTO LIGHTBOX & GALLERY VIEWER
// ----------------------------------------------------
let currentLightbox = {
  photos: [],
  currentIndex: 0,
  couple: '',
  location: ''
};

function openPortfolioPhotos(idxOrId = 0) {
  let index = 0;
  if (typeof idxOrId === 'number') {
    index = idxOrId;
  } else {
    index = portfolio.findIndex(p => p.id === idxOrId);
    if (index < 0) index = 0;
  }

  // Load all 20 demo showcase photos into the Lightbox viewer
  const photosList = portfolio.map((item, i) => ({
    title: item.title || `Royal Wedding Photo #${i + 1}`,
    url: item.image,
    couple: item.couple || 'Aura Cinematics Showcase',
    location: item.location || 'Royal Destination Wedding'
  }));

  currentLightbox = {
    photos: photosList,
    currentIndex: Math.max(0, Math.min(index, photosList.length - 1)),
    couple: portfolio[index]?.couple || 'Aura Cinematics Showcase',
    location: portfolio[index]?.location || 'Royal Destination Wedding'
  };

  renderLightboxModal();
}

function openClientGalleryPhoto(galleryId, initialIndex = 0) {
  const gal = galleries.find(g => g.id === galleryId);
  if (!gal) return;

  const photosList = (gal.photos && gal.photos.length > 0)
    ? gal.photos
    : [{ title: gal.coupleName, url: gal.coverImage }];

  currentLightbox = {
    photos: photosList,
    currentIndex: Math.max(0, Math.min(initialIndex, photosList.length - 1)),
    couple: gal.coupleName || '',
    location: gal.venue || '',
    parentGallerySlug: gal.slug
  };

  renderLightboxModal();
}

function openPhotoModal(source, titleOrIndex = 0, couple = '', location = '') {
  // If source is a portfolio item ID:
  const itemIdx = portfolio.findIndex(p => p.id === source);
  if (itemIdx >= 0) {
    return openPortfolioPhotos(itemIdx);
  }

  // If source matches a portfolio photo image URL:
  const photoByUrlIdx = portfolio.findIndex(p => p.image === source);
  if (photoByUrlIdx >= 0) {
    return openPortfolioPhotos(photoByUrlIdx);
  }

  // If source is a gallery ID:
  const gal = galleries.find(g => g.id === source);
  if (gal) {
    return openClientGalleryPhoto(gal.id, typeof titleOrIndex === 'number' ? titleOrIndex : 0);
  }

  // Fallback single image
  currentLightbox = {
    photos: [{ title: typeof titleOrIndex === 'string' ? titleOrIndex : 'Wedding Photo', url: source }],
    currentIndex: 0,
    couple: couple,
    location: location
  };

  renderLightboxModal();
}

function renderLightboxModal() {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return;

  const currentPhoto = currentLightbox.photos[currentLightbox.currentIndex] || { url: '', title: '' };
  const total = currentLightbox.photos.length;
  const isMulti = total > 1;

  modalRoot.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 backdrop-blur-md overflow-y-auto" style="background-color: rgba(10, 10, 14, 0.94);" onclick="closeModal()">
      <div class="relative w-full max-w-5xl flex flex-col items-center my-auto py-2" onclick="event.stopPropagation()">
        
        <!-- Top Bar inside Modal -->
        <div class="w-full flex items-center justify-between px-2 sm:px-4 py-2 mb-2">
          <div class="flex items-center space-x-2">
            <span class="px-3.5 py-1.5 rounded-full bg-stone-900 border border-amber-400/50 text-amber-300 text-xs font-bold tracking-wider shadow-md">
              Aura Cinematics Showcase
            </span>
          </div>

          <div class="flex items-center space-x-3">
            <span id="lightbox-photo-counter" class="px-3.5 py-1.5 rounded-full bg-stone-900 border border-stone-600 text-amber-200 text-xs font-mono font-bold shadow-md">
              Photo ${currentLightbox.currentIndex + 1} of ${total}
            </span>
            <!-- Single clean X close button -->
            <button onclick="closeModal()" class="w-8 h-8 rounded-full bg-white text-stone-900 hover:bg-stone-200 shadow-xl flex items-center justify-center font-bold text-sm transition cursor-pointer" title="Close (Esc)">
              ✕
            </button>
          </div>
        </div>

        <!-- Main Photo Stage with Left/Right Arrows -->
        <div class="relative w-full flex items-center justify-center my-1 select-none">
          
          ${isMulti ? `
            <!-- Previous Photo Button -->
            <button onclick="prevLightboxPhoto(event)" 
                    class="absolute left-1 sm:left-3 z-20 w-11 h-11 rounded-full bg-stone-900/90 hover:bg-stone-900 text-white hover:text-amber-400 border border-white/40 shadow-2xl flex items-center justify-center transition hover:scale-110 cursor-pointer backdrop-blur-sm"
                    title="Previous Photo (Left Arrow)">
              <svg class="w-6 h-6 -ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>
          ` : ''}

          <!-- Main Image Display -->
          <div class="relative max-h-[70vh] sm:max-h-[76vh] flex items-center justify-center overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl bg-black/60">
            <img id="lightbox-main-img" src="${currentPhoto.url}" alt="${currentPhoto.title || ''}" 
                 oncontextmenu="return false;"
                 class="max-h-[70vh] sm:max-h-[76vh] w-auto max-w-full object-contain transition duration-200 select-none" />
          </div>

          ${isMulti ? `
            <!-- Next Photo Button -->
            <button onclick="nextLightboxPhoto(event)" 
                    class="absolute right-1 sm:right-3 z-20 w-11 h-11 rounded-full bg-stone-900/90 hover:bg-stone-900 text-white hover:text-amber-400 border border-white/40 shadow-2xl flex items-center justify-center transition hover:scale-110 cursor-pointer backdrop-blur-sm"
                    title="Next Photo (Right Arrow)">
              <svg class="w-6 h-6 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>
          ` : ''}
        </div>

        <!-- Multi-photo Thumbnails Strip -->
        ${isMulti ? `
          <div class="w-full mt-3 px-3 py-2 rounded-2xl bg-stone-950/70 border border-white/10 backdrop-blur-sm flex items-center justify-center space-x-2 overflow-x-auto scrollbar-none">
            ${currentLightbox.photos.map((p, idx) => `
              <button onclick="goToLightboxPhoto(${idx})" 
                      class="lightbox-thumb-btn relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition duration-200 cursor-pointer ${
                        idx === currentLightbox.currentIndex 
                          ? 'border-amber-400 ring-2 ring-amber-400/50 scale-105 opacity-100 shadow-md' 
                          : 'border-white/30 opacity-60 hover:opacity-100 hover:border-white'
                      }">
                <img src="${p.url}" alt="${p.title}" class="w-full h-full object-cover select-none" oncontextmenu="return false;" />
              </button>
            `).join('')}
          </div>
        ` : ''}

      </div>
    </div>
  `;
}

function updateLightboxView() {
  const currentPhoto = currentLightbox.photos[currentLightbox.currentIndex];
  if (!currentPhoto) return;

  const imgEl = document.getElementById('lightbox-main-img');
  const counterEl = document.getElementById('lightbox-photo-counter');

  if (imgEl) {
    imgEl.style.opacity = '0.3';
    setTimeout(() => {
      imgEl.src = currentPhoto.url;
      imgEl.alt = currentPhoto.title || '';
      imgEl.style.opacity = '1';
    }, 120);
  }

  if (counterEl) {
    counterEl.textContent = `Photo ${currentLightbox.currentIndex + 1} of ${currentLightbox.photos.length}`;
  }

  // Update active thumbnail border
  document.querySelectorAll('.lightbox-thumb-btn').forEach((btn, idx) => {
    if (idx === currentLightbox.currentIndex) {
      btn.className = 'lightbox-thumb-btn relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 border-amber-400 ring-2 ring-amber-400/50 scale-105 opacity-100 shadow-md transition duration-200 cursor-pointer';
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      btn.className = 'lightbox-thumb-btn relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 border-white/30 opacity-60 hover:opacity-100 hover:border-white transition duration-200 cursor-pointer';
    }
  });
}

function nextLightboxPhoto(e) {
  if (e) e.stopPropagation();
  if (!currentLightbox.photos || currentLightbox.photos.length <= 1) return;
  currentLightbox.currentIndex = (currentLightbox.currentIndex + 1) % currentLightbox.photos.length;
  updateLightboxView();
}

function prevLightboxPhoto(e) {
  if (e) e.stopPropagation();
  if (!currentLightbox.photos || currentLightbox.photos.length <= 1) return;
  currentLightbox.currentIndex = (currentLightbox.currentIndex - 1 + currentLightbox.photos.length) % currentLightbox.photos.length;
  updateLightboxView();
}

function goToLightboxPhoto(index) {
  if (!currentLightbox.photos || !currentLightbox.photos[index]) return;
  currentLightbox.currentIndex = index;
  updateLightboxView();
}

function openVideoModal(videoUrl, title) {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return;

  modalRoot.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md" onclick="closeModal()">
      <div class="relative max-w-3xl w-full" onclick="event.stopPropagation()">
        <!-- Single clean X close button -->
        <button onclick="closeModal()" class="absolute -top-3 -right-3 sm:top-2 sm:right-2 z-10 w-8 h-8 rounded-full bg-white text-stone-800 hover:bg-stone-100 shadow-xl flex items-center justify-center font-bold text-sm transition cursor-pointer" title="Close">
          ✕
        </button>

        <div class="aspect-video w-full rounded-2xl overflow-hidden border-2 border-white bg-black shadow-2xl">
          <iframe src="${videoUrl}" class="w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="mt-4 text-center flex items-center justify-between px-2">
          <div>
            <h4 class="font-serif text-lg font-bold text-white text-left">${title}</h4>
            <span class="text-xs text-amber-300 font-semibold block text-left">4K Cinematic Wedding Film</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function closeModal() {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return;

  // If closing lightbox photo opened inside client gallery, return to the client gallery:
  if (currentLightbox && currentLightbox.parentGallerySlug) {
    const slug = currentLightbox.parentGallerySlug;
    const fromAdmin = currentGalleryFromAdmin || (sessionStorage.getItem(DB_KEYS.ADMIN_AUTH) === 'true');
    currentLightbox = { photos: [], currentIndex: 0, couple: '', location: '', parentGallerySlug: null };
    openClientGallery(slug, fromAdmin);
    return;
  }

  // If inside gallery opened from admin panel or admin is authenticated and client gallery is open:
  if (currentGalleryFromAdmin || (sessionStorage.getItem(DB_KEYS.ADMIN_AUTH) === 'true' && document.getElementById('client-gallery-modal-card'))) {
    returnToAdminFromGallery();
    return;
  }

  // If manual booking modal opened from admin and admin is authenticated:
  if (bookingStartedFromAdmin && sessionStorage.getItem(DB_KEYS.ADMIN_AUTH) === 'true') {
    bookingStartedFromAdmin = false;
    adminActiveTab = 'bookings';
    renderAdminDashboardModal();
    return;
  }

  modalRoot.innerHTML = '';
}

// ----------------------------------------------------
// BOOKING & APPOINTMENT WIZARD MODAL
// ----------------------------------------------------
let selectedBookingPackageId = 'pkg-combo';
let bookingStartedFromAdmin = false;

function openBookingModal(preSelectedPackageId, fromAdmin = false) {
  bookingStartedFromAdmin = Boolean(fromAdmin);
  if (preSelectedPackageId) {
    selectedBookingPackageId = preSelectedPackageId;
  }

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return;

  const currentPkg = packages.find(p => p.id === selectedBookingPackageId) || packages[0];
  const initialPricing = getPackageDiscountedPrice(currentPkg);
  const today = new Date().toISOString().split('T')[0];

  modalRoot.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div class="relative w-full max-w-2xl rounded-3xl bg-white border border-stone-200 p-6 sm:p-8 my-8 shadow-2xl">
        
        <button onclick="closeModal()" class="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 flex items-center justify-center transition">
          ✕
        </button>

        <div class="mb-6">
          <span class="text-xs uppercase tracking-widest text-gold-700 font-bold">Reserve Your Wedding Dates</span>
          <h3 class="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">Book Your Wedding Shoot</h3>
          <p class="text-xs text-stone-500 mt-1">Fill in your celebration details. Lock your date with an advance deposit.</p>
        </div>

        <form id="booking-form" onsubmit="handleBookingSubmit(event)" class="space-y-4">
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-stone-700 mb-1">Couple / Contact Name *</label>
              <input type="text" id="bk-clientName" required placeholder="e.g. Rahul & Priya" 
                     class="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:border-gold-500 focus:bg-white focus:outline-none" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-stone-700 mb-1">Phone / WhatsApp Number *</label>
              <input type="tel" id="bk-phone" required placeholder="e.g. +91 98765 43210" 
                     class="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:border-gold-500 focus:bg-white focus:outline-none" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-stone-700 mb-1">Email Address *</label>
              <input type="email" id="bk-email" required placeholder="e.g. priya@gmail.com" 
                     class="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:border-gold-500 focus:bg-white focus:outline-none" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-stone-700 mb-1">Primary Wedding Date *</label>
              <input type="date" id="bk-date" min="${today}" required 
                     class="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:border-gold-500 focus:bg-white focus:outline-none" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-stone-700 mb-1">Wedding Venue / Hotel *</label>
              <input type="text" id="bk-venue" required placeholder="e.g. Taj Lake Palace / Banquet Hall" 
                     class="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:border-gold-500 focus:bg-white focus:outline-none" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-stone-700 mb-1">City & State *</label>
              <input type="text" id="bk-city" required placeholder="e.g. Udaipur, Rajasthan" 
                     class="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:border-gold-500 focus:bg-white focus:outline-none" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-stone-700 mb-1">Select Photography & Cinema Package *</label>
            <select id="bk-package" onchange="updateBookingPackageSummary()" 
                    class="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-sm focus:border-gold-500 focus:bg-white focus:outline-none font-medium">
              ${packages.map(p => {
                const pr = getPackageDiscountedPrice(p);
                const priceLabel = pr.hasOffer 
                  ? `${formatINR(pr.finalPrice)} (Festive Offer: Save ${formatINR(pr.discount)})` 
                  : formatINR(p.price);
                return `
                  <option value="${p.id}" ${p.id === selectedBookingPackageId ? 'selected' : ''}>
                    ${p.title} (${p.badge}) — ${priceLabel}
                  </option>
                `;
              }).join('')}
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-stone-700 mb-1">Special Notes / Ritual Details</label>
            <textarea id="bk-notes" rows="2" placeholder="e.g. 2 Days event (Haldi in morning, Wedding evening). Guest count ~300." 
                      class="w-full px-4 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none"></textarea>
          </div>

          <div id="booking-cost-summary" class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-center justify-between">
            <div>
              <span class="text-xs text-stone-600 block">
                Total Package Investment: 
                <span id="summary-total" class="font-bold text-stone-900">
                  ${initialPricing.hasOffer ? `
                    <span class="line-through text-xs text-stone-600 mr-1">${formatINR(initialPricing.originalPrice)}</span>
                    <strong class="gold-text">${formatINR(initialPricing.finalPrice)}</strong>
                    <span class="text-[10px] text-emerald-800 font-bold bg-emerald-100 px-1.5 py-0.5 rounded ml-1">Festive Save ${formatINR(initialPricing.discount)}</span>
                  ` : `
                    <strong>${formatINR(currentPkg.price)}</strong>
                  `}
                </span>
              </span>
              <span class="text-xs text-gold-700 font-semibold block mt-1">Token Deposit to Lock Date:</span>
            </div>
            <div class="text-right">
              <span id="summary-deposit" class="font-serif text-2xl font-bold gold-text">${formatINR(currentPkg.deposit)}</span>
              <span class="text-[10px] text-stone-500 block">Balance due on wedding day</span>
            </div>
          </div>

          <div class="pt-2 flex flex-col sm:flex-row gap-3">
            <button type="submit" class="w-full sm:flex-1 gold-btn py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center space-x-2 shadow-md">
              <span>Proceed to Pay Advance (${formatINR(currentPkg.deposit)})</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
            <button type="button" onclick="closeModal()" class="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-stone-300 text-xs font-semibold text-stone-600 hover:bg-stone-50">
              Cancel
            </button>
          </div>

        </form>

      </div>
    </div>
  `;
}

function updateBookingPackageSummary() {
  const pkgSelect = document.getElementById('bk-package');
  if (!pkgSelect) return;
  const pkgId = pkgSelect.value;
  const pkg = packages.find(p => p.id === pkgId);
  if (!pkg) return;

  const pricing = getPackageDiscountedPrice(pkg);
  const totalElem = document.getElementById('summary-total');
  const depositElem = document.getElementById('summary-deposit');
  if (totalElem) {
    if (pricing.hasOffer) {
      totalElem.innerHTML = `
        <span class="line-through text-xs text-stone-600 mr-1">${formatINR(pricing.originalPrice)}</span>
        <strong class="gold-text">${formatINR(pricing.finalPrice)}</strong>
        <span class="text-[10px] text-emerald-800 font-bold bg-emerald-100 px-1.5 py-0.5 rounded ml-1">Festive Save ${formatINR(pricing.discount)}</span>
      `;
    } else {
      totalElem.innerHTML = `<strong>${formatINR(pkg.price)}</strong>`;
    }
  }
  if (depositElem) depositElem.textContent = formatINR(pricing.deposit);
}

function handleBookingSubmit(e) {
  e.preventDefault();

  const pkgId = document.getElementById('bk-package').value;
  const pkg = packages.find(p => p.id === pkgId) || packages[0];
  const pricing = getPackageDiscountedPrice(pkg);

  const bookingData = {
    id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
    clientName: document.getElementById('bk-clientName').value.trim(),
    phone: document.getElementById('bk-phone').value.trim(),
    email: document.getElementById('bk-email').value.trim(),
    weddingDate: document.getElementById('bk-date').value,
    venueName: document.getElementById('bk-venue').value.trim(),
    city: document.getElementById('bk-city').value.trim(),
    packageId: pkg.id,
    packageName: pkg.title,
    packagePrice: pricing.finalPrice,
    originalPrice: pricing.originalPrice,
    offerDiscount: pricing.discount,
    offerApplied: pricing.hasOffer ? seasonalOffer.badge : null,
    depositPaid: pkg.deposit,
    depositPaid: pkg.deposit,
    paymentStatus: "Pending Verification",
    bookingStatus: "Pending Deposit",
    createdAt: new Date().toISOString().split('T')[0],
    notes: document.getElementById('bk-notes').value.trim()
  };

  openPaymentModal(bookingData);
}

// ----------------------------------------------------
// ONLINE PAYMENT MODAL (DIRECT UPI)
// ----------------------------------------------------
function openPaymentModal(booking) {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return;

  const upiString = `upi://pay?pa=${photographer.upiId}&pn=${encodeURIComponent(photographer.brandName)}&am=${booking.depositPaid}&cu=INR&tn=${encodeURIComponent(`Booking ${booking.id} - ${booking.clientName}`)}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiString)}&color=0-0-0&bgcolor=ffffff`;

  modalRoot.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div class="relative w-full max-w-lg rounded-3xl bg-white border border-stone-200 p-6 sm:p-8 text-center shadow-2xl">
        
        <button onclick="closeModal()" class="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 flex items-center justify-center transition">
          ✕
        </button>

        <div class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold mb-3">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Zero Extra Fees (Direct Bank UPI)</span>
        </div>

        <h3 class="font-serif text-2xl font-bold text-stone-900">Scan & Pay Advance Token</h3>
        <p class="text-xs text-stone-600 mt-1">
          Locking date for <strong class="text-gold-700 font-bold">${booking.clientName}</strong> on <strong>${booking.weddingDate}</strong>
        </p>

        <div class="my-4 py-3 px-4 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
          <span class="text-xs text-stone-600 font-medium">Advance Amount Payable:</span>
          <span class="font-serif text-2xl font-bold gold-text">${formatINR(booking.depositPaid)}</span>
        </div>

        <div class="my-4 inline-block p-4 rounded-2xl bg-white border border-stone-200 shadow-md">
          <img src="${qrCodeUrl}" alt="Scan UPI QR" class="w-48 h-48 sm:w-52 sm:h-52 object-contain mx-auto" />
          <span class="text-[11px] text-stone-600 font-mono block mt-2 font-bold">Scan with GPay, PhonePe, Paytm, or BHIM</span>
        </div>

        <div class="flex items-center justify-center space-x-2 text-xs text-stone-600 mb-6">
          <span>UPI ID: <strong class="text-stone-900 font-mono font-bold">${photographer.upiId}</strong></span>
          <button onclick="navigator.clipboard.writeText('${photographer.upiId}'); alert('UPI ID copied: ${photographer.upiId}')" 
                  class="px-2 py-0.5 rounded bg-stone-100 border text-gold-700 hover:bg-stone-200 text-[10px] font-bold">
            Copy
          </button>
        </div>

        <div class="space-y-3 pt-3 border-t border-stone-100 text-left">
          <label class="block text-xs font-semibold text-stone-700">Enter UPI UTR / Transaction Reference ID (Optional):</label>
          <input type="text" id="upi-ref-id" placeholder="e.g. 4312XXXXXXXX (12 digits)" 
                 class="w-full px-4 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none" />

          <button onclick="finalizeBookingPayment('${booking.id}', '${booking.clientName}', '${booking.phone}', '${booking.weddingDate}', '${booking.venueName}', '${booking.city}', '${booking.packageId}', '${booking.packageName}', ${booking.packagePrice}, ${booking.depositPaid}, '${booking.email}')" 
                  class="w-full gold-btn py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 shadow-md">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>I Have Paid — Confirm Booking</span>
          </button>
        </div>

      </div>
    </div>
  `;
}

function finalizeBookingPayment(id, clientName, phone, weddingDate, venueName, city, packageId, packageName, packagePrice, depositPaid, email) {
  const refId = document.getElementById('upi-ref-id') ? document.getElementById('upi-ref-id').value.trim() : '';

  const newBooking = {
    id: id,
    clientName: clientName,
    phone: phone,
    email: email,
    weddingDate: weddingDate,
    venueName: venueName,
    city: city,
    packageId: packageId,
    packageName: packageName,
    packagePrice: packagePrice,
    depositPaid: depositPaid,
    paymentStatus: "Advance Paid",
    bookingStatus: "Confirmed",
    refId: refId || `UPI-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString().split('T')[0]
  };

  bookings.unshift(newBooking);
  setDB(DB_KEYS.BOOKINGS, bookings);

  if (window.confetti) {
    window.confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  showBookingSuccessModal(newBooking);
}

function showBookingSuccessModal(booking) {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return;

  modalRoot.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div class="relative w-full max-w-md rounded-3xl bg-white border border-emerald-300 p-6 sm:p-8 text-center shadow-2xl">
        
        <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-4">
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        </div>

        <h3 class="font-serif text-2xl font-bold text-stone-900">Booking Confirmed!</h3>
        <p class="text-xs text-stone-600 mt-2">
          Your wedding date is now locked in our official shoot calendar.
        </p>

        <div class="my-5 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-left text-xs space-y-2">
          <div class="flex justify-between border-b border-stone-200 pb-2">
            <span class="text-stone-500">Booking Ref:</span>
            <span class="font-mono text-gold-700 font-bold">${booking.id}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-stone-500">Couple:</span>
            <span class="text-stone-900 font-semibold">${booking.clientName}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-stone-500">Wedding Date:</span>
            <span class="text-stone-900 font-semibold">${booking.weddingDate}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-stone-500">Venue:</span>
            <span class="text-stone-900 font-semibold">${booking.venueName}, ${booking.city}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-stone-500">Package:</span>
            <span class="text-stone-900 font-semibold">${booking.packageName}</span>
          </div>
          <div class="flex justify-between border-t border-stone-200 pt-2">
            <span class="text-stone-500">Advance Paid:</span>
            <span class="text-emerald-700 font-bold text-sm">${formatINR(booking.depositPaid)}</span>
          </div>
        </div>

        <a href="https://wa.me/${photographer.whatsapp}?text=Hi%20${encodeURIComponent(photographer.name)},%20I%20just%20completed%20the%20advance%20booking%20for%20${encodeURIComponent(booking.clientName)}%20(Ref:%20${booking.id})%20on%20${booking.weddingDate}!%20Please%20confirm." 
           target="_blank" rel="noopener noreferrer"
           class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center space-x-2 transition mb-3 shadow">
          <span>Send Booking Receipt on WhatsApp</span>
        </a>

        <button onclick="closeModal()" class="w-full py-2.5 rounded-xl border border-stone-300 text-xs font-semibold text-stone-600 hover:bg-stone-50">
          Back to Website
        </button>

      </div>
    </div>
  `;
}

// ----------------------------------------------------
// CLIENT PORTAL & QR SCANNER MODAL
// ----------------------------------------------------
function openQRScannerModal() {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return;

  modalRoot.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div class="relative w-full max-w-md rounded-3xl bg-white border border-stone-200 p-6 sm:p-8 text-center shadow-2xl">
        
        <button onclick="closeModal()" class="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 flex items-center justify-center transition cursor-pointer">
          ✕
        </button>

        <div class="w-12 h-12 rounded-full bg-gold-100 text-gold-700 mx-auto flex items-center justify-center mb-3">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
        </div>

        <h3 class="font-serif text-2xl font-bold text-stone-900">Access Your Photos</h3>
        <p class="text-xs text-stone-600 mt-1 mb-6">
          Enter your private wedding access code to unlock your event gallery.
        </p>

        <div class="space-y-3 mb-5 text-left">
          <label class="block text-xs font-semibold text-stone-700">Enter Access Code / PIN:</label>
          <div class="flex space-x-2">
            <input type="text" id="qr-client-code" placeholder="e.g. KM2026 or RS2026"
                   onkeydown="if(event.key==='Enter') handleClientCodeSubmit()"
                   class="flex-1 px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 font-mono text-center tracking-widest text-sm focus:border-gold-500 focus:bg-white focus:outline-none font-bold uppercase" autofocus />
            <button onclick="handleClientCodeSubmit()" class="gold-btn px-6 py-3 rounded-xl font-bold text-xs uppercase shadow-sm cursor-pointer hover:scale-105 transition">
              Unlock
            </button>
          </div>
        </div>

        <div class="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-left space-y-1.5 mb-2">
          <div class="flex items-center space-x-2 text-stone-900 text-xs font-bold">
            <svg class="w-4 h-4 text-gold-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            <span>🔒 100% Private & Protected</span>
          </div>
          <p class="text-[11px] text-stone-500 leading-relaxed">
            Your wedding memories are strictly confidential. Photos can only be accessed with the unique wedding code printed on your invitation card or table QR tent.
          </p>
        </div>

        <p class="text-[10px] text-stone-400 mt-3 leading-relaxed">
          💡 You can also scan your table tent QR card directly with your phone camera to open automatically.
        </p>

      </div>
    </div>
  `;
}

function handleClientCodeSubmit() {
  const codeInput = document.getElementById('qr-client-code');
  if (!codeInput) return;
  const val = codeInput.value.trim().toUpperCase();
  if (!val) {
    alert("Please enter your wedding access code.");
    return;
  }

  const found = galleries.find(g => (g.clientCode && g.clientCode.toUpperCase() === val) || (g.slug && g.slug.toUpperCase() === val));
  if (found) {
    closeModal();
    openClientGallery(found.slug);
  } else {
    alert(`Invalid Access Code "${val}". Please check the code on your invitation/table card or contact the couple.`);
  }
}

// ----------------------------------------------------
// PHOTOGRAPHER ADMIN PORTAL & ANALYTICS DASHBOARD
// ----------------------------------------------------
let adminActiveTab = 'bookings';

function openAdminModal() {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return;

  const isLoggedIn = sessionStorage.getItem(DB_KEYS.ADMIN_AUTH) === 'true';

  if (!isLoggedIn) {
    renderAdminLoginModal();
  } else {
    renderAdminDashboardModal();
  }
}

function renderAdminLoginModal() {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return;

  const adminCreds = getDB(DB_KEYS.ADMIN_CREDS, {
    email: 'admin@auracinematics.com',
    password: 'admin123'
  });

  modalRoot.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div class="relative w-full max-w-md rounded-3xl bg-white border border-stone-200 p-6 sm:p-8 text-center shadow-2xl">
        <button onclick="closeModal()" class="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 flex items-center justify-center transition">
          ✕
        </button>

        <div class="w-12 h-12 rounded-full bg-gold-100 text-gold-700 mx-auto flex items-center justify-center mb-3">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
        </div>

        <h3 class="font-serif text-2xl font-bold text-stone-900">Photographer Studio Login</h3>
        <p class="text-xs text-stone-600 mt-1 mb-6">Enter your studio credentials to access live analytics & management.</p>

        <form onsubmit="handleAdminLogin(event)" class="space-y-4 text-left">
          <div id="admin-login-error" class="hidden p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-semibold text-center">
          </div>

          <div>
            <label class="block text-xs font-semibold text-stone-700 mb-1">Studio Email</label>
            <input type="email" id="admin-email" value="${adminCreds.email}" required 
                   class="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-stone-700 mb-1">Password</label>
            <input type="password" id="admin-password" value="${adminCreds.password}" required 
                   class="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none" />
          </div>

          <div class="p-3 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900">
            Studio Credentials: <br />
            Email: <strong class="font-bold">${adminCreds.email}</strong> &bull; Password: <strong class="font-bold">${adminCreds.password}</strong>
          </div>

          <button type="submit" class="w-full gold-btn py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow">
            Unlock Admin Dashboard
          </button>
        </form>
      </div>
    </div>
  `;
}

function handleAdminLogin(e) {
  e.preventDefault();
  const emailInput = (document.getElementById('admin-email').value || '').trim().toLowerCase();
  const passInput = (document.getElementById('admin-password').value || '').trim();
  const errorElem = document.getElementById('admin-login-error');

  const adminCreds = getDB(DB_KEYS.ADMIN_CREDS, {
    email: 'admin@auracinematics.com',
    password: 'admin123'
  });

  const validEmails = [
    adminCreds.email.toLowerCase(),
    photographer.email ? photographer.email.toLowerCase() : ''
  ].filter(Boolean);

  const isValidEmail = validEmails.includes(emailInput);
  const isValidPass = (passInput === adminCreds.password);

  if (isValidEmail && isValidPass) {
    if (errorElem) errorElem.classList.add('hidden');
    sessionStorage.setItem(DB_KEYS.ADMIN_AUTH, 'true');
    renderAdminDashboardModal();
  } else {
    if (errorElem) {
      errorElem.classList.remove('hidden');
      if (!isValidEmail && !isValidPass) {
        errorElem.textContent = '❌ Galat Email aur Password! Kripya sahi credentials dalein.';
      } else if (!isValidEmail) {
        errorElem.textContent = '❌ Galat Email address! Kripya registered admin email dalein.';
      } else {
        errorElem.textContent = '❌ Galat Password! Kripya sahi admin password dalein.';
      }
    } else {
      alert("Invalid email or password!");
    }
    const passField = document.getElementById('admin-password');
    if (passField) {
      passField.focus();
      passField.select();
    }
  }
}

function handleAdminLogout() {
  sessionStorage.removeItem(DB_KEYS.ADMIN_AUTH);
  renderAdminLoginModal();
}

function renderAdminDashboardModal() {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return;

  const totalRevenue = bookings.reduce((sum, b) => sum + (b.packagePrice || 0), 0);
  const totalAdvance = bookings.reduce((sum, b) => sum + (b.depositPaid || 0), 0);
  const pendingRevenue = totalRevenue - totalAdvance;
  const totalScans = galleries.reduce((sum, g) => sum + (g.totalScans || 0), 0);
  const totalDownloads = galleries.reduce((sum, g) => sum + (g.totalDownloads || 0), 0);

  modalRoot.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto">
      <div class="relative w-full max-w-6xl min-h-[85vh] rounded-3xl bg-white border border-stone-200 p-4 sm:p-8 my-6 sm:my-8 shadow-2xl flex flex-col justify-between">
        
        <div>
          <div class="flex flex-wrap items-center justify-between pb-4 border-b border-stone-200 gap-4">
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <div>
                <h3 class="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-none">${photographer.brandName} Studio Portal</h3>
                <span class="text-[11px] text-stone-500 font-medium">Logged in as ${photographer.name}</span>
              </div>
            </div>

            <div class="flex items-center space-x-2">
              <button onclick="handleAdminLogout()" class="px-3 py-1.5 rounded-lg border border-red-300 text-red-700 hover:bg-red-50 text-xs font-semibold">
                Logout
              </button>
              <button onclick="closeModal()" class="w-8 h-8 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 flex items-center justify-center">
                ✕
              </button>
            </div>
          </div>

          <div class="flex items-center space-x-1 sm:space-x-3 overflow-x-auto py-3 border-b border-stone-200 text-xs font-semibold">
            <button data-admin-tab="bookings" onclick="switchAdminTab('bookings')" class="px-3.5 py-2 rounded-xl whitespace-nowrap transition ${adminActiveTab === 'bookings' ? 'gold-btn' : 'text-stone-700 hover:bg-stone-100'}">
              📅 Bookings (${bookings.length})
            </button>
            <button data-admin-tab="analytics" onclick="switchAdminTab('analytics')" class="px-3.5 py-2 rounded-xl whitespace-nowrap transition ${adminActiveTab === 'analytics' ? 'gold-btn' : 'text-stone-700 hover:bg-stone-100'}">
              📊 Analytics Hub
            </button>
            <button data-admin-tab="offers-mgr" onclick="switchAdminTab('offers-mgr')" class="px-3.5 py-2 rounded-xl whitespace-nowrap transition ${adminActiveTab === 'offers-mgr' ? 'gold-btn' : 'text-stone-700 hover:bg-stone-100'}">
              🪔 Festive Offers (${seasonalOffer && seasonalOffer.active ? 'Active' : 'Off'})
            </button>
            <button data-admin-tab="pricing-mgr" onclick="switchAdminTab('pricing-mgr')" class="px-3.5 py-2 rounded-xl whitespace-nowrap transition ${adminActiveTab === 'pricing-mgr' ? 'gold-btn' : 'text-stone-700 hover:bg-stone-100'}">
              💳 Package Rates
            </button>
            <button data-admin-tab="qr-manager" onclick="switchAdminTab('qr-manager')" class="px-3.5 py-2 rounded-xl whitespace-nowrap transition ${adminActiveTab === 'qr-manager' ? 'gold-btn' : 'text-stone-700 hover:bg-stone-100'}">
              🔲 Client QRs (${galleries.length})
            </button>
            <button data-admin-tab="portfolio-mgr" onclick="switchAdminTab('portfolio-mgr')" class="px-3.5 py-2 rounded-xl whitespace-nowrap transition ${adminActiveTab === 'portfolio-mgr' ? 'gold-btn' : 'text-stone-700 hover:bg-stone-100'}">
              🖼️ Portfolio Photos
            </button>
            <button data-admin-tab="hero-mgr" onclick="switchAdminTab('hero-mgr')" class="px-3.5 py-2 rounded-xl whitespace-nowrap transition ${adminActiveTab === 'hero-mgr' ? 'gold-btn' : 'text-stone-700 hover:bg-stone-100'}">
              🌄 Hero Backgrounds (${heroSlides.length})
            </button>
            <button data-admin-tab="profile-mgr" onclick="switchAdminTab('profile-mgr')" class="px-3.5 py-2 rounded-xl whitespace-nowrap transition ${adminActiveTab === 'profile-mgr' ? 'gold-btn' : 'text-stone-700 hover:bg-stone-100'}">
              ⚙️ Studio & UPI Settings
            </button>
          </div>

          <div id="admin-tab-content" class="py-6">
            ${renderCurrentAdminTabContent(totalRevenue, totalAdvance, pendingRevenue, totalScans, totalDownloads)}
          </div>
        </div>

        <div class="pt-4 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500 font-medium">
          <span>All updates sync directly with your live public website</span>
          <span class="text-emerald-700 font-semibold">● Zero Server Cost Mode (Active)</span>
        </div>

      </div>
    </div>
  `;

  if (adminActiveTab === 'analytics') {
    setTimeout(initAdminCharts, 20);
  }
}

function switchAdminTab(tabName) {
  adminActiveTab = tabName;
  const contentEl = document.getElementById('admin-tab-content');
  if (contentEl) {
    const totalRevenue = bookings.reduce((sum, b) => sum + (b.packagePrice || 0), 0);
    const totalAdvance = bookings.reduce((sum, b) => sum + (b.depositPaid || 0), 0);
    const pendingRevenue = totalRevenue - totalAdvance;
    const totalScans = galleries.reduce((sum, g) => sum + (g.totalScans || 0), 0);
    const totalDownloads = galleries.reduce((sum, g) => sum + (g.totalDownloads || 0), 0);

    contentEl.innerHTML = renderCurrentAdminTabContent(totalRevenue, totalAdvance, pendingRevenue, totalScans, totalDownloads);

    // Instant zero-delay active tab button switch without re-rendering modal
    document.querySelectorAll('[data-admin-tab]').forEach(btn => {
      if (btn.getAttribute('data-admin-tab') === tabName) {
        btn.className = 'px-3.5 py-2 rounded-xl whitespace-nowrap transition gold-btn';
      } else {
        btn.className = 'px-3.5 py-2 rounded-xl whitespace-nowrap transition text-stone-700 hover:bg-stone-100';
      }
    });

    if (tabName === 'analytics') {
      setTimeout(initAdminCharts, 20);
    }
  } else {
    renderAdminDashboardModal();
  }
}

function renderCurrentAdminTabContent(totalRevenue, totalAdvance, pendingRevenue, totalScans, totalDownloads) {
  switch (adminActiveTab) {
    case 'analytics':
      return renderAnalyticsTab(totalRevenue, totalAdvance, pendingRevenue, totalScans, totalDownloads);
    case 'bookings':
      return renderBookingsTab();
    case 'offers-mgr':
      return renderOffersMgrTab();
    case 'pricing-mgr':
      return renderPricingMgrTab();
    case 'qr-manager':
      return renderQRManagerTab();
    case 'portfolio-mgr':
      return renderPortfolioMgrTab();
    case 'hero-mgr':
      return renderHeroMgrTab();
    case 'profile-mgr':
      return renderProfileMgrTab();
    default:
      return '';
  }
}

let adminRevenueChartInstance = null;
let adminPackageChartInstance = null;

function initAdminCharts() {
  if (!window.Chart) return;

  if (adminRevenueChartInstance) {
    try { adminRevenueChartInstance.destroy(); } catch (e) {}
    adminRevenueChartInstance = null;
  }
  if (adminPackageChartInstance) {
    try { adminPackageChartInstance.destroy(); } catch (e) {}
    adminPackageChartInstance = null;
  }

  const revCtx = document.getElementById('revenueTrendChart');
  if (revCtx) {
    adminRevenueChartInstance = new Chart(revCtx, {
      type: 'line',
      data: {
        labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [{
          label: 'Revenue (₹)',
          data: [35000, 40000, 30000, 75000, 190000, 125000],
          borderColor: '#b45309',
          backgroundColor: 'rgba(180, 83, 9, 0.08)',
          fill: true,
          tension: 0.3,
          borderWidth: 2.5,
          pointBackgroundColor: '#d97706',
          pointBorderColor: '#ffffff',
          pointRadius: 3
        }]
      },
      options: {
        animation: false, // Instant 0ms chart draw
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { color: '#475569', font: { weight: '600' } } },
          y: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { color: '#475569', font: { weight: '600' } } }
        }
      }
    });
  }

  const pkgCtx = document.getElementById('packageShareChart');
  if (pkgCtx) {
    adminPackageChartInstance = new Chart(pkgCtx, {
      type: 'doughnut',
      data: {
        labels: ['Combo Deluxe', 'Pure Cinema', 'Destination Elite', 'Pure Stills'],
        datasets: [{
          data: [55, 25, 12, 8],
          backgroundColor: ['#b45309', '#d97706', '#f59e0b', '#78716c'],
          borderWidth: 2,
          borderColor: '#ffffff'
        }]
      },
      options: {
        animation: false, // Instant 0ms chart draw
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: '#1c1917', font: { size: 10, weight: '600' } }
          }
        }
      }
    });
  }
}

// 1. ANALYTICS HUB TAB
function renderAnalyticsTab(totalRevenue, totalAdvance, pendingRevenue, totalScans, totalDownloads) {
  return `
    <div class="space-y-6">
      
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 shadow-sm">
          <span class="text-[11px] text-stone-600 uppercase tracking-wider font-bold block">Total Booked Revenue</span>
          <span class="font-serif text-2xl sm:text-3xl font-bold gold-text mt-1 block">${formatINR(totalRevenue)}</span>
          <span class="text-[10px] text-emerald-700 font-bold mt-1 block">↑ 18% vs last month</span>
        </div>

        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 shadow-sm">
          <span class="text-[11px] text-stone-600 uppercase tracking-wider font-bold block">Advance Collected</span>
          <span class="font-serif text-2xl sm:text-3xl font-bold text-emerald-700 mt-1 block">${formatINR(totalAdvance)}</span>
          <span class="text-[10px] text-stone-500 mt-1 block">Deposited in Bank</span>
        </div>

        <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 shadow-sm">
          <span class="text-[11px] text-stone-600 uppercase tracking-wider font-bold block">Pending Due on Shoot</span>
          <span class="font-serif text-2xl sm:text-3xl font-bold text-stone-800 mt-1 block">${formatINR(pendingRevenue)}</span>
          <span class="text-[10px] text-stone-500 mt-1 block">Payable on Event</span>
        </div>

        <div class="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm">
          <span class="text-[11px] text-stone-600 uppercase tracking-wider font-bold block">Guest QR Code Scans</span>
          <span class="font-serif text-2xl sm:text-3xl font-bold text-gold-700 mt-1 block">${totalScans} Scans</span>
          <span class="text-[10px] text-stone-500 mt-1 block">${totalDownloads} Photo Downloads</span>
        </div>

      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div class="lg:col-span-2 p-5 rounded-2xl bg-white border border-stone-200 shadow-sm">
          <h4 class="text-xs uppercase tracking-wider text-gold-700 font-bold mb-4">Monthly Revenue & Booking Trend</h4>
          <div class="relative h-64 w-full">
            <canvas id="revenueTrendChart"></canvas>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm">
          <h4 class="text-xs uppercase tracking-wider text-gold-700 font-bold mb-4">Package Popularity Share</h4>
          <div class="relative h-64 w-full flex items-center justify-center">
            <canvas id="packageShareChart"></canvas>
          </div>
        </div>

      </div>

    </div>
  `;
}

// 2. BOOKINGS MANAGEMENT TAB
function renderBookingsTab() {
  return `
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <h4 class="font-serif text-lg font-bold text-stone-900">Client Wedding Shoot Bookings</h4>
        <button onclick="openBookingModal(null, true)" class="gold-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-sm">
          + Add Manual Booking
        </button>
      </div>

      <div class="overflow-x-auto rounded-2xl border border-stone-200 shadow-sm">
        <table class="w-full text-left text-xs text-stone-700">
          <thead class="bg-stone-50 text-stone-700 uppercase tracking-wider text-[10px] font-bold border-b border-stone-200">
            <tr>
              <th class="p-3">Ref ID</th>
              <th class="p-3">Couple</th>
              <th class="p-3">Date</th>
              <th class="p-3">Venue & City</th>
              <th class="p-3">Package</th>
              <th class="p-3">Deposit</th>
              <th class="p-3">Status</th>
              <th class="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-stone-100 bg-white">
            ${bookings.map(b => `
              <tr class="hover:bg-amber-50/40 transition">
                <td class="p-3 font-mono text-stone-500 font-semibold">${b.id}</td>
                <td class="p-3 font-bold text-stone-900">
                  ${b.clientName}
                  <span class="block text-[10px] text-stone-500 font-normal">${b.phone}</span>
                </td>
                <td class="p-3 text-gold-700 font-semibold">${b.weddingDate}</td>
                <td class="p-3 text-stone-600">${b.venueName}, ${b.city}</td>
                <td class="p-3 text-stone-800 font-medium">${b.packageName}</td>
                <td class="p-3 font-bold text-emerald-700">${formatINR(b.depositPaid)}</td>
                <td class="p-3">
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold ${
                    b.bookingStatus === 'Confirmed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }">
                    ${b.bookingStatus}
                  </span>
                </td>
                <td class="p-3 text-right space-x-1">
                  <a href="https://wa.me/${b.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(b.clientName)},%20regarding%20your%20wedding%20photography%20with%20Aura%20Cinematics..." 
                     target="_blank" class="px-2 py-1 rounded bg-emerald-100 text-emerald-800 hover:bg-emerald-200 text-[11px] font-semibold" title="Chat on WhatsApp">
                    WhatsApp
                  </a>
                  <button onclick="deleteBooking('${b.id}')" class="px-2 py-1 rounded bg-red-100 text-red-700 hover:bg-red-200 text-[11px] font-semibold" title="Remove">
                    Delete
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function deleteBooking(id) {
  if (confirm(`Are you sure you want to delete booking ${id}?`)) {
    bookings = bookings.filter(b => b.id !== id);
    setDB(DB_KEYS.BOOKINGS, bookings);
    renderAdminDashboardModal();
  }
}

// 3. CLIENT QR GENERATOR & PRINT TAB
function renderQRManagerTab() {
  return `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <div class="lg:col-span-5 p-5 rounded-2xl bg-stone-50 border border-stone-200 shadow-sm">
        <h4 class="font-serif text-lg font-bold text-stone-900 mb-2">Generate Unique Wedding QR Code</h4>
        <p class="text-xs text-stone-600 mb-4">Creates a dedicated client download portal & printable high-resolution QR card for wedding tables.</p>

        <form onsubmit="handleCreateClientGallery(event)" class="space-y-3">
          <div>
            <label class="block text-[11px] font-semibold text-stone-700 mb-1">Couple Names *</label>
            <input type="text" id="new-gal-names" required placeholder="e.g. Vicky & Katrina" 
                   class="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:outline-none" />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-[11px] font-semibold text-stone-700 mb-1">Wedding Date *</label>
              <input type="text" id="new-gal-date" required placeholder="e.g. 12 Dec 2026" 
                     class="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:outline-none" />
            </div>
            <div>
              <label class="block text-[11px] font-semibold text-stone-700 mb-1">Access PIN</label>
              <input type="text" id="new-gal-pin" placeholder="e.g. 1234" value="1234" 
                     class="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:outline-none" />
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-semibold text-stone-700 mb-1">Venue / City *</label>
            <input type="text" id="new-gal-venue" required placeholder="e.g. Six Senses Fort Barwara" 
                   class="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:outline-none" />
          </div>

          <div>
            <label class="block text-[11px] font-semibold text-stone-700 mb-1">Google Drive / Cloud Folder Link *</label>
            <input type="url" id="new-gal-drive" required placeholder="https://drive.google.com/drive/folders/..." 
                   class="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:outline-none" />
          </div>

          <!-- Cover Photo from Device or URL -->
          <div class="p-3.5 rounded-xl bg-white border border-stone-200">
            <label class="block text-[11px] font-semibold text-stone-700 mb-1.5">Wedding Cover Photo *</label>
            <div class="flex items-center space-x-3">
              <img id="gal-cover-preview" src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80" 
                   alt="Cover Preview" 
                   class="w-16 h-12 rounded-lg object-cover border border-stone-300 shadow-sm flex-shrink-0" />
              <div class="flex-1 space-y-1.5">
                <input type="file" id="gal-cover-file" accept="image/*" class="hidden" onchange="handleGalCoverUpload(event)" />
                <button type="button" onclick="document.getElementById('gal-cover-file').click()" 
                        class="px-3 py-1.5 rounded-lg gold-btn text-[11px] font-bold shadow-sm cursor-pointer">
                  📁 Upload Cover from Device
                </button>
                <input type="url" id="new-gal-cover" placeholder="Or paste image URL" 
                       value="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
                       class="w-full px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-[11px] focus:outline-none" 
                       oninput="const p = document.getElementById('gal-cover-preview'); if(p && this.value) p.src = this.value;" />
              </div>
            </div>
          </div>

          <!-- Highlight Preview Photos from Device (Optional) -->
          <div class="p-3 rounded-xl bg-white border border-stone-200">
            <label class="block text-[11px] font-semibold text-stone-700 mb-1">On-Screen Highlight Photos (Optional)</label>
            <div class="flex items-center space-x-2">
              <input type="file" id="gal-photos-file" accept="image/*" multiple class="hidden" onchange="handleGalPhotosUpload(event)" />
              <button type="button" onclick="document.getElementById('gal-photos-file').click()" 
                      class="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-[11px] font-bold border border-stone-300 shadow-sm cursor-pointer">
                📷 Select Highlights from Device
              </button>
            </div>
            <span id="gal-photos-count" class="text-[10px] text-stone-500 block mt-1">Select 5-20 highlight photos from device for the gallery preview.</span>
          </div>

          <button type="submit" class="w-full gold-btn py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider mt-2 shadow">
            Generate QR Code & Portal
          </button>
        </form>
      </div>

      <div class="lg:col-span-7 space-y-4">
        <h4 class="font-serif text-lg font-bold text-stone-900">Active Client QR Portals</h4>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${galleries.map(gal => {
            const portalUrl = `${window.location.origin}${window.location.pathname}?gallery=${gal.slug}`;
            const qrImg = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(portalUrl)}`;

            return `
              <div class="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <span class="font-serif text-base font-bold text-stone-900">${gal.coupleName}</span>
                    <span class="text-[10px] font-mono text-gold-700 font-bold px-2 py-0.5 rounded bg-amber-50 border border-amber-200">${gal.clientCode}</span>
                  </div>
                  <span class="text-[11px] text-stone-500 block">${gal.weddingDate} • ${gal.venue}</span>
                  <div class="mt-3 flex items-center justify-center p-3 bg-stone-50 border border-stone-200 rounded-xl shadow-inner">
                    <img src="${qrImg}" alt="${gal.coupleName} QR" class="w-28 h-28 object-contain" />
                  </div>
                </div>

                <div class="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <button onclick="printClientQrCard('${gal.coupleName}', '${gal.weddingDate}', '${gal.venue}', '${qrImg}', '${portalUrl}')" 
                          class="px-2.5 py-1.5 rounded-lg gold-btn text-[11px] font-bold shadow-sm">
                    🖨️ Print Table Tent Card
                  </button>
                  <button onclick="openClientGallery('${gal.slug}', true)" class="text-gold-700 font-bold hover:underline text-[11px] cursor-pointer">
                    Preview Gallery →
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

    </div>
  `;
}

let newGalleryUploadedPhotos = [];

async function handleGalCoverUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    const compressed = await compressImageFile(file, 1600, 1000, 0.85);
    if (compressed) {
      const input = document.getElementById('new-gal-cover');
      const preview = document.getElementById('gal-cover-preview');
      if (input) input.value = compressed;
      if (preview) preview.src = compressed;
    }
  } catch (err) {
    console.error(err);
    alert("Error uploading cover image.");
  }
}

async function handleGalPhotosUpload(event) {
  const files = Array.from(event.target.files || []);
  if (!files.length) return;

  const countBadge = document.getElementById('gal-photos-count');
  if (countBadge) countBadge.textContent = `⏳ Processing ${files.length} highlight photo(s)...`;

  try {
    for (const file of files) {
      const compressed = await compressImageFile(file, 1400, 1000, 0.82);
      if (compressed) {
        newGalleryUploadedPhotos.push({
          id: `pg-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`,
          title: 'Wedding Highlight',
          url: compressed
        });
      }
    }
    if (countBadge) {
      countBadge.textContent = `✅ ${newGalleryUploadedPhotos.length} Highlight photo(s) ready for preview!`;
    }
  } catch (err) {
    console.error(err);
    alert("Error processing highlight photos.");
  }
}

function handleCreateClientGallery(e) {
  e.preventDefault();

  const names = document.getElementById('new-gal-names').value.trim();
  const date = document.getElementById('new-gal-date').value.trim();
  const pin = document.getElementById('new-gal-pin').value.trim() || '1234';
  const venue = document.getElementById('new-gal-venue').value.trim();
  const drive = document.getElementById('new-gal-drive').value.trim();
  const cover = document.getElementById('new-gal-cover').value.trim();

  const slug = names.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + new Date().getFullYear();
  const code = (names.split('&')[0] || 'W').trim().slice(0, 2).toUpperCase() + Math.floor(100 + Math.random() * 900);

  const photosList = (newGalleryUploadedPhotos && newGalleryUploadedPhotos.length > 0)
    ? [{ id: "pg1", title: "Royal Couple Portrait", url: cover }, ...newGalleryUploadedPhotos]
    : [
        { id: "pg1", title: "Royal Couple Portrait", url: cover },
        { id: "pg2", title: "Ceremony Moments", url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80" },
        { id: "pg3", title: "Celebration Fireworks", url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80" }
      ];

  const newGal = {
    id: `gal-${Date.now()}`,
    slug: slug,
    clientCode: code,
    coupleName: names,
    weddingDate: date,
    venue: venue,
    coverImage: cover,
    googleDriveLink: drive,
    pin: pin,
    totalScans: 0,
    totalDownloads: 0,
    photos: photosList
  };

  newGalleryUploadedPhotos = [];
  galleries.unshift(newGal);
  setDB(DB_KEYS.GALLERIES, galleries);
  renderAdminDashboardModal();
  alert(`QR Portal for "${names}" created successfully! Client code: ${code}`);
}

function printClientQrCard(coupleName, weddingDate, venue, qrImg, portalUrl) {
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Wedding QR Table Card - ${coupleName}</title>
        <style>
          body { font-family: 'Georgia', serif; text-align: center; padding: 40px; background: #fff; color: #111; }
          .card { border: 2px solid #b45309; padding: 30px; border-radius: 20px; max-width: 400px; margin: auto; }
          h1 { margin: 0; font-size: 24px; color: #111; }
          p { margin: 6px 0; color: #555; font-size: 14px; }
          .qr { margin: 20px auto; width: 180px; height: 180px; }
          .footer { font-size: 11px; color: #888; margin-top: 15px; font-family: sans-serif; }
        </style>
      </head>
      <body>
        <div class="card">
          <p style="text-transform: uppercase; letter-spacing: 2px; font-size: 11px; color: #b45309; font-weight: bold;">Scan to View & Download Wedding Photos</p>
          <h1>${coupleName}</h1>
          <p>${weddingDate} • ${venue}</p>
          <img src="${qrImg}" class="qr" alt="QR Code" />
          <p style="font-size: 12px; font-family: sans-serif;">Point your phone camera to access high-res photos</p>
          <div class="footer">Photographed by ${photographer.brandName}</div>
        </div>
        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
}

// 4. PORTFOLIO MANAGER TAB
function compressImageFile(file, maxWidth = 1600, maxHeight = 1600, quality = 0.82) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          if (width > height) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = () => resolve(e.target.result);
      img.src = e.target.result;
    };
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}

async function handleDevicePhotoUpload(event) {
  const files = Array.from(event.target.files || []);
  if (!files.length) return;

  const statusEl = document.getElementById('upload-progress-status');
  if (statusEl) {
    statusEl.classList.remove('hidden');
    statusEl.textContent = `⏳ Uploading & publishing ${files.length} photo(s)...`;
  }

  try {
    for (const file of files) {
      const compressedDataUrl = await compressImageFile(file);
      if (!compressedDataUrl) continue;
      const newItem = {
        id: `p-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`,
        type: 'photo',
        category: 'photo',
        image: compressedDataUrl,
        photos: [{ title: 'Wedding Photo', url: compressedDataUrl }]
      };
      portfolio.unshift(newItem);
    }

    setDB(DB_KEYS.PORTFOLIO, portfolio);
    renderPortfolio();
    renderAdminDashboardModal();
    alert(`✅ ${files.length} Photo(s) uploaded successfully & published to live website!`);
  } catch (err) {
    console.error(err);
    alert("Error uploading photos. Please try again.");
  }
}

function handleQuickUrlPhotoUpload(e) {
  e.preventDefault();
  const input = document.getElementById('quick-photo-url-input');
  if (!input) return;
  const url = input.value.trim();
  if (!url) return;

  const newItem = {
    id: `p-${Date.now()}`,
    type: 'photo',
    category: 'photo',
    image: url,
    photos: [{ title: 'Wedding Photo', url: url }]
  };

  portfolio.unshift(newItem);
  setDB(DB_KEYS.PORTFOLIO, portfolio);
  renderPortfolio();
  renderAdminDashboardModal();
  alert("✅ Photo added successfully to live website!");
}

function renderPortfolioMgrTab() {
  return `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- Left Column: Simple Upload from Device & Image URL -->
      <div class="lg:col-span-5 space-y-4">
        
        <!-- Big Drag-and-Drop / File Picker for Device Upload -->
        <div class="p-6 sm:p-8 rounded-3xl bg-amber-50/70 border-2 border-dashed border-amber-400 hover:border-amber-600 transition text-center cursor-pointer group shadow-sm" 
             onclick="document.getElementById('device-photo-upload-input').click()">
          <input type="file" id="device-photo-upload-input" accept="image/*" multiple class="hidden" onchange="handleDevicePhotoUpload(event)" />
          
          <div class="w-16 h-16 mx-auto rounded-full bg-amber-100 group-hover:bg-amber-200 text-amber-800 flex items-center justify-center mb-3 transition transform group-hover:scale-105 shadow-inner">
            <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v8m-4-4l4-4 4 4"/>
            </svg>
          </div>
          
          <h4 class="font-serif text-lg font-bold text-stone-900">Upload Photos Directly from Device</h4>
          <p class="text-xs text-stone-600 mt-1 mb-4">Click to select photos from your Phone or Computer gallery.</p>
          
          <button type="button" class="gold-btn px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow pointer-events-none">
            📁 Select Photos from Device
          </button>
          
          <span class="block text-[11px] text-stone-500 mt-3 font-medium">
            ✨ Supports Multiple Selection • No form filling required
          </span>
          <div id="upload-progress-status" class="hidden mt-3 text-xs text-amber-900 font-semibold animate-pulse"></div>
        </div>

        <!-- Optional Image URL Box -->
        <div class="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm">
          <div class="flex items-center space-x-1.5 mb-2">
            <span class="text-xs font-bold text-stone-700 uppercase tracking-wider">🔗 Or Paste Image Web URL</span>
          </div>
          <form onsubmit="handleQuickUrlPhotoUpload(event)" class="flex gap-2">
            <input type="url" id="quick-photo-url-input" required placeholder="https://images.unsplash.com/..." 
                   class="flex-1 px-3 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none" />
            <button type="submit" class="px-4 py-2 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-xs font-bold whitespace-nowrap shadow-sm cursor-pointer">
              + Add
            </button>
          </form>
        </div>

      </div>

      <!-- Right Column: Live Showcase Items with One-Click Delete -->
      <div class="lg:col-span-7 space-y-4">
        <div class="flex items-center justify-between">
          <h4 class="font-serif text-lg font-bold text-stone-900">Live Website Showcase (${portfolio.length} Photos)</h4>
          <span class="text-xs text-stone-500">Tap Delete to remove any photo instantly</span>
        </div>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[560px] overflow-y-auto pr-1">
          ${portfolio.map((item, idx) => `
            <div class="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm aspect-[4/3]">
              <img src="${item.image}" alt="Showcase Photo" class="w-full h-full object-cover" />
              
              <span class="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white shadow">
                📸 Photo #${portfolio.length - idx}
              </span>

              <button onclick="deletePortfolioItem('${item.id}')" 
                      class="absolute top-2 right-2 w-7 h-7 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center text-xs font-bold shadow-lg transition cursor-pointer" 
                      title="Delete Photo">
                ✕
              </button>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

function deletePortfolioItem(id) {
  if (confirm("Remove this photo from your website showcase?")) {
    portfolio = portfolio.filter(p => p.id !== id);
    setDB(DB_KEYS.PORTFOLIO, portfolio);
    renderPortfolio();
    renderAdminDashboardModal();
  }
}

// 4.5. HERO BACKGROUND SLIDESHOW MANAGER TAB
function renderHeroMgrTab() {
  return `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- Left Column: Add New Background Slide -->
      <div class="lg:col-span-5 space-y-4">
        
        <!-- Upload directly from device -->
        <div class="p-6 rounded-3xl bg-amber-50/70 border-2 border-dashed border-amber-400 hover:border-amber-600 transition text-center cursor-pointer group shadow-sm"
             onclick="document.getElementById('device-hero-upload-input').click()">
          <input type="file" id="device-hero-upload-input" accept="image/*" class="hidden" onchange="handleDeviceHeroUpload(event)" />
          
          <div class="w-14 h-14 mx-auto rounded-full bg-amber-100 group-hover:bg-amber-200 text-amber-800 flex items-center justify-center mb-3 transition shadow-inner">
            <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v8m-4-4l4-4 4 4"/>
            </svg>
          </div>
          
          <h4 class="font-serif text-base font-bold text-stone-900">Upload Hero Background from Device</h4>
          <p class="text-xs text-stone-600 mt-1 mb-4">Select high-quality wedding photo for the homepage background slideshow.</p>
          
          <button type="button" class="gold-btn px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow pointer-events-none">
            📁 Select Image from Device
          </button>
        </div>

        <!-- Add via Image URL -->
        <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
          <div class="flex items-center space-x-1.5">
            <span class="text-xs font-bold text-stone-900 uppercase tracking-wider">🔗 Or Add Slide by Image URL</span>
          </div>
          <form onsubmit="handleQuickHeroAdd(event)" class="space-y-2.5">
            <div>
              <label class="block text-[11px] font-semibold text-stone-700 mb-1">Image URL *</label>
              <input type="url" id="hero-add-url" required placeholder="https://images.unsplash.com/..." 
                     class="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none" />
            </div>
            <div>
              <label class="block text-[11px] font-semibold text-stone-700 mb-1">Couple / Caption (Optional)</label>
              <input type="text" id="hero-add-caption" placeholder="e.g. Rahul & Priya — Royal Pheras" 
                     class="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none" />
            </div>
            <button type="submit" class="w-full gold-btn py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow cursor-pointer">
              + Add to Background Slideshow
            </button>
          </form>
        </div>

      </div>

      <!-- Right Column: Active Slides list with Delete Button -->
      <div class="lg:col-span-7 space-y-4">
        <div class="flex items-center justify-between">
          <h4 class="font-serif text-lg font-bold text-stone-900">Active Background Slides (${heroSlides.length})</h4>
          <span class="text-xs text-stone-500">Slides transition every 4.5 seconds on homepage</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[560px] overflow-y-auto pr-1">
          ${heroSlides.map((slide, idx) => `
            <div class="relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm group aspect-[16/10]">
              <img src="${slide.image}" alt="${slide.caption || 'Background Slide'}" class="w-full h-full object-cover" />
              
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 flex flex-col justify-between">
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-amber-300 border border-white/20">
                    Slide #${idx + 1} ${idx === 0 ? '★ (First Slide)' : ''}
                  </span>
                  
                  ${heroSlides.length > 1 ? `
                    <button onclick="deleteHeroSlide(${idx})" 
                            class="w-7 h-7 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center text-xs font-bold shadow-lg transition cursor-pointer" 
                            title="Remove this Slide">
                      ✕
                    </button>
                  ` : ''}
                </div>

                <div>
                  <h5 class="text-xs font-bold text-white truncate">${slide.caption || 'Royal Wedding Stills'}</h5>
                  <span class="text-[10px] text-stone-300 block">${slide.location || 'Heritage Celebration'}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

async function handleDeviceHeroUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    const compressed = await compressImageFile(file, 2000, 1500, 0.85);
    if (!compressed) return;

    heroSlides.push({
      image: compressed,
      caption: "Royal Wedding Celebration",
      location: "Destination Heritage Venue",
      tag: "Pure Candid Moments"
    });

    setDB(DB_KEYS.HERO_SLIDES, heroSlides);
    renderHero();
    initHeroSlideshow();
    renderAdminDashboardModal();
    alert("✅ New Background Slide added successfully to Homepage!");
  } catch (err) {
    console.error(err);
    alert("Error uploading background image.");
  }
}

function handleQuickHeroAdd(e) {
  e.preventDefault();
  const url = document.getElementById('hero-add-url')?.value.trim();
  const caption = document.getElementById('hero-add-caption')?.value.trim() || 'Royal Wedding Celebration';
  if (!url) return;

  heroSlides.push({
    image: url,
    caption: caption,
    location: 'Destination Heritage Venue',
    tag: 'Pure Candid Moments'
  });

  setDB(DB_KEYS.HERO_SLIDES, heroSlides);
  renderHero();
  initHeroSlideshow();
  renderAdminDashboardModal();
  alert("✅ New Background Slide added successfully to Homepage!");
}

function deleteHeroSlide(idx) {
  if (heroSlides.length <= 1) {
    alert("At least 1 background image is required for the homepage.");
    return;
  }
  if (confirm("Remove this background slide from the homepage?")) {
    heroSlides.splice(idx, 1);
    setDB(DB_KEYS.HERO_SLIDES, heroSlides);
    currentHeroSlideIndex = 0;
    renderHero();
    initHeroSlideshow();
    renderAdminDashboardModal();
  }
}

// 5. PRICING & PACKAGE RATES EDITOR TAB
function renderPricingMgrTab() {
  return `
    <div class="space-y-6">
      <div>
        <h4 class="font-serif text-lg font-bold text-stone-900">Edit Package Charges & Deposit Rates</h4>
        <p class="text-xs text-stone-600 mt-1">Updates price tags across the public website and booking calculator.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${packages.map((pkg, idx) => `
          <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
            <div class="flex items-center justify-between">
              <span class="font-serif text-base font-bold text-stone-900">${pkg.title}</span>
              <span class="text-[10px] text-gold-700 font-bold px-2 py-0.5 rounded bg-amber-50 border border-amber-200 uppercase">${pkg.badge}</span>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-[11px] text-stone-600 font-medium mb-1">Package Price (₹)</label>
                <input type="number" id="pkg-price-${pkg.id}" value="${pkg.price}" 
                       class="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 font-mono text-sm focus:border-gold-500 focus:bg-white focus:outline-none font-bold" />
              </div>
              <div>
                <label class="block text-[11px] text-stone-600 font-medium mb-1">Advance Token (₹)</label>
                <input type="number" id="pkg-deposit-${pkg.id}" value="${pkg.deposit}" 
                       class="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 font-mono text-sm focus:border-gold-500 focus:bg-white focus:outline-none font-bold" />
              </div>
            </div>

            <button onclick="savePackageRates('${pkg.id}')" class="w-full gold-btn py-2 rounded-xl font-bold text-xs shadow-sm">
              Save ${pkg.title} Rates
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function savePackageRates(pkgId) {
  const priceInput = document.getElementById(`pkg-price-${pkgId}`);
  const depositInput = document.getElementById(`pkg-deposit-${pkgId}`);
  if (!priceInput || !depositInput) return;

  const pkg = packages.find(p => p.id === pkgId);
  if (pkg) {
    pkg.price = parseInt(priceInput.value, 10) || pkg.price;
    pkg.deposit = parseInt(depositInput.value, 10) || pkg.deposit;
    setDB(DB_KEYS.PACKAGES, packages);
    renderPackages();
    alert(`Rates for ${pkg.title} saved and updated on live website!`);
  }
}

// 5.1 FESTIVE & SEASONAL OFFERS MANAGER TAB
function renderOffersMgrTab() {
  const isPercent = seasonalOffer.discountType === 'percentage';

  return `
    <div class="max-w-4xl mx-auto space-y-6">
      
      <!-- Header with Status Pill -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-amber-50/70 border border-amber-200 shadow-sm">
        <div>
          <h4 class="font-serif text-xl font-bold text-stone-900 flex items-center space-x-2">
            <span>🪔</span>
            <span>Diwali & Winter Wedding Promotional Offers</span>
          </h4>
          <p class="text-xs text-stone-600 mt-1">
            Configure festive discounts, header announcement bar, and package offer rates across your live website.
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-3 flex-shrink-0">
          <span class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full ${seasonalOffer.active ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-stone-100 text-stone-600 border border-stone-300'} text-xs font-bold whitespace-nowrap">
            <span class="w-2 h-2 rounded-full ${seasonalOffer.active ? 'bg-emerald-500 animate-pulse' : 'bg-stone-400'}"></span>
            <span>${seasonalOffer.active ? 'Offer is Live' : 'Offer is Paused'}</span>
          </span>
          <button onclick="toggleSeasonalOfferActive()" class="px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm cursor-pointer whitespace-nowrap ${seasonalOffer.active ? 'bg-rose-600 text-white hover:bg-rose-700' : 'bg-emerald-600 text-white hover:bg-emerald-700'}">
            ${seasonalOffer.active ? 'Turn OFF Offer' : 'Activate Festive Offer'}
          </button>
        </div>
      </div>

      <!-- Settings Form -->
      <form onsubmit="handleSaveSeasonalOffer(event)" class="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-5">
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- Offer Badge Label -->
          <div>
            <label class="block text-xs font-semibold text-stone-700 mb-1">Offer Badge (Tag text)</label>
            <input type="text" id="offer-badge" value="${seasonalOffer.badge}" required 
                   class="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none font-bold" />
            <span class="text-[10px] text-stone-400 mt-0.5 block">Shown in header and on package cards</span>
          </div>

          <!-- Offer Title -->
          <div>
            <label class="block text-xs font-semibold text-stone-700 mb-1">Campaign Title</label>
            <input type="text" id="offer-title" value="${seasonalOffer.title}" required 
                   class="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none" />
            <span class="text-[10px] text-stone-400 mt-0.5 block">Internal campaign name</span>
          </div>
        </div>

        <!-- Discount Type & Value -->
        <div class="p-4 rounded-xl bg-stone-50 border border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <div>
            <label class="block text-xs font-semibold text-stone-700 mb-1.5">Discount Type</label>
            <div class="flex items-center space-x-4 text-xs font-medium text-stone-800">
              <label class="flex items-center space-x-1.5 cursor-pointer">
                <input type="radio" name="discount-type" value="percentage" ${isPercent ? 'checked' : ''} onchange="updateDiscountTypeUI('percentage')" />
                <span>Percentage (%)</span>
              </label>
              <label class="flex items-center space-x-1.5 cursor-pointer">
                <input type="radio" name="discount-type" value="flat" ${!isPercent ? 'checked' : ''} onchange="updateDiscountTypeUI('flat')" />
                <span>Flat Amount (₹)</span>
              </label>
            </div>
          </div>

          <div>
            <label id="discount-val-label" class="block text-xs font-semibold text-stone-700 mb-1">
              ${isPercent ? 'Discount Percentage (%)' : 'Flat Discount Amount (₹)'}
            </label>
            <input type="number" id="offer-value" 
                   value="${isPercent ? seasonalOffer.discountPercent : seasonalOffer.discountAmount}" 
                   min="1" required 
                   class="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 text-stone-900 font-mono text-sm focus:border-gold-500 focus:outline-none font-bold" />
          </div>

          <div>
            <label class="block text-xs font-semibold text-stone-700 mb-1">Valid Till Date</label>
            <input type="text" id="offer-valid" value="${seasonalOffer.validTill}" 
                   placeholder="e.g. 31 Dec 2026"
                   class="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:outline-none" />
          </div>
        </div>

        <!-- Header Announcement Bar Text -->
        <div>
          <label class="block text-xs font-semibold text-stone-700 mb-1">Header Announcement Bar Text</label>
          <input type="text" id="offer-banner-text" value="${seasonalOffer.bannerText}" required 
                 class="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none" />
          <span class="text-[10px] text-stone-400 mt-0.5 block">Appears in the sticky luxury gold bar at the very top of the website</span>
        </div>

        <!-- Hero Subtitle Tagline -->
        <div>
          <label class="block text-xs font-semibold text-stone-700 mb-1">Hero Section Tagline</label>
          <input type="text" id="offer-tagline" value="${seasonalOffer.tagline}" required 
                 class="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none" />
        </div>

        <!-- Live Package Price Calculator Preview -->
        <div class="pt-4 border-t border-stone-200">
          <h5 class="text-xs uppercase tracking-wider text-gold-700 font-bold mb-3">Live Discounted Rates Preview</h5>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            ${packages.map(pkg => {
              const pricing = getPackageDiscountedPrice(pkg);
              return `
                <div class="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                  <span class="font-bold text-stone-900 block truncate">${pkg.title}</span>
                  <div class="mt-1 flex items-baseline space-x-1.5">
                    <span class="line-through text-[11px] text-stone-400">${formatINR(pkg.price)}</span>
                    <span class="text-sm font-bold text-amber-700 font-mono">${formatINR(pricing.finalPrice)}</span>
                  </div>
                  <span class="text-[10px] text-emerald-700 font-bold mt-1 block">Clients Save: ${formatINR(pricing.discount)}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-3 flex items-center justify-end space-x-3">
          <button type="button" onclick="renderAdminDashboardModal()" class="px-5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-50 cursor-pointer">
            Cancel
          </button>
          <button type="submit" class="gold-btn px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow cursor-pointer">
            Save & Publish Festive Offer
          </button>
        </div>

      </form>

    </div>
  `;
}

function handleSaveSeasonalOffer(e) {
  e.preventDefault();

  const typeRadio = document.querySelector('input[name="discount-type"]:checked');
  const discountType = typeRadio ? typeRadio.value : 'percentage';
  const val = Number(document.getElementById('offer-value').value) || 15;

  seasonalOffer.badge = document.getElementById('offer-badge').value.trim();
  seasonalOffer.title = document.getElementById('offer-title').value.trim();
  seasonalOffer.discountType = discountType;
  if (discountType === 'percentage') {
    seasonalOffer.discountPercent = val;
  } else {
    seasonalOffer.discountAmount = val;
  }
  seasonalOffer.bannerText = document.getElementById('offer-banner-text').value.trim();
  seasonalOffer.tagline = document.getElementById('offer-tagline').value.trim();
  seasonalOffer.validTill = document.getElementById('offer-valid').value.trim();

  setDB(DB_KEYS.SEASONAL_OFFER, seasonalOffer);

  // Re-render live public components
  renderNavbar();
  renderHero();
  renderPackages();

  alert("Diwali & Winter Wedding Offer successfully published! Live rates and banners have been updated.");
  renderAdminDashboardModal();
}

function toggleSeasonalOfferActive() {
  seasonalOffer.active = !seasonalOffer.active;
  setDB(DB_KEYS.SEASONAL_OFFER, seasonalOffer);

  // Re-render public components
  renderNavbar();
  renderHero();
  renderPackages();

  renderAdminDashboardModal();
}

function updateDiscountTypeUI(type) {
  const label = document.getElementById('discount-val-label');
  const input = document.getElementById('offer-value');
  if (type === 'percentage') {
    if (label) label.textContent = 'Discount Percentage (%)';
    if (input) input.value = seasonalOffer.discountPercent || 15;
  } else {
    if (label) label.textContent = 'Flat Discount Amount (₹)';
    if (input) input.value = seasonalOffer.discountAmount || 15000;
  }
}

// 6. STUDIO & UPI SETTINGS TAB
function renderProfileMgrTab() {
  const adminCreds = getDB(DB_KEYS.ADMIN_CREDS, {
    email: 'admin@auracinematics.com',
    password: 'admin123'
  });

  return `
    <div class="max-w-2xl mx-auto p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
      <h4 class="font-serif text-lg font-bold text-stone-900 mb-1">Studio Profile & Direct UPI Settings</h4>
      <p class="text-xs text-stone-600 mb-4">Set where your clients send their advance booking payments and WhatsApp inquiries.</p>

      <form onsubmit="handleSaveStudioSettings(event)" class="space-y-4">
        
        <!-- Photographer Profile Photo (About Section) -->
        <div class="p-4 rounded-xl bg-amber-50/60 border border-amber-300">
          <label class="block text-xs font-bold text-stone-900 mb-2 uppercase tracking-wider">
            📸 About Section Photographer Photo
          </label>
          <div class="flex items-center space-x-4">
            <img id="about-photo-preview" src="${photographer.photo || 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1000&q=80'}" 
                 alt="Photographer Preview" 
                 class="w-16 h-20 rounded-xl object-cover border border-stone-300 shadow-sm flex-shrink-0" />
            <div class="flex-1 space-y-2">
              <input type="file" id="set-photo-file" accept="image/*" class="hidden" onchange="handlePhotographerPhotoUpload(event)" />
              <button type="button" onclick="document.getElementById('set-photo-file').click()" 
                      class="px-3.5 py-1.5 rounded-lg gold-btn text-xs font-semibold shadow-sm cursor-pointer">
                📁 Change Photo from Device
              </button>
              <input type="url" id="set-photo-url" value="${photographer.photo || ''}" placeholder="Or paste image URL (https://...)" 
                     class="w-full px-3 py-1.5 rounded-lg bg-white border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:outline-none" 
                     oninput="const p = document.getElementById('about-photo-preview'); if(p && this.value) p.src = this.value;" />
            </div>
          </div>
        </div>

        <div>
          <label class="block text-xs font-semibold text-stone-700 mb-1">Photographer / Studio Name</label>
          <input type="text" id="set-name" value="${photographer.name}" required 
                 class="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none" />
        </div>

        <div>
          <label class="block text-xs font-semibold text-stone-700 mb-1">Brand Name</label>
          <input type="text" id="set-brand" value="${photographer.brandName}" required 
                 class="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none" />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-semibold text-stone-700 mb-1">Phone Number (Calling)</label>
            <input type="text" id="set-phone" value="${photographer.phone}" required 
                   class="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-stone-700 mb-1">WhatsApp Number (with country code)</label>
            <input type="text" id="set-whatsapp" value="${photographer.whatsapp}" required 
                   class="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:bg-white focus:outline-none" />
          </div>
        </div>

        <div class="p-4 rounded-xl bg-amber-50/70 border border-amber-300">
          <label class="block text-xs font-semibold text-gold-800 mb-1">Direct Bank UPI ID (For 0% Fee Payments)</label>
          <input type="text" id="set-upi" value="${photographer.upiId}" required 
                 class="w-full px-3 py-2 rounded-xl bg-white border border-amber-400 text-stone-900 font-mono text-xs focus:outline-none font-bold" />
          <span class="text-[10px] text-stone-600 block mt-1">All advance payments from clients go directly into your bank via UPI QR.</span>
        </div>

        <!-- Studio Admin Portal Login Credentials -->
        <div class="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
          <div class="flex items-center space-x-2">
            <span class="text-xs font-bold text-stone-900 uppercase tracking-wider">🔒 Studio Admin Login Credentials</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-[11px] font-semibold text-stone-700 mb-1">Admin Email</label>
              <input type="email" id="set-admin-email" value="${adminCreds.email}" required 
                     class="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:outline-none" />
            </div>
            <div>
              <label class="block text-[11px] font-semibold text-stone-700 mb-1">Admin Password</label>
              <input type="text" id="set-admin-pass" value="${adminCreds.password}" required 
                     class="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs focus:border-gold-500 focus:outline-none" />
            </div>
          </div>
          <span class="text-[10px] text-stone-500 block">Use these exact credentials to unlock the Studio Admin Dashboard.</span>
        </div>

        <button type="submit" class="w-full gold-btn py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow">
          Save Studio Profile, UPI & Credentials
        </button>
      </form>
    </div>
  `;
}

async function handlePhotographerPhotoUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    const compressed = await compressImageFile(file, 1200, 1500, 0.85);
    if (compressed) {
      photographer.photo = compressed;
      const preview = document.getElementById('about-photo-preview');
      if (preview) preview.src = compressed;
      const urlInput = document.getElementById('set-photo-url');
      if (urlInput) urlInput.value = '';
      setDB(DB_KEYS.PHOTOGRAPHER, photographer);
      renderAbout();
      alert("✅ Profile photo updated!");
    }
  } catch (err) {
    console.error(err);
    alert("Error uploading photo. Please try again.");
  }
}

function handleSaveStudioSettings(e) {
  e.preventDefault();

  photographer.name = document.getElementById('set-name').value.trim();
  photographer.brandName = document.getElementById('set-brand').value.trim();
  photographer.phone = document.getElementById('set-phone').value.trim();
  photographer.whatsapp = document.getElementById('set-whatsapp').value.trim();
  photographer.upiId = document.getElementById('set-upi').value.trim();

  const photoUrlInput = document.getElementById('set-photo-url')?.value.trim();
  if (photoUrlInput) {
    photographer.photo = photoUrlInput;
  }

  const adminEmail = (document.getElementById('set-admin-email')?.value || '').trim();
  const adminPass = (document.getElementById('set-admin-pass')?.value || '').trim();
  if (adminEmail && adminPass) {
    setDB(DB_KEYS.ADMIN_CREDS, { email: adminEmail, password: adminPass });
  }

  setDB(DB_KEYS.PHOTOGRAPHER, photographer);

  renderNavbar();
  renderHero();
  renderAbout();
  renderFooter();
  renderAdminDashboardModal();

  alert("Studio profile, photo & UPI settings updated!");
}

// ----------------------------------------------------
// ACTIVE HEADER NAVIGATION & SCROLLSPY
// ----------------------------------------------------
let activeNavSection = '';

function setActiveNav(sectionId) {
  if (activeNavSection === sectionId) return; // Zero recalculations if section hasn't changed
  activeNavSection = sectionId;

  // Update desktop nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-nav') === sectionId);
  });

  // Update mobile nav links
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-nav') === sectionId);
  });
}

let isNavClickScrolling = false;
let navScrollTimeout = null;

function handleNavClick(sectionId) {
  setActiveNav(sectionId);
  isNavClickScrolling = true;
  if (navScrollTimeout) clearTimeout(navScrollTimeout);
  navScrollTimeout = setTimeout(() => {
    isNavClickScrolling = false;
  }, 1000);
}

function initScrollSpy() {
  const sections = ['contact', 'about', 'packages', 'portfolio'];
  let scrollTicking = false;
  
  window.addEventListener('scroll', () => {
    if (isNavClickScrolling || scrollTicking) return;
    scrollTicking = true;

    window.requestAnimationFrame(() => {
      scrollTicking = false;

      // Check if user scrolled near the bottom of the page -> activate Contact
      const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 150);
      if (isAtBottom) {
        setActiveNav('contact');
        return;
      }

      const scrollPos = window.scrollY + 220;
      
      // Check from bottom to top
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveNav(sections[i]);
          return;
        }
      }
      
      // If above portfolio (e.g. at the hero section)
      if (window.scrollY < 300) {
        setActiveNav('');
      }
    });
  }, { passive: true });
}

// ----------------------------------------------------
// GLOBAL EVENT LISTENERS & KEYBOARD CONTROLS
// ----------------------------------------------------
function setupEventListeners() {
  initScrollSpy();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      nextLightboxPhoto();
    } else if (e.key === 'ArrowLeft') {
      prevLightboxPhoto();
    }
  });
}

function resetDemoData() {
  if (confirm("Reset website data back to factory demo state?")) {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }
}

// Expose functions globally to window for inline HTML onclick handlers
window.handleNavClick = handleNavClick;
window.setActiveNav = setActiveNav;
window.openBookingModal = openBookingModal;
window.updateBookingPackageSummary = updateBookingPackageSummary;
window.handleBookingSubmit = handleBookingSubmit;
window.openPaymentModal = openPaymentModal;
window.finalizeBookingPayment = finalizeBookingPayment;
window.openQRScannerModal = openQRScannerModal;
window.handleClientCodeSubmit = handleClientCodeSubmit;
window.openClientGallery = openClientGallery;
window.simulateDownloadZip = simulateDownloadZip;
window.openPortfolioPhotos = openPortfolioPhotos;
window.togglePortfolioExpand = togglePortfolioExpand;
window.openClientGalleryPhoto = openClientGalleryPhoto;
window.openPhotoModal = openPhotoModal;
window.nextLightboxPhoto = nextLightboxPhoto;
window.prevLightboxPhoto = prevLightboxPhoto;
window.goToLightboxPhoto = goToLightboxPhoto;
window.openVideoModal = openVideoModal;
window.closeModal = closeModal;
window.openAdminModal = openAdminModal;
window.handleAdminLogin = handleAdminLogin;
window.handleAdminLogout = handleAdminLogout;
window.switchAdminTab = switchAdminTab;
window.deleteBooking = deleteBooking;
window.handleCreateClientGallery = handleCreateClientGallery;
window.handleGalCoverUpload = handleGalCoverUpload;
window.handleGalPhotosUpload = handleGalPhotosUpload;
window.printClientQrCard = printClientQrCard;
window.handleDevicePhotoUpload = handleDevicePhotoUpload;
window.handleQuickUrlPhotoUpload = handleQuickUrlPhotoUpload;
window.deletePortfolioItem = deletePortfolioItem;
window.handleDeviceHeroUpload = handleDeviceHeroUpload;
window.handleQuickHeroAdd = handleQuickHeroAdd;
window.deleteHeroSlide = deleteHeroSlide;
window.savePackageRates = savePackageRates;
window.handleSaveStudioSettings = handleSaveStudioSettings;
window.handlePhotographerPhotoUpload = handlePhotographerPhotoUpload;
window.setPortfolioCategory = setPortfolioCategory;
window.switchHeroSlide = switchHeroSlide;
window.toggleMobileMenu = toggleMobileMenu;
window.openReviewModal = openReviewModal;
window.setFormRating = setFormRating;
window.handleReviewSubmit = handleReviewSubmit;
window.resetDemoData = resetDemoData;
window.handleSaveSeasonalOffer = handleSaveSeasonalOffer;
window.toggleSeasonalOfferActive = toggleSeasonalOfferActive;
window.updateDiscountTypeUI = updateDiscountTypeUI;
window.getPackageDiscountedPrice = getPackageDiscountedPrice;
window.returnToAdminFromGallery = returnToAdminFromGallery;
