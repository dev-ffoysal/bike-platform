'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Clock, Star, Phone, Calendar, Droplets, Sparkles, Shield, Zap } from 'lucide-react'

// Mock data for bike wash locations
const washLocations = [
  {
    id: 1,
    name: "Premium Wash Center - Dhanmondi",
    address: "House 15, Road 7, Dhanmondi, Dhaka",
    phone: "+880 1712-345678",
    rating: 4.8,
    reviews: 156,
    services: ["Basic Wash", "Premium Wash", "Engine Cleaning", "Chain Lubrication"],
    pricing: {
      basic: 150,
      premium: 300,
      engine: 200,
      chain: 100
    },
    openHours: "8:00 AM - 8:00 PM",
    image: "/api/placeholder/400/250",
    features: ["Eco-friendly products", "Quick service", "Professional staff", "Quality guarantee"]
  },
  {
    id: 2,
    name: "Express Bike Care - Gulshan",
    address: "Plot 45, Road 11, Gulshan-2, Dhaka",
    phone: "+880 1798-765432",
    rating: 4.6,
    reviews: 89,
    services: ["Basic Wash", "Premium Wash", "Detailing", "Wax Polish"],
    pricing: {
      basic: 120,
      premium: 280,
      detailing: 500,
      wax: 250
    },
    openHours: "9:00 AM - 9:00 PM",
    image: "/api/placeholder/400/250",
    features: ["Express service", "Mobile app booking", "Loyalty rewards", "Free pickup"]
  },
  {
    id: 3,
    name: "Sparkle Bike Wash - Uttara",
    address: "Sector 7, Road 12, Uttara, Dhaka",
    phone: "+880 1634-987654",
    rating: 4.7,
    reviews: 203,
    services: ["Basic Wash", "Premium Wash", "Engine Cleaning", "Interior Cleaning"],
    pricing: {
      basic: 140,
      premium: 320,
      engine: 180,
      interior: 150
    },
    openHours: "7:00 AM - 10:00 PM",
    image: "/api/placeholder/400/250",
    features: ["24/7 service", "Advanced equipment", "Trained technicians", "Insurance coverage"]
  },
  {
    id: 4,
    name: "Royal Bike Spa - Banani",
    address: "House 78, Road 5, Banani, Dhaka",
    phone: "+880 1556-123789",
    rating: 4.9,
    reviews: 312,
    services: ["Basic Wash", "Premium Wash", "Full Detailing", "Paint Protection"],
    pricing: {
      basic: 180,
      premium: 350,
      detailing: 600,
      protection: 400
    },
    openHours: "8:00 AM - 7:00 PM",
    image: "/api/placeholder/400/250",
    features: ["Premium products", "VIP treatment", "Complimentary tea", "Waiting lounge"]
  }
]

const servicePackages = [
  {
    name: "Basic Wash",
    price: "৳120 - ৳180",
    duration: "30 mins",
    icon: <Droplets className="h-6 w-6" />,
    features: ["Exterior wash", "Tire cleaning", "Basic drying", "Quick inspection"]
  },
  {
    name: "Premium Wash",
    price: "৳280 - ৳350",
    duration: "45 mins",
    icon: <Sparkles className="h-6 w-6" />,
    features: ["Complete exterior wash", "Engine bay cleaning", "Chain lubrication", "Polish application", "Interior wipe down"]
  },
  {
    name: "Full Detailing",
    price: "৳500 - ৳600",
    duration: "90 mins",
    icon: <Shield className="h-6 w-6" />,
    features: ["Deep cleaning", "Engine detailing", "Paint correction", "Wax protection", "Interior deep clean", "Quality check"]
  },
  {
    name: "Express Service",
    price: "৳100 - ৳150",
    duration: "15 mins",
    icon: <Zap className="h-6 w-6" />,
    features: ["Quick rinse", "Spot cleaning", "Fast dry", "Basic inspection"]
  }
]

export default function BikeWashPage() {
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedWashCenter, setSelectedWashCenter] = useState<any>(null)

  const filteredLocations = washLocations.filter(location =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.address.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleBooking = (location: any) => {
    setSelectedWashCenter(location)
    setIsBookingOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Professional Bike Wash Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Keep your bike sparkling clean with our premium wash services. Professional care, eco-friendly products, and convenient locations across Dhaka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Find Nearest Location
            </Button>
            <Button size="lg" variant="outline">
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of professional bike wash services designed to keep your motorcycle in pristine condition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicePackages.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-blue-600">
                    {service.price}
                  </CardDescription>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {service.duration}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <Input
                placeholder="Search by location or area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Select Area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dhanmondi">Dhanmondi</SelectItem>
                <SelectItem value="gulshan">Gulshan</SelectItem>
                <SelectItem value="uttara">Uttara</SelectItem>
                <SelectItem value="banani">Banani</SelectItem>
                <SelectItem value="mirpur">Mirpur</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Service Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">Basic Wash</SelectItem>
                <SelectItem value="premium">Premium Wash</SelectItem>
                <SelectItem value="detailing">Full Detailing</SelectItem>
                <SelectItem value="express">Express Service</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Wash Locations */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
            <p className="text-muted-foreground">
              Find the nearest bike wash center and book your service today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredLocations.map((location) => (
              <Card key={location.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-green-600">
                    Open
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{location.name}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4" />
                        {location.address}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Phone className="h-4 w-4" />
                        {location.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {location.openHours}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{location.rating}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {location.reviews} reviews
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Services & Pricing:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(location.pricing).map(([service, price]) => (
                        <div key={service} className="flex justify-between">
                          <span className="capitalize">{service}:</span>
                          <span className="font-semibold">৳{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1"
                      onClick={() => handleBooking(location)}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Now
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <MapPin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Book Bike Wash Service</DialogTitle>
            <DialogDescription>
              {selectedWashCenter?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="service">Select Service</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose service type" />
                </SelectTrigger>
                <SelectContent>
                  {selectedWashCenter?.services.map((service: string, idx: number) => (
                    <SelectItem key={idx} value={service.toLowerCase()}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="date">Preferred Date</Label>
              <Input type="date" id="date" />
            </div>
            
            <div>
              <Label htmlFor="time">Preferred Time</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select time slot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9:00">9:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="14:00">2:00 PM</SelectItem>
                  <SelectItem value="15:00">3:00 PM</SelectItem>
                  <SelectItem value="16:00">4:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+880 1XXX-XXXXXX" />
            </div>
            
            <div>
              <Label htmlFor="notes">Special Instructions (Optional)</Label>
              <Textarea id="notes" placeholder="Any special requirements..." />
            </div>
            
            <div className="flex gap-2">
              <Button className="flex-1">Confirm Booking</Button>
              <Button variant="outline" onClick={() => setIsBookingOpen(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Our Bike Wash Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Professional Quality</h3>
              <p className="text-muted-foreground">
                Trained technicians using premium products and advanced equipment for the best results.
              </p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <Droplets className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Eco-Friendly</h3>
              <p className="text-muted-foreground">
                Environmentally safe cleaning products that protect your bike and the planet.
              </p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Quick & Convenient</h3>
              <p className="text-muted-foreground">
                Fast service with online booking and multiple locations for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}