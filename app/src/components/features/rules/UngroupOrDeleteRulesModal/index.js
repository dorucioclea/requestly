import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { StorageService } from "../../../../init";
import {
  getAppMode,
  getGroupwiseRulesToPopulate,
  getIsRefreshRulesPending,
  getUserAuthDetails,
} from "store/selectors";
import APP_CONSTANTS from "config/constants";
import { actions } from "store";
import { toast } from "utils/Toast.js";
import { deleteGroup } from "../RulesListContainer/RulesTable/actions";
import {
  deleteGroupsFromStorage,
  deleteRulesFromStorage,
} from "../DeleteRulesModal/actions";
import { addRecordsToTrash } from "utils/trash/TrashUtils";
import { AUTH } from "modules/analytics/events/common/constants";

const UNGROUPED_GROUP_ID =
  APP_CONSTANTS.RULES_LIST_TABLE_CONSTANTS.UNGROUPED_GROUP_ID;

const UngroupOrDeleteRulesModal = ({
  isOpen,
  toggle,
  data: groupData,
  setData,
}) => {
  //Global State
  const dispatch = useDispatch();
  const user = useSelector(getUserAuthDetails);
  const appMode = useSelector(getAppMode);
  const isRulesListRefreshPending = useSelector(getIsRefreshRulesPending);
  const groupwiseRulesToPopulate = useSelector(getGroupwiseRulesToPopulate);

  // Component State
  const [loadingSomething, setLoadingSomething] = useState(false);

  const doMoveToUngrouped = () => {
    if (!groupData) return null;

    return new Promise((resolve) => {
      // Fetch all records to get rule data
      StorageService(appMode)
        .getAllRecords()
        .then((allRecords) => {
          //Update Rules
          const updatedRules = [];
          groupData.children.forEach(async (groupRule) => {
            const groupRuleId = groupRule.id;
            const newRule = {
              ...allRecords[groupRuleId],
              groupId: UNGROUPED_GROUP_ID,
            };
            updatedRules.push(newRule);
          });
          StorageService(appMode)
            .saveMultipleRulesOrGroups(updatedRules)
            .then(() => resolve());
        });
    });
  };

  const moveToUngrouped = () => {
    setLoadingSomething(true);
    doMoveToUngrouped()
      .then(() => {
        // Now delete the Group
        deleteGroup(appMode, groupData.id, groupwiseRulesToPopulate, true)
          .then(() => {
            setData(null);
            // Refresh the rules list
            dispatch(
              actions.updateRefreshPendingStatus({
                type: "rules",
                newValue: !isRulesListRefreshPending,
              })
            );
            // Notify user
            toast.success("Group deleted");
            // STFU and close the modal!
            toggle();
          })
          .catch(() => {
            setLoadingSomething(false);
          });
      })
      .catch(() => {
        setLoadingSomething(false);
      });
  };

  const handleGroupsDeletion = async (groupIdsToDelete) => {
    return deleteGroupsFromStorage(appMode, groupIdsToDelete);
  };

  const handleRulesDeletion = async (uid) => {
    if (!uid) return;
    const ruleIdsToDelete = [];
    groupData.children.forEach((rule) => ruleIdsToDelete.push(rule.id));

    return addRecordsToTrash(uid, groupData.children).then((result) => {
      return new Promise((resolve, reject) => {
        if (result.success) {
          deleteRulesFromStorage(appMode, ruleIdsToDelete, () => resolve(true));
        } else {
          reject();
        }
      });
    });
  };

  const handleRecordsDeletion = async (uid) => {
    await handleRulesDeletion(uid);
    await handleGroupsDeletion([groupData.id]);
  };

  const promptUserToSignup = (source) => {
    const signInSuccessCallback = (uid) => {
      deleteRulesAndThenGroup();
    };

    dispatch(
      actions.toggleActiveModal({
        modalName: "authModal",
        newValue: true,
        newProps: {
          redirectURL: window.location.href,
          src: APP_CONSTANTS.FEATURES.RULES,
          callback: signInSuccessCallback,
          authMode: APP_CONSTANTS.AUTH.ACTION_LABELS.SIGN_UP,
          eventSource: source,
        },
      })
    );
  };

  const deleteRulesAndThenGroup = () => {
    // Login is mandatory since we have move Rules to the Trash
    if (!user.loggedIn) {
      promptUserToSignup(AUTH.SOURCE.DELETE_RULE);
      return;
    }

    setLoadingSomething(true);

    handleRecordsDeletion(user?.details?.profile?.uid).then(() => {
      //Refresh List
      dispatch(actions.updateHardRefreshPendingStatus({ type: "rules" }));
      // Notify user
      toast.success("Group deleted");
      // STFU and close the modal!
      toggle();
    });
  };

  if (!groupData) return null;

  return (
    <Modal
      className="modal-dialog-centered modal-danger"
      open={isOpen}
      contentClassName="bg-gradient-danger bg-gradient-blue"
      title="Delete Group"
      confirmLoading={loadingSomething}
      onCancel={toggle}
      footer={null}
    >
      <div className="modal-body">
        <div className="py-3 text-center">
          <h3 className="heading">This group contains one or more rules</h3>
        </div>
      </div>
      <br />
      <div className="modal-footer" style={{ textAlign: "right" }}>
        <Button
          style={{ marginRight: "1rem" }}
          className="btn-white ml-auto"
          color="link"
          type="danger"
          key="back"
          onClick={deleteRulesAndThenGroup}
          loading={loadingSomething}
          icon={<DeleteOutlined />}
        >
          Delete rules
        </Button>
        <Button
          type="default"
          data-dismiss="modal"
          key="submit"
          loading={loadingSomething}
          onClick={moveToUngrouped}
        >
          Keep the rules
        </Button>
      </div>
    </Modal>
  );
};

export default UngroupOrDeleteRulesModal;
