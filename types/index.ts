export interface ContactInfo {
  icon: string
  title: string
  info: string
  linkText: string
  linkHref: string
}

export interface Service {
  icon: string
  title: string
  description: string
}

export interface Step {
  number: number
  title: string
  description: string
}

export interface Testimonial {
  quote: string
  author: string
  location: string
}

export interface FormData {
  name: string
  email: string
  phone: string
  message?: string
}

export interface FormErrors {
  name?: string
  email?: string
  phone?: string
}
