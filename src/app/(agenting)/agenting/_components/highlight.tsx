
// Define the props for HighlightIconText
interface HighlightIconTextProps {
    icon: React.ElementType; // React component type for icons
    children: React.ReactNode; // Content within the span
  }

 export const HighlightIconText: React.FC<HighlightIconTextProps> = ({ icon: Icon, children }) => {
    return (
      <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-400 p-1 mb-1 rounded-full">
        <Icon />
        {children}
      </span>
    );
  };