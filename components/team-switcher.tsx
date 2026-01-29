"use client"

import * as React from "react"

import {
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

export function AppIconSection({
  app,
}: {
  app: {
    name: string
    logo: React.ElementType
    plan: string
  }
}) {

  if (!app) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-center justify-between gap-2">
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <app.logo className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{app.name}</span>
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
