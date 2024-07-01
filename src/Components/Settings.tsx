import React, {
 ReactNode,
 useState,
 useCallback,
 Children,
 isValidElement,
} from "react";

interface TabProps {
 label?: string;
 tabName?: string;
 children: ReactNode;
}

interface SettingsProps {
 children: React.ReactElement<TabProps>[];
 className: string;
}

interface TabButtonProps {
 isActive: boolean;
 onClick: () => void;
 children: ReactNode;
}

const Settings: React.FC<SettingsProps> = ({ children, className }) => {
 const [activeTab, setActiveTab] = useState(children[0]?.props.label);
 const handleActiveTab = useCallback(setActiveTab, []);
 return (
  <main className={className}>
   <nav className='flex flex-row'>
    {Children.map(children, (child) => {
     if (isValidElement<TabProps>(child)) {
      return (
       <TabButton
        key={child.props.label}
        isActive={activeTab === child.props.label}
        onClick={() => handleActiveTab(child.props.label)}
       >
        {child.props.tabName}
       </TabButton>
      );
     }
     return null;
    })}
   </nav>
   <>
    {Children.toArray(children).find(
     (child) =>
      isValidElement<TabProps>(child) && child.props.label === activeTab
    )}
   </>
  </main>
 );
};
const TabButton: React.FC<TabButtonProps> = ({
 isActive,
 onClick,
 children,
}) => (
 <button
  className={`sm:py-1 sm:px-2 sm:text-sm md:text-lg  py-2 px-6  font-outfit hover:bg-sky-50 transition-colors duration-500 ${
   isActive ? "border-b-2 border-third text-third" : "text-border"
  }`}
  onClick={onClick}
 >
  {children}
 </button>
);

const Tab: React.FC<TabProps> = ({ children }) => <>{children}</>;
export { Tab, Settings as default };
