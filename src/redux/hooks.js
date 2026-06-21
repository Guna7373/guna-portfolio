import { useSelector, useDispatch } from 'react-redux';

// Example: Custom hook for portfolio state
export const usePortfolio = () => {
  const dispatch = useDispatch();
  const portfolio = useSelector((state) => state.portfolio);
  return { dispatch, ...portfolio };
};

// Re-export Redux hooks for convenience
export { useSelector, useDispatch } from 'react-redux';
