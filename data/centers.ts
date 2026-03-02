export type Center = {
  id: number
  slug: string
  name: string
  image: string
  address: string
  city: string
  sport: string
  phone: string
  time: string
}

export const centers: Center[] = [
  {
    id: 1,
    slug: "dibrugarh",
    name: "Upper Assam Shuttlers Academy Arena",
    image: "/centers/assam.png",
    address:
      "Upper Assam Shuttlers Academy Arena, Udoipur, Rajabhata, Under Godapani Flyover, Dibrugarh, Assam – 786007, India",
    city: "Dibrugarh",
    sport: "Badminton",
    phone: "+91 9082229728",
    time: "05:00 AM to 11:00 PM",
  },
  {
    id: 2,
    slug: "jalandhar",
    name: "Dipankar Badminton Academy Jalandhar",
    image: "/centers/jalandhar.webp",
    address:
      "Civil Lines, Jalandhar Cantt, Jandiala Road, Jalandhar, Punjab – 144002, India",
    city: "Jalandhar",
    sport: "Badminton",
    phone: "+91 9082229728",
    time: "05:00 AM to 11:00 PM",
  },
  {
    id: 3,
    slug: "pune",
    name: "Dipankar Badminton Academy Pune",
    image: "/centers/pune.jpeg",
    address:
      "S.No. 295/1A, Nimbalkar Nagar, Lane No. 3, D.Y. Patil College Road, Opposite Zepto Warehouse, Lohegaon, Pune – 411047, India",
    city: "Pune",
    sport: "Badminton",
    phone: "+91 9082229728, +91 8956977122",
    time: "05:00 AM to 11:00 PM",
  },
  {
    id: 4,
    slug: "navi-mumbai",
    name: "Dipankar Badminton Academy Navi Mumbai",
    image: "/centers/navi-mumbai.jpg",
    address:
      "Ramsheth Thakur International Sports Complex, Sector 19A, Ulwe, Navi Mumbai, Maharashtra – 410026, India",
    city: "Navi Mumbai",
    sport: "Badminton",
    phone: "+91 9082229728",
    time: "05:00 AM to 11:00 PM",
  },
]