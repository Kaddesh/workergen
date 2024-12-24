import DashboardModaal from "./(dashboard)/dashboard/_components/dashboar-modaal";
import EngageJane from "./(dashboard)/dashboard/_components/modal1/EngageJane";
import Table from "./(dashboard)/dashboard/_components/dashboar/table";
import FixedIcons from "./(dashboard)/dashboard/_components/dashboar/fixedIcons";



type Props = {};

function Page({}: Props) {
  return (
   <div className="pt-4 px-3 lg:pl-[12rem] lg:pr-[2rem] pb-10 space-y-6">
    <DashboardModaal />
    <Table />
    <FixedIcons />
   </div>

  
  );
}

export default Page;

 {/* <DashboardModaal />
    <Table />
   <AgentSkill email='purchasing@contoso.com'/>
    <EngageJane />
    
          
        </div>
      </div>
    </div> */}
