import {ChartColumn, Home, NotepadText, Package, PackagePlus, ShoppingBag, Users, UserPlus, UserCheck, Settings} from "lucide-react"

export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/"
            },
            {
                label: "Analytics",
                icon: ChartColumn,
                path: "/analytics"
            },
            {
                label: "Report",
                icon: NotepadText,
                path: "/reports"
            },
        ],
    },
    {
        title: "Customers",
        links: [
            {
                label: "Customers",
                icon: Users,
                path: "/customers"
            },
            {
                label: "New Customers",
                icon: UserPlus,
                path: "/new-customer"
            },
            {
                label: "Verified Customers",
                icon: UserCheck,
                path: "/verified-customers"
            },
        ],
    },
    {
        title: "Products",
        links: [
            {
                label: "Products",
                icon: Package,
                path: "/products"
            },
            {
                label: "New Product",
                icon: PackagePlus,
                path: "/new-product"
            },
            {
                label: "Inventory",
                icon: ShoppingBag,
                path: "/inventory"
            },
        ],
    },
    {
        title: "Settings",
        links: [
            {
                label: "Settings",
                icon: Settings,
                path: "/settings",
            },
        ],
    }
]