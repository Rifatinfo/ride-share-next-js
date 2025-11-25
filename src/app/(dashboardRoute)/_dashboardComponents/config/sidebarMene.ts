export const sidebarMenus = {
    user : [
        {label : "dashboard", href : "/dashboard"},
        {label : "setting", href : "/dashboard/setting"},
    ], 
    driver : [
        {label : "driver home", href : "/driver-dashboard"},
    ], 
    admin : [
        {label : "admin home", href : "/admin-dashboard"},
        {label : "Cars", href : "/admin-dashboard/cars"},
    ], 
} as const;