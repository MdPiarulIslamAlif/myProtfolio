import project from "../../../assets/project/real-home-e4be3.web.app_.png"


const MyProject = () => {
     return (
       <div className="max-w-screen-2xl mx-auto">
         <h1 className="text-lg font-semibold text-center my-24">MY All Project</h1>
         <div className="flex flex-col lg:flex-row md:flex-row">
           <div> Project link</div>
           <div>
             <img className="w-[500px] h-[500px]" src={project} alt="" />
           </div>
         </div>
       </div>
     );
};

export default MyProject;