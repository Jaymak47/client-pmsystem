import { Redirect, Route, Switch } from "react-router-dom";

//App Global Routes
import Login from "./login/login";
import Footer from "./components/footer";
import LoadingPage from "./components/Loading";
import NotFound from "./components/notfound";
import AuthRoute from "./utils/AuthRoute";
import MainHome from "./components/dashboard/main";

//County Global Routes
import CountyMission from "./components/county/countymission";
import CountyVision from "./components/county/countyvision";
import CountyGoals from "./components/county/countygoals";
import Sectors from "./components/county/sectors";
import AgriliveFishDev from "./components/county/subsectors/agrilivefishdev";
import WaterEnergyEnv from "./components/county/subsectors/waterenergyenv";
import HealthServices from "./components/county/subsectors/healthservices";
import LandsUrbanPlanning from "./components/county/subsectors/landurbanplanning";
import TourisimWildlifeTrade from "./components/county/subsectors/tourismwildlifetrade";
import EducationVocationalTraining from "./components/county/subsectors/educationvocationaltraining";
import FinanceEconomicPlanning from "./components/county/subsectors/financeeconomicplanning";
import OfficeofGovDpGov from "./components/county/subsectors/officeofgovdpgov";
import CountyAssembley from "./components/county/subsectors/countyassembley";

//Accounts
import Register from "./components/accounts/registarstaff";
import Employees from "./components/accounts/users";
import Roles from "./components/accounts/roles";
import Department from "./components/accounts/department";
import EditDepartment from "./components/accounts/editdepartment";
import JobGroup from "./components/accounts/jobgroup";
import EditJobGroup from "./components/accounts/editjobgroup";
import Designation from "./components/accounts/designation";
import EditDesignation from "./components/accounts/editdesignation";

//Projects & Contracts
import AddProject from "./components/projects/systemadmin/addproject";
import EditProject from "./components/projects/systemadmin/editProject";
import Projects from "./components/projects/systemadmin/projects";
import DepartmentalProjects from "./components/projects/systemadmin/departmentalprojects";
import PerformanceContracts from "./components/projects/systemadmin/contracts";
import DepartmentalPerformanceContracts from "./components/projects/systemadmin/departmentalcontracts";
import UserProjects from "./components/projects/user/userprojects";
import ProjectInfo from "./components/projects/user/projectinfo";
import UserPerformanceContracts from "./components/projects/user/usercontracts";

//Activities & Task Routes
import AddActivity from "./components/activities/systemadmin/addactivity";
import EditActivity from "./components/activities/systemadmin/editactivity";
import Activities from "./components/activities/systemadmin/activities";
import DepartmentalActivities from "./components/activities/systemadmin/departmentalactivities";
import UserActivities from "./components/activities/user/useractivities";
import UserDepartmentalActivities from "./components/activities/user/userdepartmentalactivities";
import ActivityInfo from "./components/activities/user/activityinfo";

//Tasks
import Tasks from "./components/activities/tasks/tasks";
import AddActivityTask from "./components/activities/tasks/addactivitytask";
import SystemAdminTasks from "./components/activities/tasks/systemadmin/systemadmintasks";
import SupervisorTasks from "./components/activities/tasks/supervisor/supervisortasks";
import UserTasks from "./components/activities/tasks/users/usertasks";
import SupervisorAppraiseesTasks from "./components/activities/tasks/supervisor/supervisorappraiseestasks";
import SystemAdminAppraiseeTasks from "./components/activities/tasks/systemadmin/systemadminappraiseestasks";

//Targets Routes
import Targets from "./components/targets/targets";
import TargetReview from "./components/targets/targetreviews";
import EditTarget from "./components/targets/edittarget";

