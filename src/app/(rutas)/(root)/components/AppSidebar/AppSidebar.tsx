"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { routes, routesVendedor } from "./AppSidebar.data";
import Image from "next/image";

export  function AppSidebar() {
    const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-white">
        <SidebarHeader>
          <Link href="/" className="flex flex-row items-center">
            <Image src="/icon.png" alt="LogoMarketplace" width={35} height={35} className="rounded-full" />
            {state === "expanded" && (
              <span className="text-xl font-semibold text-gray-800 tracking-wide pl-4">MarketPlace Valparaiso</span>
            )}
          
          </Link>
        </SidebarHeader>
        <SidebarGroup>

          <SidebarGroupLabel>Plataforma</SidebarGroupLabel>
          <SidebarMenu className="space-y-2">
            {routes.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <div className="p-1 rounded-lg text-white bg-violet-400">
                      <item.icon className="w-5 h-5" />
                    </div>
                    {state === "expanded" && <span>{item.title}</span>}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>

          <SidebarMenu className="mt-4">
            <SidebarGroupLabel>Vendedor</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuSub>
                {routesVendedor.map((item) => (
                  <SidebarMenuSubItem key={item.url}>
                    <SidebarMenuSubButton 
                      href={item.url}
                      className="hover:bg-muted transition"
                    >
                        <div className="p-1 rounded-lg text-white bg-slate-400">
                          <item.icon className="w-4 h-4" />
                        </div>
                        {item.title}
                      </SidebarMenuSubButton>
                  </SidebarMenuSubItem >
                ))}
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>

        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
