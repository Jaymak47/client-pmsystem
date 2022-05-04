import React, { useState, useEffect, useContext } from "react";
import _ from "lodash";
import { useMutation } from "@apollo/client";
import { useActivities } from "../../../../graphql/activities";
import { LOAD_TASKS, ADD_TASK, useTasks } from "../../../../graphql/tasks";
import { useUser } from "../../../../graphql/users";
import { Row, Col, Button } from "react-bootstrap";
import Pagination from "../../../../common/pagination";
import { paginate } from "../../../../utils/paginate";
import LeftMenusGeneral from "../../../../menus/leftmenusgeneral";
import AddActivityTask from "../addactivitytask";
import TaskTable from "../users/taskstable";
import { AuthContext } from "../../../../context/auth";
import { useForm } from "../../../../utils/hooks";
import { useHistory } from "react-router";

export default function SupervisorTasks(props) {
  const user = useContext(AuthContext);
  const userId = props.match.params.userId;
  const history = useHistory();
  const [activities, setActivities] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  const {
    error: activityError,
    data: activitiesdata,
    loading: loadingActivities,
  } = useActivities(user.user.department);

  const {
    data: userdata,
    loading: loadingUserdata,
    error: userdataError,
  } = useUser(userId);

  useEffect(() => {
    if (activitiesdata) {
      setActivities(activitiesdata.getActivities);
    }
  }, [activitiesdata]);

  //Load Data from the Server
  useEffect(() => {
    if (userdata) {
      setSelectedUser(userdata.getUser);
    }
  }, [userdata]);

  //Getters and Setters
  //Initialize Projects

  const [Addrecord, setAddRecord] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Initialize Sort Columns
  const [sortColumn, setsortColumn] = useState({
    path: "",
    order: "",
  });

  //Initialize Sorted, Paginated Projects, PageSize,Current Page

  const [pageSize, setpageSize] = useState(20);
  const [currentPage, setcurrentPage] = useState(1);

  //Load Activities Data from the Server

  const { data: tasksdata, loading: loadingTasks, error } = useTasks(userId);
  //Load Data from the Server
  useEffect(() => {
    if (tasksdata) {
      setTasks(tasksdata.getUser.tasks);
    }
  }, [tasksdata]);

  //Handle Paginate
  const handlePageChange = (page) => {
    setpageSize(20);
    setcurrentPage(page);
  };

  ///getPaged Data Function

  function getPagedData() {
    const allTasks = tasks;

    let filtered = allTasks;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const paginatedTasks = paginate(sorted, currentPage, pageSize);

    return {
      sorted,
      aTasks: paginatedTasks,
      totalCount: tasks.length,
    };
  }
  const { totalCount, aTasks } = getPagedData();

  const handleSort = (sortColumn) => {
    setsortColumn(sortColumn);
  };

  const { onChange, onSubmit, values, validated } = useForm(
    createTaskCallback,
    {
      taskno: "",
      taskname: "",
      activity: "",
      startdate: "",
      enddate: "",
    }
  );

  const [createTask, { error: taskError }] = useMutation(ADD_TASK, {
    variables: values,

    update(proxy, result) {
      setAddRecord(
        `A new Task: ${values.taskname} successfully added to the System `
      );
      const data = proxy.readQuery({
        query: LOAD_TASKS,
        variables: { userId },
      });

      data.getUser.tasks = [result.data.createTask, ...data.getUser.tasks];

      proxy.writeQuery({ query: LOAD_TASKS, variables: { userId }, data });
      values.taskno = "";
      values.taskname = "";
      values.activity = "";
      values.startdate = "";
      values.enddate = "";
    },
    onError(err) {
      if (err) {
        return taskError;
      }
    },
  });

  function createTaskCallback() {
    createTask();
  }
  const handleBack = () => {
    history.push("/supervisorappraiseestasks");
  };

  const { taskname, activity, startdate, enddate, taskno } = values;

  //const { firstname, surname, department, jobgroup, payrollno } = selectedUser;
  // const departmentname = department ? department.departmentname : null;
  // const jobgroupname = jobgroup ? jobgroup.jobgroupname : null;
  console.log(selectedUser);
  return (
    <div>
      <Row>
        <Row className="m-5"></Row>

        <Row className="mt-2">
          <Col md="3" className="listgroup p-3">
            <LeftMenusGeneral user={user} />
          </Col>
          <Col md="9" className="mt-2">
            <div className="sectiondescription">
              <Row className="m-3">
                <h2>County Activities : - Tasks</h2>
                <h5 className="tabcontentdisplay">
                  A secure, just and prosperous County, where people achieve
                  their full potential and enjoy a high quality of life.
                </h5>
              </Row>
            </div>

            <Row className="m-1">
              {/* <h3>
                {firstname} {surname}
                {"|"}PayrollNo {":"} {payrollno}
              </h3> */}
              <h4>
                {totalCount === 0
                  ? "No Tasks in the Database"
                  : `Showing ${totalCount} Activity Tasks in the database.`}
              </h4>

              <TaskTable
                error={error}
                tasks={aTasks}
                onSort={handleSort}
                sortColumn={sortColumn}
                count={tasks.length}
                input="Tasks"
                loading={loadingTasks}
                name="Tasks"
              />
              <>
                <Col className="md-2">
                  <Button variant="warning" onClick={handleBack}>
                    Back
                  </Button>
                </Col>
              </>
            </Row>
            <Row className="m-3">
              <Pagination
                itemsCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  );
}
