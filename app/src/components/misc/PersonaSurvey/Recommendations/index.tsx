import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserPersonaSurveyDetails } from "store/selectors";
import { allFeatures, recommendation } from "./personalizations";

import "./index.css";

export const UserRecommendations = () => {
  const navigate = useNavigate();
  const userPersonaDetails = useSelector(getUserPersonaSurveyDetails);
  const userRole = userPersonaDetails.persona;
  const recommendedFeatures = recommendation.find(
    (feature) => feature.id === userRole
  );

  const renderRecommendedFeature = (feature: string) => {
    const featureDetails = allFeatures.find(
      (personalization) => personalization.title === feature
    );

    return (
      <div
        className="recommended-feature-container"
        onClick={() => featureDetails.action(navigate)}
      >
        <div className="recommended-feature-title">
          <>{featureDetails?.icon?.()}</>
          <div className="white">{featureDetails?.title}</div>
        </div>
        <div className="text-gray recommended-feature-description">
          {featureDetails?.description}
        </div>
      </div>
    );
  };

  const renderOtherFeatures = () => {
    return (
      <div className="recommendations-card-container">
        {allFeatures.map((feature) => (
          <>
            {!recommendedFeatures.recommended.includes(feature.id) && (
              <div
                className="recommended-feature-container"
                onClick={() => feature.action(navigate)}
              >
                <div className="recommended-feature-title">
                  <>{feature?.icon?.()}</>
                  <div className="white">{feature.title}</div>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    );
  };

  return (
    <div className="recommendations-container">
      <div className="recommendations-card-container">
        {recommendedFeatures.recommended.map((feature) => (
          <>{renderRecommendedFeature(feature)}</>
        ))}
      </div>
      <div className="white title mt-1">All rules</div>
      <div>{renderOtherFeatures()}</div>
    </div>
  );
};
