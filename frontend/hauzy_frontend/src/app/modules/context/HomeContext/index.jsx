import {
    useContext,
    createContext,
    useCallback,
    useState,
} from "react";
import { get } from '../../services';
import ENDPOINTS from "../../services/endpoint";

const HomeContext = createContext();
export const useHome = () => useContext(HomeContext);

const HomeProvider = ({children}) => {

    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const onFetchProperties = useCallback(async () => {
            setIsLoading(true);

            const response = await get(ENDPOINTS.PROPERTIES);

            setProperties(response.data.data);
            setIsLoading(false);
        }, []);
    
    return (
        <HomeContext.Provider
            value={{
            onFetchProperties,
            isLoading,
            properties
        }}>
            {children}
        </HomeContext.Provider>
    );
}

export default HomeProvider;