import React, { 
createContext, 
useContext, 
useState, 
ReactNode 
} from 'react';

interface ObjetivoContextType {
    objetivo: number;
    setObjetivo: (objetivo: number) => void;
}

const ObjetivoContext = createContext<ObjetivoContextType | undefined>(undefined);

export const useObjetivo  = () => {
    const context = useContext(ObjetivoContext);
    if (context === undefined) {
        throw new Error('useObjetivoContext debe ser usado dentro de un ObjetivoContextProvider');
    }
    return context;
};

interface ObjetivoProviderProps {
    children: ReactNode;
}

export const ObjetivoProvider: React.FC<ObjetivoProviderProps> = ({ children }) => {
    const [objetivo, setObjetivo] = useState<number>(0);

    return (
        <ObjetivoContext.Provider value={{ objetivo, setObjetivo }}>
            {children}
        </ObjetivoContext.Provider>
    );
};