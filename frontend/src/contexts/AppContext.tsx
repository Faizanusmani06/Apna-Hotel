import React, { useContext } from "react";
type ToastMessage = {
    message: string,
    type: "SUCCESS" | "ERROR";
}
type AppContext = {
    showToast: (toastMessage : ToastMessage) => void
}

const AppContext = React.createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({children} : {children: React.ReactNode}) => {
    return (
        <AppContext.Provider value={{
            showToast: (toastMessage) => {
                console.log(toastMessage);
            }
        }}>
            {children}
        </AppContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
    const context = useContext(AppContext);
    return context as AppContext;
}