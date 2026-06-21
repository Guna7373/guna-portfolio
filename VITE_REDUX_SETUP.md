# Vite + Redux Migration Guide

## ✅ What's Been Done

Your project has been successfully migrated from Create React App to **Vite** with **Redux** state management included.

### Changes Made:

1. **Vite Setup**
   - Created `vite.config.js` with React plugin
   - Created root `index.html` (Vite entry point)
   - Removed `react-scripts` dependency
   - Development server runs at `http://localhost:3000` with hot module replacement (HMR)

2. **Redux Setup**
   - Created `src/redux/store.js` with Redux store configuration
   - Included Redux Toolkit for simplified state management
   - Created example portfolio slice for managing app state
   - Added Redux hooks in `src/redux/hooks.js` for easy component integration
   - Wrapped app with Redux Provider in `src/index.js`

3. **Updated package.json**
   - Added: `@reduxjs/toolkit`, `react-redux`, `redux`
   - Added Vite: `vite`, `@vitejs/plugin-react`
   - Updated scripts: `dev` (dev server), `build` (production build), `preview` (preview build)
   - Removed: `react-scripts`

## 🚀 Available Commands

```bash
# Start development server (with HMR - hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
my-portfolio/
├── index.html              # Vite entry point (root level)
├── vite.config.js          # Vite configuration
├── package.json            # Updated dependencies
├── src/
│   ├── index.js            # React entry with Redux Provider
│   ├── App.js              # Main component
│   ├── redux/
│   │   ├── store.js        # Redux store configuration
│   │   └── hooks.js        # Custom Redux hooks
│   └── ...
├── public/                 # Static assets
└── build/                  # Production build output (old CRA)
```

## 🔧 Using Redux in Components

### Example 1: Using the custom hook

```javascript
import { usePortfolio } from './redux/hooks';
import { setProjects } from './redux/store';

function MyComponent() {
  const { dispatch, projects, loading } = usePortfolio();
  
  const handleLoadProjects = () => {
    dispatch(setProjects([/* your projects */]));
  };
  
  return (
    <div>
      {loading ? 'Loading...' : `${projects.length} projects`}
      <button onClick={handleLoadProjects}>Load Projects</button>
    </div>
  );
}
```

### Example 2: Using Redux hooks directly

```javascript
import { useSelector, useDispatch } from 'react-redux';
import { setProjects } from './redux/store';

function MyComponent() {
  const projects = useSelector((state) => state.portfolio.projects);
  const dispatch = useDispatch();
  
  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
}
```

## 📊 Performance Improvements

**Vite Benefits:**
- ⚡ **Instant server start**: ~2 seconds vs ~30+ seconds with CRA
- 🔄 **Faster HMR**: ~100ms vs ~1+ seconds with CRA
- 📦 **Smaller build output**: Native ES modules
- 🎯 **Better development experience**: Faster feedback loop

**Redux Benefits:**
- 🎯 Centralized state management
- 🔍 Easier debugging with Redux DevTools
- 📱 Better performance for large apps

## 🛠️ Next Steps

1. **Extend Redux**: Add more slices in `src/redux/` for different features (projects, contact form, etc.)
2. **Install Redux DevTools Browser Extension** for better debugging
3. **Update App.js** to use Redux state instead of local state
4. **Clean up old files**: Remove backup files like `App_bk.js`, `App_bk_*.js`
5. **Update build output**: Change build folder from `build/` to `dist/` in your deployment

## 🐛 Troubleshooting

- **Port 3000 already in use**: Change port in `vite.config.js` server.port
- **HMR not working**: Check browser console for connection errors
- **Redux DevTools not showing**: Install the browser extension and restart dev server

## 📚 Resources

- [Vite Documentation](https://vitejs.dev)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [React-Redux Documentation](https://react-redux.js.org)
