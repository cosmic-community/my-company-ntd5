# My Company Website

![App Preview](https://imgix.cosmicjs.com/aaeaba40-3d94-11f1-a386-4d54a5265133-autopilot-photo-1472099645785-5658abf4ff4e-1776784415710.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, professional company website built with Next.js 16 and Cosmic CMS, featuring services, team members, case studies, and testimonials.

## Features

- 🏠 Beautiful homepage with featured content
- 💼 Services showcase with detailed individual pages
- 👥 Team member profiles with full bios
- 📊 Case studies highlighting client success
- ⭐ Client testimonials with star ratings
- 📱 Fully responsive design
- ⚡ Fast server-side rendering
- 🎨 Modern UI with Tailwind CSS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69e793bb90067b42f59fd41b&clone_repository=69e794c490067b42f59fd462)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials. User instructions: A company website with services, team members, case studies, and testimonials"

### Code Generation Prompt

> Build a Next.js application for a company website called "My Company". The content is managed in Cosmic CMS with the following object types: services, team-members, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: A company website with services, team members, case studies, and testimonials

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Cosmic CMS SDK

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

```bash
bun install
```

Create a `.env.local` file with:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

Run the dev server:

```bash
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all services
const { objects } = await cosmic.objects
  .find({ type: 'services' })
  .depth(1)

// Fetch a single team member
const { object } = await cosmic.objects
  .findOne({ type: 'team-members', slug: 'john-doe' })
  .depth(1)
```

## Cosmic CMS Integration

This app uses the [Cosmic SDK](https://www.cosmicjs.com/docs) to fetch content from four object types: services, team-members, case-studies, and testimonials.

## Deployment Options

- **Vercel**: Connect your repo and add environment variables
- **Netlify**: Deploy with environment variables configured

<!-- README_END -->