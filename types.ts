export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    name?: string;
    short_description?: string;
    description?: string;
    icon?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    features?: string[] | string;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    job_title?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    bio?: string;
    email?: string;
    linkedin?: string;
  };
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    title?: string;
    client_name?: string;
    industry?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    challenge?: string;
    solution?: string;
    results?: string;
    related_services?: Service[];
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote?: string;
    client_name?: string;
    client_title?: string;
    company?: string;
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    rating?: number | string;
    team_member?: TeamMember;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}