export const getApiRoute = (route: string): string => {
    return `${import.meta.env.VITE_API_URL}${route}`;
};