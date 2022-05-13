import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Button, Icon } from "semantic-ui-react";
import { LOAD_TASK, LOAD_TASKS, DELETE_TASK } from "../../../graphql/tasks";
import { OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import { useHistory } from "react-router";

function DeleteButton({ taskId, callback, taskname, userId }) {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [deleteTask, { error }] = useMutation(DELETE_TASK, {
    variables: {
      taskId,
    },
    update(proxy) {
      handleClose();
    },
    refetchQueries: [
      {
        query: LOAD_TASKS,
        variables: { userId },
      },
    ],

    onError(err) {
      if (err) {
        console.log(err);
        return error;
      }
    },
  });

  return (
    <>
      <OverlayTrigger
        overlay={<Tooltip id={`tooltip-top`}>Delete Task</Tooltip>}
      >
        <Button as="div" floated="right" onClick={() => setShow(true)}>
          <Icon name="trash" style={{ margin: 0 }} />
        </Button>
      </OverlayTrigger>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete {taskname} Task </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you Sure you want to delete Task</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={deleteTask}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteButton;
