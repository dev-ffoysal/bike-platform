'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Heart, 
  Share2, 
  Calendar, 
  Gauge, 
  Fuel, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Camera
} from 'lucide-react'
import { Bike } from '@/lib/models'
import Image from 'next/image'
import Link from 'next/link'

// Mock data - in real app, this would come from API
const mockBike: Bike = {
  _id: '1',
  title: 'Yamaha R15 V4',
  brand: 'Yamaha',
  model: 'R15 V4',
  year: 2023,
  price: 285000,
  mileage: 2500,
  condition: 'excellent',
  engineCapacity: 155,
  fuelType: 'petrol',
  transmission: 'manual',
  color: 'Racing Blue',
  location: 'Dhaka',
  description: 'Well-maintained Yamaha R15 V4 with all original parts and service records. This bike has been garage-kept and serviced regularly at authorized Yamaha service centers. Perfect for both city commuting and weekend rides. All documents are clear and ready for transfer.',
  images: [
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600'
  ],
  features: [
    'ABS (Anti-lock Braking System)',
    'LED Headlight with DRL',
    'Fully Digital Instrument Cluster',
    'Slipper Clutch',
    'USD Front Forks',
    'Dual Channel ABS',
    'Quick Shifter Ready',
    'Bluetooth Connectivity'
  ],
  isVerified: true,
  isFeatured: true,
  status: 'available',
  createdAt: new Date('2024-01-15'),
  updatedAt: new Date('2024-01-15'),
  ownerContact: {
    name: 'Ahmed Rahman',
    phone: '+880 1712-345678',
    email: 'ahmed.rahman@email.com',
    preferredContactTime: 'Anytime (9 AM - 9 PM)'
  },
  specifications: {
    engine: {
      type: 'Single Cylinder, 4-Stroke, SOHC',
      displacement: '155cc',
      maxPower: '18.4 PS @ 10,000 rpm',
      maxTorque: '14.2 Nm @ 7,500 rpm',
      fuelSystem: 'Fuel Injection'
    },
    dimensions: {
      length: '1990 mm',
      width: '725 mm',
      height: '1135 mm',
      wheelbase: '1325 mm',
      groundClearance: '170 mm',
      seatHeight: '815 mm',
      kerbWeight: '142 kg'
    },
    performance: {
      topSpeed: '136 km/h',
      mileage: '40-45 km/l',
      fuelTankCapacity: '11 liters',
      acceleration: '0-60 km/h in 4.8 seconds'
    },
    features: {
      brakes: 'Disc (Front & Rear) with Dual Channel ABS',
      suspension: 'USD Forks (Front), Monoshock (Rear)',
      tyres: 'Tubeless',
      wheels: 'Alloy Wheels',
      lighting: 'Full LED'
    }
  },
  serviceHistory: [
    {
      date: '2024-01-10',
      mileage: 2500,
      service: 'Regular Service',
      cost: 2500,
      serviceCenter: 'Yamaha Authorized Service Center'
    },
    {
      date: '2023-10-15',
      mileage: 1800,
      service: 'Oil Change & Filter Replacement',
      cost: 1800,
      serviceCenter: 'Yamaha Authorized Service Center'
    },
    {
      date: '2023-07-20',
      mileage: 1200,
      service: 'First Service',
      cost: 1500,
      serviceCenter: 'Yamaha Authorized Service Center'
    }
  ]
}

