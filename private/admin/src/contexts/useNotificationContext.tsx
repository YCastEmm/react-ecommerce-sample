"use client"

import { createContext, FC, PropsWithChildren, useCallback, useContext, useMemo, useState } from "react";

type NotificationStateType = {
    ShowNotificationPopUp: (type: string, content: string) => void
    showNotification: boolean
    onCloseNotification: () => void
    notificationContent: string
    notificationType: string
}

const NotificationContext = createContext<NotificationStateType | null>(null);

export const NotificationProvider: FC<PropsWithChildren> = ({children}) => {

    const [showNotification, setShowNotification] = useState<boolean>(false)
    const [notificationContent, setNotificationContent] = useState<string>("")
    const [notificationType, setNotificationType] = useState<string>("")

    const resetNotification = useCallback(() =>{
        setShowNotification(false)
        setNotificationContent("")
        setNotificationType("")
    }, [])

    const onCloseNotification = useCallback(() =>{
        resetNotification()
    },[resetNotification])


    
    const ShowNotificationPopUp = useCallback(
        (type: string, content: string) =>{
        resetNotification()
        setNotificationContent(content)
        setNotificationType(type)
        setShowNotification(true)
        setTimeout(()=>{
            resetNotification()
        }, 5000)
    },[resetNotification])

    const value = useMemo(()=>{
        return {
                    ShowNotificationPopUp,
                    showNotification,
                    onCloseNotification,
                    notificationContent,
                    notificationType,
                }
    },[ShowNotificationPopUp, showNotification, onCloseNotification, notificationContent, notificationType])

    return <NotificationContext.Provider value={value}>{children}</ NotificationContext.Provider>
}

export const useNotificationContext = () =>{
    const context = useContext(NotificationContext)

    if (!context) {
        throw new Error("El useNotificationContext se debe usar en un componente alcanzado por el provider de Notificationes")
    }

    return context
}

