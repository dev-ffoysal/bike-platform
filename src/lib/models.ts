import { ObjectId } from 'mongodb'

// Bike interface
export interface Bike {
  _id?: ObjectId
  brand: string
  model: string
  year: number
  price: number
  engineSize: number // in CC
  color: string
  condition: 'excellent' | 'good' | 'fair' | 'needs-repair'
  mileage: number
  description: string
  images: string[] // URLs to images
  features: string[]
  repairCosts: RepairCost[]
  totalRepairCost: number
  status: 'available' | 'sold' | 'reserved'
  createdAt: Date
  updatedAt: Date
  soldAt?: Date
  soldPrice?: number
}

// Repair cost tracking
export interface RepairCost {
  _id?: ObjectId
  bikeId: ObjectId
  description: string
  cost: number
  date: Date
  category: 'engine' | 'body' | 'electrical' | 'tires' | 'brakes' | 'other'
  parts: string[]
}

// Order interface
export interface Order {
  _id?: ObjectId
  bikeId: ObjectId
  customerName: string
  customerEmail: string
  customerPhone: string
  customerNID?: string
  salePrice: number
  documents: string[] // URLs to documents
  status: 'pending' | 'verified' | 'completed' | 'cancelled'
  verificationToken?: string
  verificationTokenExpiry?: Date
  isVerified: boolean
  createdAt: Date
  updatedAt: Date
  completedAt?: Date
}

// Bike wash service
export interface BikeWashService {
  _id?: ObjectId
  name: string
  description: string
  price: number
  duration: number // in minutes
  features: string[]
  isActive: boolean
}

// Bike wash location
export interface BikeWashLocation {
  _id?: ObjectId
  name: string
  address: string
  city: string
  phone: string
  coordinates: {
    lat: number
    lng: number
  }
  services: ObjectId[] // References to BikeWashService
  workingHours: {
    [key: string]: {
      open: string
      close: string
      isOpen: boolean
    }
  }
  isActive: boolean
}

// Admin user
export interface AdminUser {
  _id?: ObjectId
  username: string
  email: string
  passwordHash: string
  role: 'admin' | 'super-admin'
  createdAt: Date
  lastLogin?: Date
}

// Platform statistics
export interface PlatformStats {
  _id?: ObjectId
  totalBikesSold: number
  totalEarnings: number
  totalCustomers: number
  yearsInBusiness: number
  averageRating: number
  totalReviews: number
  updatedAt: Date
}

// Customer review
export interface CustomerReview {
  _id?: ObjectId
  customerName: string
  rating: number // 1-5
  review: string
  bikeId?: ObjectId
  orderId?: ObjectId
  isVerified: boolean
  isPublished: boolean
  createdAt: Date
}

// Search filters
export interface BikeFilters {
  brand?: string
  minPrice?: number
  maxPrice?: number
  minEngineSize?: number
  maxEngineSize?: number
  color?: string
  condition?: string
  minYear?: number
  maxYear?: number
  status?: string
  search?: string
}