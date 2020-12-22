import React from "react";
import AccumulatedCandResults from "../../../src/components/score/candidate/AccumulatedCandResults";
import {useRouter} from  "next/router"
import GatedSignin from "../../../src/components/user/GatedSignin";

function allCandResults() {

const router = useRouter()
const {id}= router.query

    return (
        <GatedSignin>
            <AccumulatedCandResults id={id} />
       </GatedSignin>

    );
}
export default allCandResults;
