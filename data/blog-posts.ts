export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
    tags: string[];
    image: string;
    comments: number;
  }
  
  export const blogPosts: BlogPost[] = [
    // Sustainability
    {
      id: 1,
      title: "Sustainable Sugar Production: Our Commitment to the Environment",
      excerpt: "Learn about Mumias Sugar Company&apos;s initiatives to reduce environmental impact and promote sustainable farming practices.",
      author: "Jane Doe",
      date: "2024-07-01",
      category: "Sustainability",
      tags: ["environment", "farming", "sustainability"],
      image: "/sustainable-sugar.jpg",
      comments: 12,
    },
    {
      id: 2,
      title: "Water Conservation in Sugar Production: Our Innovative Approaches",
      excerpt: "Discover how Mumias Sugar is leading the way in water conservation techniques within the sugar industry.",
      author: "John Smith",
      date: "2024-06-15",
      category: "Sustainability",
      tags: ["water conservation", "innovation", "sustainability"],
      image: "/water-conservation.jpg",
      comments: 8,
    },
    {
      id: 3,
      title: "Renewable Energy in Sugar Production: Our Solar Initiative",
      excerpt: "Explore Mumias Sugar&apos;s transition to solar energy and its impact on our carbon footprint.",
      author: "Emma Watson",
      date: "2024-05-20",
      category: "Sustainability",
      tags: ["renewable energy", "solar power", "carbon footprint"],
      image: "/solar-initiative.jpg",
      comments: 15,
    },
  
    // Industry News
    {
      id: 4,
      title: "Global Sugar Market Trends: What to Expect in 2025",
      excerpt: "An in-depth analysis of the global sugar market and predictions for the coming year.",
      author: "Michael Bloomberg",
      date: "2024-06-28",
      category: "Industry News",
      tags: ["market trends", "global sugar", "industry analysis"],
      image: "/market-trends.jpg",
      comments: 20,
    },
    {
      id: 5,
      title: "The Impact of Climate Change on Sugar Cane Farming",
      excerpt: "Examining the challenges faced by sugar cane farmers due to changing climate patterns.",
      author: "Dr. Sarah Green",
      date: "2024-06-10",
      category: "Industry News",
      tags: ["climate change", "sugar cane", "farming challenges"],
      image: "/climate-impact.jpg",
      comments: 18,
    },
    {
      id: 6,
      title: "Emerging Technologies in Sugar Processing",
      excerpt: "A look at cutting-edge technologies that are revolutionizing sugar processing methods.",
      author: "Tech Guru",
      date: "2024-05-05",
      category: "Industry News",
      tags: ["technology", "sugar processing", "innovation"],
      image: "/emerging-tech.jpg",
      comments: 25,
    },
  
    // Company Updates
    {
      id: 7,
      title: "Mumias Sugar Company Announces Expansion Plans",
      excerpt: "Exciting news as we prepare to increase our production capacity and enter new markets.",
      author: "CEO John Doe",
      date: "2024-06-19",
      category: "Company Updates",
      tags: ["expansion", "growth", "business"],
      image: "/company-expansion.jpg",
      comments: 10,
    },
    {
      id: 8,
      title: "Q2 2024 Financial Results: Record-Breaking Quarter for Mumias Sugar",
      excerpt: "A detailed look at our financial performance in the second quarter of 2024.",
      author: "CFO Jane Smith",
      date: "2024-07-15",
      category: "Company Updates",
      tags: ["financial results", "quarterly report", "growth"],
      image: "/financial-results.jpg",
      comments: 7,
    },
    {
      id: 9,
      title: "Mumias Sugar Wins 'Sustainable Business of the Year Award",
      excerpt: "Celebrating our recent recognition for commitment to sustainable business practices.",
      author: "PR Team",
      date: "2024-05-30",
      category: "Company Updates",
      tags: ["awards", "sustainability", "recognition"],
      image: "/award-win.jpg",
      comments: 30,
    },
  
    // Recipes
    {
      id: 10,
      title: "5 Delicious Desserts Using Mumias Sugar",
      excerpt: "Try these mouthwatering dessert recipes that showcase the quality of our sugar products.",
      author: "Chef Michael Brown",
      date: "2024-06-22",
      category: "Recipes",
      tags: ["desserts", "baking", "culinary"],
      image: "/sugar-recipes.jpg",
      comments: 40,
    },
    {
      id: 11,
      title: "Healthy Smoothies with a Touch of Sweetness",
      excerpt: "Discover how to create nutritious smoothies using Mumias Sugar for a perfect balance of health and taste.",
      author: "Nutritionist Lisa Green",
      date: "2024-07-05",
      category: "Recipes",
      tags: ["smoothies", "healthy recipes", "nutrition"],
      image: "/healthy-smoothies.webp",
      comments: 22,
    },
    {
      id: 12,
      title: "Traditional African Sweets: A Sugar-Coated Journey",
      excerpt: "Explore the rich tradition of African sweets and learn how to make them with Mumias Sugar.",
      author: "Cultural Food Expert",
      date: "2024-06-01",
      category: "Recipes",
      tags: ["traditional sweets", "African cuisine", "cultural recipes"],
      image: "/african-sweets.jpg",
      comments: 35,
    },
  
    // Community
    {
      id: 13,
      title: "Mumias Sugar&apos;s Community Outreach Program: Empowering Local Farmers",
      excerpt: "Our new initiative aims to support and educate local farmers, ensuring mutual growth and prosperity.",
      author: "Community Manager",
      date: "2024-06-25",
      category: "Community",
      tags: ["outreach", "education", "local farmers"],
      image: "/community-outreach.jpg",
      comments: 15,
    },
    {
      id: 14,
      title: "Building Schools: Mumias Sugars Commitment to Education",
      excerpt: "Learn about our ongoing project to build and support schools in sugar-growing communities.",
      author: "Education Officer",
      date: "2024-07-10",
      category: "Community",
      tags: ["education", "school building", "community development"],
      image: "/school-building.jpg",
      comments: 28,
    },
    {
      id: 15,
      title: "Health Camps: Providing Medical Care to Sugar Cane Farmers",
      excerpt: "A look at Mumias Sugars initiative to bring essential healthcare services to rural farming communities.",
      author: "Health Coordinator",
      date: "2024-05-15",
      category: "Community",
      tags: ["healthcare", "farmers' welfare", "community service"],
      image: "/health-camps.jpg",
      comments: 20,
    },
  ]