//Appraisals
import SelfAppraisal from "./components/appraisals/user/selfappraisal";
import SupervisorAppraisal from "./components/appraisals/supervisor/supervisorappraisal";
import SupervisorAppraisees from "./components/appraisals/supervisor/supervisorappraisees";
import CommitteeAppraisal from "./components/appraisals/committee/committeeappraisal";
import Appraisals from "./components/appraisals/user/appraisals";
import AppraisalReviewMeeting from "./components/appraisals/jointappraisals/jointmeetings/appraisalreviewmeeting";
import StaffReponse from "./components/appraisals/user/staffresponse";
import JointReview from "./components/appraisals/jointappraisals/jointreviewmeeting";
import CountyserviceBoard from "./components/appraisals/countyserviceboard/countyserviceboard";
import SupervisorResponse from "./components/appraisals/supervisor/supervisorresponse";
import SupervisorjointreviewAppraisee from "./components/appraisals/jointappraisals/supervisorjointreviewappraisee";
import SystemadminAppraisees from "./components/appraisals/systemadmin/systemadminappraisees";
import SystemAdminJointAppraisee from "./components/appraisals/systemadmin/systemadminjointreviewappraisee";
import SystemAdminAppraisal from "./components/appraisals/systemadmin/systemadminappraisal";
import SystemAdminJointReview from "./components/appraisals/systemadmin/systemadminjointreviewappraisal";
import SupervisorJointReview from "./components/appraisals/jointappraisals/supervisoradminjointreviewappraisal";
import JointMeetingAppraisees from "./components/appraisals/jointappraisals/jointmeetings/jointmeetingappraisees";

//Trainings

import AddTraining from "./components/trainings/addtraining";
import EditTraining from "./components/trainings/edittraining";
import Trainings from "./components/trainings/trainings";
import DepartmentalTrainings from "./components/trainings/departmentaltrainings";

