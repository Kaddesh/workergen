export interface Lead {
    image: string;
    name: string;
    position: string;
    company: string;
    iconDescrip: string;
    description: string;
    tags: string[];
  }
  
  export interface Activity {
    image: string;
    title: string;
    details: string;
    action: string;
  }
  
  export const dashboardData = {
    greeting: {
      message: "Hi Mona, <span>68%</span> of goal achieved and rest can be achieved by focusing on 20 top leads",
      subMessage: "Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus",
    },
    leads: [
      {
        image: "/assets/images/woman1.jpg",
        name: "Jane Reyes",
        position: "COO",
        company: "Northwind Traders",
        iconDescrip: "Engage with Jane Reyes",
        description: "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
        tags: ["Expand business", "High buying intent"],
      },
      {
        image: "/assets/images/man2.jpg",
        name: "Allan Munger",
        position: "Head of Real Estate Development",
        company: "Contoso Coffee",
        iconDescrip: "Prepare for meeting with Allan",
        description: "Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.",
        tags: ["Upcoming meeting", "Due today"],
      },
    ],
    activities: [
      {
        image: "/assets/images/round.png",
        title: "Cafe A100 for Woodland Bank",
        details: "Woodland Bank · $280,000 · 8 days to close",
        action: "Review draft and reply to Chris Naido",
      },
      {
        image: "/assets/images/green-technology.png",
        title: "Partnership opportunity for Fabrikam",
        details: "Fabricam · $5,000,000 · 12 days to close",
        action: "Prepare me for Fabrikam's key stakeholder meeting",
      },
    ],
  };
  