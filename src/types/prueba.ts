import {useState} from "react";
export const usePrueba = () => {
    const [isActive] = useState(true);
    const estado=true;
    return { 
        isActive,
        estado
     };
};