import { useNotificationContext } from "@/contexts/useNotificationContext"
import { X } from "lucide-react"

const PopupMessage = () => { 

    const { onCloseNotification, notificationContent, notificationType} = useNotificationContext()
    const color = notificationType === "SUCCESS" ? "border-b-emerald-400" : "border-b-red-400"

    return  <div className={`fixed top-4 right-4 max-w-md rounded-t-md bg-white border border-b-4 border-gray-300 ${color} px-5 py-2 shadow-lg`}>
                <div className="flex justify-between items-center gap-6">
                    <div className="text-gray-800 text-md">
                        {notificationContent}
                    </div>
                    <div>
                        <X
                            onClick={() => onCloseNotification()}
                            className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800"/>
                    </div>
                </div>
            </div>
}

export default PopupMessage