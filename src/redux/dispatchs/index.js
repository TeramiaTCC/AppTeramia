import { View } from 'react-native';

import { useDispatch } from 'react-redux';
import { fetchPosts } from '../features/userPosts';
import { fetchUser } from '../features/user';
import { fetchAllPosts } from '../../redux/features/posts';

export default function dispatchs() {

    const dispatch = useDispatch();

    useEffect(() => {
      const fetchInterval = setInterval(() => {
        dispatch(fetchPosts());
      }, 1000); // 1 miliseconds interval
  
      // Clear the interval when the component unmounts
      return () => clearInterval(fetchInterval);
    }, [dispatch]);
  
    useEffect(() => {
      const fetchInterval = setInterval(() => {
        dispatch(fetchUser());
      }, 1000); // 1 miliseconds interval
  
      // Clear the interval when the component unmounts
      return () => clearInterval(fetchInterval);
    }, [dispatch]);

    useEffect(() => {
        const fetchInterval = setInterval(() => {
          dispatch(fetchAllPosts());
        }, 1000); // 1 miliseconds interval
    
        // Clear the interval when the component unmounts
        return () => clearInterval(fetchInterval);
      }, [dispatch]);
}