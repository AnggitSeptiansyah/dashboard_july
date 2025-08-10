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

export const overviewData = [
    {
        name: "Jan",
        total: 1500,
    },
    {
        name: "Feb",
        total: 2000,
    },
    {
        name: "Mar",
        total: 1000,
    },
    {
        name: "Apr",
        total: 5000,
    },
    {
        name: "May",
        total: 2000,
    },
    {
        name: "Jun",
        total: 5900,
    },
    {
        name: "Jul",
        total: 2000,
    },
    {
        name: "Aug",
        total: 5500,
    },
    {
        name: "Sep",
        total: 2000,
    },
    {
        name: "Oct",
        total: 4000,
    },
    {
        name: "Nov",
        total: 1500,
    },
    {
        name: "Dec",
        total: 2500,
    },
];