function PfmsRoutes() {
  return (
    <div className="maintemplate">
      <Switch>
        {/* Main DashBoard */}

        <AuthRoute path="/dashboard" component={MainHome} />
        <Route path="/login" component={Login} />
        <Redirect from="/" exact to="/login" />

        {/* County Goals */}
        <AuthRoute exact path="/countymission" component={CountyMission} />
        <AuthRoute path="/countyvision" component={CountyVision} />
        <AuthRoute path="/countyGoals" component={CountyGoals} />
        <AuthRoute path="/sectors" component={Sectors} />

        {/* SubSector Goals */}
        <AuthRoute path="/agrilivefishdev" component={AgriliveFishDev} />
        <AuthRoute path="/waterenergyenv" component={WaterEnergyEnv} />
        <AuthRoute path="/healthservices" component={HealthServices} />
        <AuthRoute path="/landsurbanplanning" component={LandsUrbanPlanning} />
        <AuthRoute
          path="/tourismwildlifetrade"
          component={TourisimWildlifeTrade}
        />
        <AuthRoute
          path="/educationvocationaltraining"
          component={EducationVocationalTraining}
        />
        <AuthRoute
          path="/fiananceeconomicplanning"
          component={FinanceEconomicPlanning}
        />
        <AuthRoute path="/officeofgovdpgov" component={OfficeofGovDpGov} />
        <AuthRoute path="/countyassembley" component={CountyAssembley} />

        {/*Accounts*/}
        <AuthRoute exact path="/register" component={Register} />
        <AuthRoute path="/employees" component={Employees} />
        <AuthRoute path="/roles" component={Roles} />
        <AuthRoute path="/departments" component={Department} />
        <AuthRoute
          exact
          path="/department/:departmentId"
          component={EditDepartment}
        />
        <AuthRoute path="/designations" component={Designation} />
        <AuthRoute
          path="/designations/:designationId"
          component={EditDesignation}
        />
        <AuthRoute path="/jobgroups" component={JobGroup} />
        <AuthRoute path="/jobgroup/:jobgroupId" component={EditJobGroup} />

        {/*Projects & Contracts*/}
        <AuthRoute path="/addproject" component={AddProject} />
        <AuthRoute path="/projects" component={Projects} />
        <AuthRoute
          path="/departmentalprojects"
          component={DepartmentalProjects}
        />
        <AuthRoute path="/contracts" component={PerformanceContracts} />
        <AuthRoute
          path="/departmentalperformancecontracts"
          component={DepartmentalPerformanceContracts}
        />
        <AuthRoute path="/project/:projectId" component={EditProject} />
        <AuthRoute path="/userprojects" component={UserProjects} />
        <AuthRoute
          exact
          path="/userproject/:projectId"
          component={ProjectInfo}
        />
        <AuthRoute path="/usercontracts" component={UserPerformanceContracts} />
        {/*Activities*/}
        <AuthRoute path="/addactivity" component={AddActivity} />
        <AuthRoute path="/editactivity" component={EditActivity} />
        <AuthRoute path="/activities" component={Activities} />
        <AuthRoute
          path="/departmentalactivities"
          component={DepartmentalActivities}
        />
        <AuthRoute
          exact
          path="/activity/:activityId"
          component={EditActivity}
        />

        <AuthRoute path="/useractivities" component={UserActivities} />
        <AuthRoute
          path="/userdepartmentalactivities"
          component={UserDepartmentalActivities}
        />
        <AuthRoute
          exact
          path="/useractivity/:activityId"
          component={ActivityInfo}
        />

        {/*Tasks*/}
        <AuthRoute path="/addtasks" component={AddActivityTask} />
        <AuthRoute path="/tasks/:id" component={Tasks} />
        <AuthRoute path="/task/:taskId" component={EditActivity} />
        <AuthRoute
          path="/systemadmintasks/:userId"
          component={SystemAdminTasks}
        />
        <AuthRoute
          path="/supervisortasks/:userId"
          component={SupervisorTasks}
        />
        <AuthRoute path="/usertasks" component={UserTasks} />

        {/*Targets*/}
        <AuthRoute path="/edittarget" component={EditTarget} />
        <AuthRoute path="/targets" component={Targets} />
        <AuthRoute path="/targetreviews" component={TargetReview} />
        <AuthRoute path="/target/:targetId" component={EditTarget} />

        {/*Appraisals*/}
        <AuthRoute path="/selfappraisal" component={SelfAppraisal} />
        <AuthRoute path="/staffresponse" component={StaffReponse} />
        <AuthRoute path="/supervisorresponse" component={SupervisorResponse} />
        <AuthRoute
          path="/supervisorappraisees"
          component={SupervisorAppraisees}
        />
        <AuthRoute
          path="/supervisorappraiseestasks"
          component={SupervisorAppraiseesTasks}
        />
        <AuthRoute
          path="/systemadminappraiseetasks"
          component={SystemAdminAppraiseeTasks}
        />
        <AuthRoute
          path="/supervisorappraisalsjointreviews"
          component={SupervisorjointreviewAppraisee}
        />
        <AuthRoute
          path="/systemadminappraisees"
          component={SystemadminAppraisees}
        />

        <AuthRoute
          path="/systemadminjointappraisees"
          component={SystemAdminJointAppraisee}
        />
        <AuthRoute path="/jointreview/:userId" component={JointReview} />
        <AuthRoute
          path="/appraisalreviewmeeting/:userId"
          component={AppraisalReviewMeeting}
        />
        <AuthRoute
          path="/jointmeetingappraisees"
          component={JointMeetingAppraisees}
        />
        <AuthRoute
          path="/supervisorappraisal/:userId"
          component={SupervisorAppraisal}
        />
        <AuthRoute
          path="/systemadminappraisal/:userId"
          component={SystemAdminAppraisal}
        />
        <AuthRoute
          path="/supervisorjointreviewappraisal/:userId"
          component={SupervisorJointReview}
        />
        <AuthRoute
          path="/systemadminjointreviewappraisal/:userId"
          component={SystemAdminJointReview}
        />

        <AuthRoute path="/committeeappraisal" component={CommitteeAppraisal} />
        <AuthRoute path="/countyserviceboard" component={CountyserviceBoard} />
        <AuthRoute path="/appraisals" component={Appraisals} />

        {/*Trainings*/}
        <AuthRoute path="/addtraining" component={AddTraining} />
        <AuthRoute path="/edittraining" component={EditTraining} />
        <AuthRoute path="/trainings" component={Trainings} />
        <AuthRoute
          path="/departmentaltrainings"
          component={DepartmentalTrainings}
        />
        <AuthRoute path="/training/:trainingId" component={EditTraining} />

        {/* General Routes */}
        <AuthRoute path="/not-Found" component={NotFound} />
        <AuthRoute path="/loading" component={LoadingPage} />
        <Redirect to="/not-Found" />
      </Switch>
      <Footer />
    </div>
  );
}

export default PfmsRoutes;
