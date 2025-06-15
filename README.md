# Next.js Cars Catalog — Test Project

This is a test assignment project implementing a car catalog page built with Next.js, React, and TypeScript.  
The project demonstrates usage of the new Next.js App Router, client-side data fetching with pagination and sorting, and integration with an external API.

---

<img src="https://github.com/user-attachments/assets/92a720fe-23aa-4bc5-adc3-7bc821af8114" alt="Screenshot 1" width="700" />
<img src="https://github.com/user-attachments/assets/9d0903cf-fcc4-4e79-b518-d0940eb08953" alt="Screenshot 2" width="700" />
<img src="https://github.com/user-attachments/assets/dd359e8f-12e8-415b-a3b2-327c263af792" alt="Screenshot 3" width="400" />


## Features

- **Car catalog page** displaying 12 cars per page
- **Sorting options** by price: ascending, descending, or no sorting
- **Pagination** with page navigation, synced with URL query parameters
- Responsive design with mobile support (from 360px width)
- Clean, reusable React components with TypeScript typings
- UI styled with Tailwind CSS and shadcn/ui components

---

## Project Structure

- **app/** — Next.js App Router pages and layouts
- **components/** — Reusable UI components (CarCard, Pagination, SortSelect, etc.)
- **lib/** — API helper functions and config
- **model/** — TypeScript types
- **styles/** — Global styles and Tailwind config

---

## How It Works

- Data is fetched from the provided API:  
  `https://testing-api.ru-rating.ru/cars`  
  supporting query parameters:  
  - `_limit=12` (cars per page)  
  - `_page` (current page)  
  - `_sort=price` and `_order=asc|desc` (sorting)

- Sorting and current page are controlled via URL query parameters (`page` and `sort`), enabling direct linking and back/forward navigation with state persistence.

- Pagination and sorting controls update the URL, triggering data reload with the new parameters.

- If client-side fetching is used, requests are proxied via Next.js API routes to avoid CORS issues.

---

## Getting Started

### Prerequisites

- Node.js 18+  
- npm or yarn package manager

### Installation

```bash
git clone https://github.com/your-username/nextjs-cars-catalog.git
cd nextjs-cars-catalog
npm install
