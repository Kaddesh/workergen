import {
    AiFillHome,
    AiOutlineClockCircle,
    AiOutlinePushpin,
    AiOutlineThunderbolt,
    AiOutlineDashboard,
    AiOutlineProfile,
    AiOutlineBook,
    AiOutlineUser,
    AiOutlineTeam,
    AiOutlineSolution,
    AiOutlineTrophy,
    AiOutlineFileText,
    AiOutlineShoppingCart,
    AiOutlineDollarCircle,
    AiOutlineGift,
    AiOutlineFileDone,
    AiOutlineMail,
  } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
  
  export const sidebarData = [
    {
      items: [
        { icon: AiFillHome, label: "Home", link: "/" },
        { icon: AiOutlineClockCircle,   label: "Recent", link: "/recent" },
        { icon: AiOutlinePushpin, label: "Pinned", link: "/pinned" },  
        { icon: GiSkills, label: "Agent Skill", link: "/agenting" },
      ],
    },
    {
      heading: "My Work",
      items: [
        { icon: AiOutlineThunderbolt, label: "Sales Accelerator", link: "/sales-accelerator" },
        { icon: AiOutlineDashboard, label: "Dashboards", link: "/dashboards" },
        { icon: AiOutlineProfile, label: "Activities", link: "/activities" },
      ],
    },
    {
      heading: "Customer",
      items: [
        
        { icon: AiOutlineBook, label: "Accounts", link: "/accounts" },
        { icon: AiOutlineUser, label: "Contacts", link: "/contacts" },
      ],
    },
    {
      heading: "Sales",
      items: [
        
        { icon: AiOutlineTeam, label: "Leads", link: "/leads" },
        { icon: AiOutlineSolution, label: "Opportunities", link: "/opportunities" },
        { icon: AiOutlineTrophy, label: "Competitors", link: "/competitors" },
      ],
    },
    {
      heading: "Collateral",
      items: [
        
        { icon: AiOutlineFileText, label: "Quotes", link: "/quotes" },
        { icon: AiOutlineShoppingCart, label: "Orders", link: "/orders" },
        { icon: AiOutlineDollarCircle, label: "Invoices", link: "/invoices" },
        { icon: AiOutlineGift, label: "Products", link: "/products" },
        { icon: AiOutlineFileDone, label: "Sales Literature", link: "/sales-literature" },
      ],
    },
    {
      heading: "Marketing",
      items: [
        { icon: AiOutlineMail, label: "Marketing Lists", link: "/marketing-lists" },
        { icon: AiOutlineMail, label: "Quick Campaigns", link: "/Quick-Campaigns" },
      ],
    },
   
  ];
  