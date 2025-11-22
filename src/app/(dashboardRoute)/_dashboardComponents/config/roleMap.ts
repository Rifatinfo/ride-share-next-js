import { ReactNode } from "react"

interface dashboardNodes {
    user: ReactNode;
    driver: ReactNode;
    admin: ReactNode;
}


export const roleComponentMap: Record<"user" | "driver" | "admin", (nodes : dashboardNodes) => ReactNode> = {
   user : (nodes) => nodes.user,
   driver : (nodes) => nodes.driver,
   admin : (nodes) => nodes.admin,
}