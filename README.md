# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Importance React Topic List:
- reace memo => prevent unnecessary re-rendering of any child component

- useCallback => The useCallback prevent the unecessary re-rendering of the child component again and again. and Save the times and complexity. and makes the system smooth

- useMemo() => The useMemo is a hook used in the functional component of react that returns a memoized value. Memoization is a concept used in general when we don’t need to recompute the function with a given argument for the next time as it returns the cached result. A memoized function remembers the results of output for a given set of inputs. In React also, we use this concept, whenever in the React component, the state and props do not change the component and the component does not re-render, it shows the same output. 
