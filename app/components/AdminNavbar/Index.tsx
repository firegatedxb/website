"use client"

import ClientSideLink from '@/app/(admin)/admin/client-side-link';
import React, { useState } from 'react'
import {
    HomeIcon,
    NewspaperIcon,
    UserGroupIcon,
    EnvelopeIcon,
    CheckBadgeIcon,
    PresentationChartBarIcon,
  } from "@heroicons/react/24/outline";
import { CodeIcon } from 'lucide-react';

const AdminNavbar = () => {

    const [openLink, setOpenLink] = useState<string | null>(null);

    const navItems = [
        { name: "Home", href: "/admin", icon: HomeIcon },
        { name: "About", href: "/admin/about", icon: UserGroupIcon },
        { name: "Clients", href: "/admin/clients", icon: PresentationChartBarIcon },
        { name: "Services", href: "/admin/services", icon: EnvelopeIcon },
        // { name: "Industries", href: "/admin/industries", icon: BriefcaseIcon },
        { name: "Projects", href: "/admin/projects", icon: CheckBadgeIcon },
        { name: "Sustainability", href: "/admin/sustainability", icon: CheckBadgeIcon },
        { name: "Partners", href: "/admin/partners", icon: UserGroupIcon },
        { name: "Team", href: "/admin/team", icon:NewspaperIcon },
        { name: "Contact", href: "#", icon: EnvelopeIcon,children:[{name:"Regions",href:"/admin/contact"},{name:"Enquiries",href:"/admin/contact/enquiry"}] },
        { name: "Tag Codes", href: "/admin/codes", icon: CodeIcon },
      ];

  return (
    navItems.map((item) => {
        const Icon = item.icon;
        return (
          <ClientSideLink
            key={item.href}
            href={item.href}
            name={item.name}
            icon={<Icon className="h-5 w-5" />}
            isOpen={openLink === item.href}
            setOpenLink={setOpenLink}
          >
            {item.children}
          </ClientSideLink>
        );
      })
  )
}

export default AdminNavbar