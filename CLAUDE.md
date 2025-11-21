# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based web application that displays country information with filtering capabilities. The app fetches country data from the REST Countries API and allows users to search countries by name or filter by region.

## Common Development Commands

- **Start development server**: `npm start`
  - Runs on http://localhost:3000
  - Live reload enabled for code changes

- **Build for production**: `npm run build`
  - Creates optimized production bundle in `/build` folder

- **Deploy to GitHub Pages**: `npm run deploy`
  - Requires build to complete first (predeploy hook runs automatically)

- **Run tests**: `npm test`
  - Interactive watch mode enabled by default

- **Eject configuration**: `npm run eject`
  - One-way operation to expose webpack and build config (avoid unless necessary)

## Architecture

### Tech Stack
- **React 16.13** with React Router 5 for client-side routing
- **Redux** for state management (no Redux Thunk/Saga, plain dispatch)
- **Redux DevTools** support via browser extension
- **Create React App** for build tooling

### Directory Structure

```
src/
├── Routes/App.js          - Main routing component (BrowserRouter, Switch, Route)
├── components/            - React components
│   ├── Home.jsx          - Main page with search/filter UI and country list
│   ├── CountryDetail.jsx - Country detail page (fetches single country data)
│   ├── CountrySelect.jsx - Displays detailed country information
│   ├── Flag.jsx          - Country card component
│   └── Header.jsx        - Navigation header
├── redux/
│   ├── store/index.js    - Redux initial state (countryList, countryListByName, countryListByRegion)
│   └── reducer/index.js  - Redux reducer with actions for filtering
├── style/                - CSS files (Home.css, CountryDetail.css, etc.)
├── assets/               - Static images and icons
└── index.js              - React DOM render and Redux store setup
```

### Redux State Flow

The app uses a simple Redux setup:

1. **Initial State** ([redux/store/index.js](src/redux/store/index.js)):
   - `countryList` - All countries fetched from API
   - `countryListByName` - Filtered by search input
   - `countryListByRegion` - Filtered by region selection

2. **Reducer** ([redux/reducer/index.js](src/redux/reducer/index.js)):
   - `SET_COUNTRY_LIST` - Stores full country data from API
   - `SET_COUNTRY_BY_NAME` - Filters countryList by name, clears region filter
   - `SET_COUNTRY_BY_REGION` - Filters countryList by region, clears name filter

3. **Selectors** in [Home.jsx](src/components/Home.jsx):
   - Prioritizes filtered lists; falls back to full countryList if both filters are empty

### Data Flow

- **Home Page**: Fetches all countries on mount via `https://restcountries.com/v3.1/all` → dispatches to Redux → displays with filter controls
- **Detail Page**: Route param `:id` triggers fetch of single country via `https://restcountries.com/v3.1/name/{id}` → local state (not Redux)

### Key Components

- [Home.jsx](src/components/Home.jsx) - Search/filter form, country card grid, handles filter dispatch
- [CountryDetail.jsx](src/components/CountryDetail.jsx) - Detail page wrapper with back button
- [CountrySelect.jsx](src/components/CountrySelect.jsx) - Detailed country info display
- [Flag.jsx](src/components/Flag.jsx) - Reusable country card component

## Important Notes

- **API**: Uses REST Countries API v3.1. API responses are fetched directly without caching.
- **Routing**: Routes include both `/countriesflag/` (for GitHub Pages) and `/` (for local dev)
- **Filter Logic**: Name and region filters are mutually exclusive; selecting one clears the other
- **Redux DevTools**: Browser extension integration is enabled for debugging
- **Homepage**: Set to `https://krisyupher.github.io/countriesflag/` in package.json

## Deployment

The project is deployed to GitHub Pages. The `deploy` script builds the app and pushes to the `gh-pages` branch. The homepage in package.json must match the GitHub Pages URL.
