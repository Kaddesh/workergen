export interface Lead {
    image: string; // URL or path to the image
    name: string; // Name of the lead
    position: string; // Position or job title
    company: string; // Company name
    description: string; // Description or insight about the lead
    tags: string[]; // List of tags or attributes for the lead
  }
  
  export interface Activity {
    image: string; // URL or path to the activity image
    title: string; // Title of the activity
    details: string; // Details about the activity (e.g., company, amount, timeline)
    action: string; // Action or task related to the activity
  }
  
  export interface Greeting {
    message: string; // Main greeting message
    subMessage: string; // Additional information or sub-message
  }
  
  export interface DashboardData {
    greeting: Greeting; // Greeting section data
    leads: Lead[]; // Array of lead data
    activities: Activity[]; // Array of activity data
  }
  