"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import { AppIconSection } from '@/components/team-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  appDetail: {
      name: "TDMG UI",
      logo: GalleryVerticalEnd,
      plan: "CCB",
  },
  navMain: [
    {
      title: "Synthetic Data Generation",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Cassandra",
          url: "#",
        },
        {
          title: "Oracle",
          url: "#",
        }
      ],
    },
    {
      title: "Connection Settings",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Create Connection",
          url: "#",
        },
      ],
    },
    {
      title: "Data Operations",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Snapshop",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AppIconSection app={data.appDetail} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
