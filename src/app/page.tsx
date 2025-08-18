import Link from "next/link"
import { Star, Users, Award, Clock, Search, Filter, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"

// Mock data - in real app this would come from database
const platformStats = {
  totalBikesSold: 1247,
  happyClients: 1180,
  yearsInBusiness: 8,
  averageRating: 4.8
}

const featuredBikes = [
  {
    id: 1,
    brand: "Yamaha",
    model: "R15 V4",
    year: 2023,
    price: 485000,
    image: "/api/placeholder/400/300",
    condition: "Excellent",
    engineSize: 155,
    color: "Racing Blue"
  },
  {
    id: 2,
    brand: "Honda",
    model: "CBR 150R",
    year: 2022,
    price: 420000,
    image: "/api/placeholder/400/300",
    condition: "Good",
    engineSize: 149,
    color: "Pearl White"
  },
  {
    id: 3,
    brand: "Suzuki",
    model: "Gixxer SF",
    year: 2023,
    price: 395000,
    image: "/api/placeholder/400/300",
    condition: "Excellent",
    engineSize: 155,
    color: "Metallic Black"
  }
]

const soldBikes = [
  { brand: "KTM", model: "Duke 200", price: 380000, soldDate: "2024-01-15" },
  { brand: "Bajaj", model: "Pulsar NS200", price: 295000, soldDate: "2024-01-10" },
  { brand: "TVS", model: "Apache RTR 200", price: 285000, soldDate: "2024-01-08" }
]

const customerReviews = [
  {
    name: "Ahmed Rahman",
    rating: 5,
    review: "Excellent service! Got my dream bike at a great price. The team was very professional and transparent.",
    bike: "Yamaha R15 V3"
  },
  {
    name: "Fatima Khan",
    rating: 5,
    review: "Amazing experience. The bike was exactly as described and the paperwork was handled smoothly.",
    bike: "Honda CBR 150R"
  },
  {
    name: "Karim Hassan",
    rating: 4,
    review: "Great platform for buying bikes. Found exactly what I was looking for. Highly recommended!",
    bike: "Suzuki Gixxer"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted <span className="text-yellow-400">Bike Platform</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Quality motorcycles, transparent deals, and professional service you can trust
            </p>
            
            {/* Trust Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">{platformStats.totalBikesSold}+</div>
                <div className="text-sm md:text-base text-blue-100">Bikes Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">{platformStats.happyClients}+</div>
                <div className="text-sm md:text-base text-blue-100">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">{platformStats.yearsInBusiness}</div>
                <div className="text-sm md:text-base text-blue-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">{platformStats.averageRating}/5</div>
                <div className="text-sm md:text-base text-blue-100">Average Rating</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/listings" className="flex items-center gap-2">
                  Browse Bikes <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Find Your Perfect Bike</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input 
                  placeholder="Search by brand, model, or keyword..." 
                  className="h-12 text-lg"
                />
              </div>
              <Button size="lg" className="md:w-auto">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button size="lg" variant="outline" className="md:w-auto">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bikes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Bikes</h2>
            <Link href="/listings">
              <Button variant="outline">View All <ArrowRight className="h-4 w-4 ml-2" /></Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBikes.map((bike) => (
              <Card key={bike.id} className="bike-card">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                    <div className="text-muted-foreground">Bike Image</div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{bike.brand} {bike.model}</CardTitle>
                    <Badge className="trust-badge">{bike.condition}</Badge>
                  </div>
                  <CardDescription className="mb-3">
                    {bike.year} • {bike.engineSize}CC • {bike.color}
                  </CardDescription>
                  <div className="text-2xl font-bold text-primary mb-3">
                    ৳{bike.price.toLocaleString()}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <div className="flex gap-2 w-full">
                    <Button className="flex-1">View Details</Button>
                    <Button variant="outline" className="flex-1">Contact</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Sold */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Recently Sold Bikes</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {soldBikes.map((bike, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                    <h3 className="font-semibold">{bike.brand} {bike.model}</h3>
                    <p className="text-muted-foreground">৳{bike.price.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Sold on {new Date(bike.soldDate).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {customerReviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">({review.rating}/5)</span>
                  </div>
                  <p className="text-muted-foreground mb-4">"{review.review}"</p>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">Purchased: {review.bike}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Transparency Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose BahonXBD?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
                <p className="text-muted-foreground">Every bike is thoroughly inspected and verified before listing</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Trusted by Thousands</h3>
                <p className="text-muted-foreground">Over 1000+ satisfied customers and growing</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">8 Years Experience</h3>
                <p className="text-muted-foreground">Established reputation in the motorcycle industry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Bike?</h2>
          <p className="text-xl mb-8 text-blue-100">Browse our extensive collection or get in touch with our experts</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/listings">Browse All Bikes</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/bike-wash">Bike Wash Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
