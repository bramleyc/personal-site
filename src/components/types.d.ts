export interface Job {
  role: string
  company?: string
  companyLogo?: string
  companyAlt?: string
  period: string
  bullets?: string[]
}

export interface Project {
  name: string
  blurb: string
  link: string
  tags: string[]
}
