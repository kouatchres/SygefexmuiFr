import React from "react";
import CenterRegistrationDetails from "../../../../src/components/results/center/CenterRegistrationDetails";
import { useRouter } from "next/router";
function centerResultsForSeries({ query }) {
  const router = useRouter();
      const { id } = router.query;
    return (
        <div>
            <CenterRegistrationDetails id={id} />
        </div>
    );
}
export default centerResultsForSeries;
