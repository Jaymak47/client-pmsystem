import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Button, Icon } from "semantic-ui-react";
import {
  LOAD_TARGET,
  LOAD_TARGETS,
  DELETE_TARGET,
} from "../../graphql/targets";
import { OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import { useHistory } from "react-router";

function DeleteButton({ targetId, callback, targetname, userId }) {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [deleteTarget, { error }] = useMutation(DELETE_TARGET, {
    variables: {
      targetId,
    },
    update(proxy) {
      handleClose();
    },
    refetchQueries: [
      {
        query: LOAD_TARGETS,
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

  const targetName = () => {
    console.log(targetId);
  };
  return (
    <>
      <OverlayTrigger
        overlay={<Tooltip id={`tooltip-top`}>Delete Target</Tooltip>}
      >
        <Button as="div" floated="right" onClick={() => setShow(true)}>
          <Icon name="trash" style={{ margin: 0 }} />
        </Button>
      </OverlayTrigger>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete {targetname} Target </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you Sure you want to delete Target</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={deleteTarget}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteButton;
