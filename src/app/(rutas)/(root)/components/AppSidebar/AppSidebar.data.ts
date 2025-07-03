import { BookOpen, ChartArea, GraduationCap, House, Settings2, SquareTerminal } from "lucide-react";

export const routes = [
    {
        title: "Home",
        url: "/",
        icon: House,
    },    
    {
        title: "Productos",
        url: "/productos",
        icon: SquareTerminal,
    },
    {
        title: "Mis productos",
        url: "/mis-productos",
        icon: BookOpen,
    },
    {
        title: "Ajustes",
        url: "/ajustes",
        icon: Settings2,
    },
];

export const routesVendedor = [
    {
        title: "Mis productos",
        url: "/vendedor",
        icon: GraduationCap,
    },
    {
        title: "Analíticas",
        url: "/vendedor/analytics",
        icon: ChartArea,
    },

];