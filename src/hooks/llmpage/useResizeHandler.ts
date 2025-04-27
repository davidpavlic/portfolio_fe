import { useEffect, useState } from "react";

///* CUSTOM HOOK *///
/// This hook manages the resizing of the window and the state of the sidebar.
export const useResizeHandler = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => setSidebarExpanded(prev => !prev);
  const collapseSidebarIfMobile = () => isMobile ? setSidebarExpanded(false) : null; // Collapse sidebar if currently on a mobile-sized screen

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
      collapseSidebarIfMobile();
    };

    window.addEventListener('resize', handleResize);
    // Clean up listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile, isSidebarExpanded, toggleSidebar, collapseSidebarIfMobile };
};
