import React from "react";

import MockEditorIndex from "components/features/mocksV2/MockEditor";
import ProtectedRoute from "components/authentication/ProtectedRoute";
import { useParams } from "react-router-dom";
import { MockType } from "components/features/mocksV2/types";

const MockEditorEditView = () => {
  const { mockId } = useParams();

  return (
    <>
      <ProtectedRoute
        component={MockEditorIndex}
        mockId={mockId}
        mockType={MockType.API}
      />
    </>
  );
};

export default MockEditorEditView;
