# Countries & Flags

A modern Next.js web application that displays country information with filtering capabilities. The app fetches country data from the REST Countries API and allows users to search countries by name or filter by region.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI component library
- **SCSS** - Styling with CSS Modules
- **Context API** - State management
- **REST Countries API v3.1** - Data source

## Features

- Browse all countries with flag emojis and key information
- Search countries by name with real-time filtering
- Filter countries by region
- View detailed country information including:
  - Official name and native name
  - Population and capital
  - Region and sub-region
  - Top-level domain and currencies
  - Languages spoken
  - Bordering countries
- Responsive design for mobile, tablet, and desktop
- Fast navigation with Next.js client-side routing

## Project Structure

```
app/
├── page.jsx                  - Home page with search and filter UI
├── layout.jsx               - Root layout with metadata
├── globals.scss             - Global styles and CSS reset
├── _variables.scss          - SCSS variables (colors, spacing, typography)
├── components/
│   ├── Header/              - Navigation header component
│   ├── SearchBar/           - Search and region filter component
│   ├── CountryCard/         - Country card display component
│   └── DetailCountry/       - Detail page component
├── detalle/[name]/
│   ├── page.jsx            - Dynamic route handler
│   └── page.module.scss    - Detail page styles
└── context/
    └── CountriesContext.jsx - Context provider for countries data
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.
Open [http://localhost:3005](http://localhost:3005) to view it in the browser.

The page will automatically reload when you make edits.

### `npm run build`

Builds the app for production into the `.next` folder.

### `npm start`

Runs the production build (requires `npm run build` first).

### `npm run lint`

Runs ESLint to check code quality.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - Navigate to [http://localhost:3005](http://localhost:3005)

## Data Flow

- **Home Page**: Fetches all countries on mount via REST Countries API → displays with filter controls
- **Detail Page**: Route param `[name]` triggers fetch of single country data → displays comprehensive information
- **Filtering**: Name and region filters are mutually exclusive; selecting one clears the other

## Styling

The project uses SCSS with CSS Modules for component styling:
- **globals.scss**: Global styles, CSS reset, and typography defaults (imported in layout.jsx)
- **_variables.scss**: Reusable SCSS variables for colors, spacing, and transitions
- **Component .module.scss**: Scoped styles for individual components

## API

Data is fetched from the [REST Countries API v3.1](https://restcountries.com/)

Endpoints used:
- `GET /v3.1/all` - Fetch all countries
- `GET /v3.1/name/{name}` - Fetch single country by name

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge)

## License

This project is open source and available under the MIT License.
