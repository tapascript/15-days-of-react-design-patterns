import { useContext } from "react";
import { BrandContext } from "../context";

const useBrand = () => {
    const brand = useContext(BrandContext);
    return brand;
};

export { useBrand };