export default function BikeDetailsPage() {
  const params = useParams()
  const [bike, setBike] = useState<Bike | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setBike(mockBike)
      setLoading(false)
    }, 500)
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!bike) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Bike not found. Please check the URL or go back to listings.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-BD', {
      style: 'currency',
      currency: 'BDT',
      minimumFractionDigits: 0
    }).format(price)
  }

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'excellent': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'good': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      case 'fair': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/listings" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Listings
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={bike.images[selectedImageIndex]}
                    alt={`${bike.title} - Image ${selectedImageIndex + 1}`}
                    width={800}
                    height={500}
                    className="w-full h-96 object-cover rounded-t-lg"
                  />
                  {bike.isFeatured && (
                    <Badge className="absolute top-4 left-4 bg-yellow-500 text-yellow-900">
                      Featured
                    </Badge>
                  )}
                  {bike.isVerified && (
                    <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                    <Camera className="h-3 w-3" />
                    {selectedImageIndex + 1} / {bike.images.length}
                  </div>
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="p-4">
                  <div className="flex gap-2 overflow-x-auto">
                    {bike.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded border-2 overflow-hidden ${
                          selectedImageIndex === index ? 'border-primary' : 'border-gray-200'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          width={80}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Information Tabs */}
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="specifications">Specs</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="service">Service History</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Description</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {bike.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <Calendar className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="font-semibold">{bike.year}</div>
                        <div className="text-sm text-muted-foreground">Year</div>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <Gauge className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="font-semibold">{bike.mileage.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Kilometers</div>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <Fuel className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="font-semibold">{bike.engineCapacity}cc</div>
                        <div className="text-sm text-muted-foreground">Engine</div>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <MapPin className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="font-semibold">{bike.location}</div>
                        <div className="text-sm text-muted-foreground">Location</div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="specifications" className="mt-6">
                    {bike.specifications && (
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Engine</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex justify-between py-2 border-b">
                              <span className="text-muted-foreground">Type:</span>
                              <span>{bike.specifications.engine.type}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                              <span className="text-muted-foreground">Displacement:</span>
                              <span>{bike.specifications.engine.displacement}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                              <span className="text-muted-foreground">Max Power:</span>
                              <span>{bike.specifications.engine.maxPower}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                              <span className="text-muted-foreground">Max Torque:</span>
                              <span>{bike.specifications.engine.maxTorque}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Dimensions</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex justify-between py-2 border-b">
                              <span className="text-muted-foreground">Length:</span>
                              <span>{bike.specifications.dimensions.length}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                              <span className="text-muted-foreground">Width:</span>
                              <span>{bike.specifications.dimensions.width}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                              <span className="text-muted-foreground">Height:</span>
                              <span>{bike.specifications.dimensions.height}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                              <span className="text-muted-foreground">Kerb Weight:</span>
                              <span>{bike.specifications.dimensions.kerbWeight}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Performance</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex justify-between py-2 border-b">
                              <span className="text-muted-foreground">Top Speed:</span>
                              <span>{bike.specifications.performance.topSpeed}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                              <span className="text-muted-foreground">Mileage:</span>
                              <span>{bike.specifications.performance.mileage}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                              <span className="text-muted-foreground">Fuel Tank:</span>
                              <span>{bike.specifications.performance.fuelTankCapacity}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                              <span className="text-muted-foreground">Acceleration:</span>
                              <span>{bike.specifications.performance.acceleration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="features" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {bike.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="service" className="mt-6">
                    {bike.serviceHistory && bike.serviceHistory.length > 0 ? (
                      <div className="space-y-4">
                        {bike.serviceHistory.map((service, index) => (
                          <div key={index} className="border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h4 className="font-semibold">{service.service}</h4>
                                <p className="text-sm text-muted-foreground">{service.serviceCenter}</p>
                              </div>
                              <div className="text-right">
                                <div className="font-semibold">৳{service.cost.toLocaleString()}</div>
                                <div className="text-sm text-muted-foreground">{service.date}</div>
                              </div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Mileage: {service.mileage.toLocaleString()} km
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No service history available.</p>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Price and Contact */}
          <div className="space-y-6">
            {/* Price and Basic Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{bike.title}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge className={getConditionColor(bike.condition)}>
                    {bike.condition.charAt(0).toUpperCase() + bike.condition.slice(1)}
                  </Badge>
                  <Badge variant="outline">{bike.brand}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-primary">
                  {formatPrice(bike.price)}
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Model:</span>
                    <span>{bike.model}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Color:</span>
                    <span>{bike.color}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Transmission:</span>
                    <span className="capitalize">{bike.transmission}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fuel Type:</span>
                    <span className="capitalize">{bike.fuelType}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            {bike.ownerContact && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Seller</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-semibold">{bike.ownerContact.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {bike.ownerContact.preferredContactTime}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="h-4 w-4 mr-2" />
                      {bike.ownerContact.phone}
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="h-4 w-4 mr-2" />
                      {bike.ownerContact.email}
                    </Button>
                  </div>
                  
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      Always meet in a safe, public location and verify the bike's documents before making any payment.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            )}

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold">{bike.location}</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Bike is located in {bike.location}. Contact seller for exact meeting location.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}