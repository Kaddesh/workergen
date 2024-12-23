import DashboardModaal from "./_components/dashboar-modaal";
import EngageJane from "./_components/modal1/EngageJane";
import Table from "./_components/dashboar/table";



type Props = {};

function Page({}: Props) {
  return (
   <div className="pt-4 mx-2 lg:ml-[12rem] lg:mr-[1rem] mb-10 space-y-6">
    <DashboardModaal />
    <Table />
          
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
