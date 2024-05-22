import React from "react";
import Header from "../Header";
import Footbar from "../Footbar";
import "../../stylesheets/JobSeeker/notice.css";

const Notice = () => {
  return (
    <>
      <Header />
      <div id="notice">
        <div className="notice-heading">
          <h2>Notices</h2>
        </div>
        <div className="notice-text">
          <p>
            Terms And Condition You are deemed to have read and agreed to the
            following terms, conditions and use of service. Recruitment of
            personnel will be effective through "YTS Inc". "YTS Inc" a leading
            recruitment agency, provides its clients the most effective
            solutions with a committed approach. Our team of consultants
            personally handles every step of each assignment following the best
            ethical standards
          </p>

          <ol>
            <li>
              Registration with YTS Inc.is necessary for all the candidates
              before any consideration.
            </li>
            <li>
              Candidate will be liable to pay registration / donation fee as per
              the plan mentioned in the website for 3 interviews and after
              finishing of it, he/she has co enror again.
            </li>
            <li>
              The Registration is valid as per the plan mentioned in the website
              only from the date of Registration.
            </li>
            <li>
              Registration fee will be refundable in case we are not able to
              provide you any interview call during the tenure mentioned only.
            </li>
            <li>
              YTS Inc. do not guarantee of arranging interview/providing a job
              within a specified period. Short-listing & calling a candidate for
              interview is solely on the iscretion of YTS Inc.
            </li>
            <li>
              Candidate will not be considered for any vacancy in future nor the
              registration fee will be refundable :
              <ul>
                <li>
                  If the candidate does not attended the interviews arranged by
                  VTS Inc. twice.
                </li>
                <li>
                  If the candidate discloses the name of the vacancy/company
                  name to anybody else for which he/she has been sent through
                  YTS Inc.
                </li>
              </ul>
            </li>
            <li>
              If any candidate is selected by our references and
              recommendations, he/she has to inform and endorse a copy of the
              appointment letter immediately to us for our record. 8. In case of
              selection of the candidates, Our Recruitment Service Charges shall
              be :
              <ul>
                <li>
                  Case I- Candidate need not to pay any amount as our service
                  charges in case of the company where he is placed is agreed
                  with our terms of business & will pay our service charges.
                </li>
                <li>
                  Case II- The candidate will pay 100% of the gross one month
                  salary in two instalments as our service charges in case of
                  the Company where he is placed is not agreed with our terms of
                  business & not paying our service charges.
                </li>
                <li>
                  (Note: Candidate would be informed in advance whether the
                  company is paying our service charges or not)
                </li>
              </ul>
            </li>
            <li>
              Recruitment charges are acceptable in the form of cash, Personal
              Cheque or electronic fund transfer to YTS Inc.
            </li>
            <li>
              Offer letter remain the property of "YTS Inc" until receiving the
              full payment. In such circumstances, candidate shall be liable for
              any and all additional administrative and/or court costs.
            </li>
            <li>
              The candidate will be liable to release our service charges within
              2 months of the joining date either in cash or cheque or via
              electronic fund transfer based on point number 8.
            </li>
            <li>
              In case the candidate do not comply or deposit the said one months
              gross salary to YTS Inc. within two month of the joining date then
              :
              <ul>
                <li>
                  YTS Inc. is free to pursue legal court proceeding against the
                  candidate for breach of contract.
                </li>
                <li>
                  YTS Inc. will take action in accordance with the laws of India
                  as applicable.
                </li>
              </ul>
              
            </li>
          </ol>
        </div>
      </div>
      <Footbar />
    </>
  );
};

export default Notice;
