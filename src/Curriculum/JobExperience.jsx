import { useState } from "react";

export default function JobExperience() {
  const [jobViewing, setJobViewing] = useState("none");

  return (
    <div className="jobExperience">
      <div className="jobsList">
        <h2 className="underlined centered">Ordered by newest</h2>
        <div className="jobsListBox">
          <h3
            className="noMarginCurriculum click"
            onClick={() => setJobViewing("freelance")}
          >
            /Freelancer/Developer
          </h3>
          <p>
            (Jan/2025){" "}
            {jobViewing === "freelance" && <strong>{"> Reading"}</strong>}
          </p>
        </div>

        <hr className="lineCurriculum"></hr>

        <div className="jobsListBox">
          <h3
            className="noMarginCurriculum click"
            onClick={() => setJobViewing("caravelaTech")}
          >
            /Caravela_Tech/Front_End_Developer
          </h3>
          <p>
            (Feb/2024_-_Jan/2025){" "}
            {jobViewing === "caravelaTech" && <strong>{"> Reading"}</strong>}
          </p>
        </div>

        <hr className="lineCurriculum"></hr>

        <div className="jobsListBox">
          <h3
            className="noMarginCurriculum click"
            onClick={() => setJobViewing("cesar")}
          >
            /César_Roberto_&_Jasmim_LDA/<br></br>Business_partner
          </h3>
          <p>
            (Jan/2023_-_Apr/2023){" "}
            {jobViewing === "cesar" && <strong>{"> Reading"}</strong>}
          </p>
        </div>

        <hr className="lineCurriculum"></hr>

        <div className="jobsListBox">
          <h3
            className="noMarginCurriculum click"
            onClick={() => setJobViewing("globaldata")}
          >
            /Globaldata/Custumer_Service
          </h3>
          <p>
            (Oct/2019_-_Jan/2023){" "}
            {jobViewing === "globaldata" && <strong>{"> Reading"}</strong>}
          </p>
        </div>

        <hr className="lineCurriculum"></hr>

        <div className="jobsListBox">
          <h3
            className="noMarginCurriculum click"
            onClick={() => setJobViewing("centralCervejas")}
          >
            /Sociedade_Central_de_Cervejas/<br></br>Front_Office_Support
          </h3>
          <p>
            (Oct/2017_-_Oct/2019){" "}
            {jobViewing === "centralCervejas" && <strong>{"> Reading"}</strong>}
          </p>
        </div>

        <hr className="lineCurriculum"></hr>

        <div className="marginCompensate">
          <h3
            className="noMarginCurriculum click"
            onClick={() => setJobViewing("portugalTelecom")}
          >
            /Portugal_Telecom/<br></br>Front_and_Back_Office_Support
          </h3>

          <p>
            (Dez/2009_-_oct/2016){" "}
            {jobViewing === "portugalTelecom" && <strong>{"> Reading"}</strong>}
          </p>
        </div>
      </div>
      {jobViewing !== "none" ? (
        <div className="jobDescription">
          {jobViewing === "portugalTelecom" && <PortugalTelecom />}
          {jobViewing === "centralCervejas" && <CentralCervejas />}
          {jobViewing === "globaldata" && <Globaldata />}
          {jobViewing === "cesar" && <CRJLDA />}
          {jobViewing === "caravelaTech" && <CaraveltaTech />}
          {jobViewing === "freelance" && <Freelancer />}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

function PortugalTelecom() {
  return (
    <div>
      <h2 className="noMarginCurriculum">Portugal Telecom</h2>
      <h3 className="noMarginCurriculum">Front and Back Office Support</h3>
      <p className="noMarginCurriculum">Lisbon - Areeiro</p>
      <p className="noMarginCurriculum">(Dez/2009 - oct/2016)</p>
      <br></br>
      <br></br>
      <p>
        December 2009: I started my activities in the 1696 area, working in
        Billing and collections, as well as the credit control line. In the
        Outbound area, I carried out Customer satisfaction contact / GOR
        consumption communication;
      </p>
      <br></br>
      <p>
        June 2010: I started providing services in the Back-office of Randstad,
        gaining more experience in the TMN (MEO) sector;
      </p>
      <br></br>
      <p>
        August 2011 until 2014: Training at MEO Empresarial and Office Box. Due
        to the unification of departments, I actively participated in
        convergence training (MEO mobile and fixed component);
      </p>
      <br></br>
      <p>
        Last 24 months: I participated in the {`"LOBO"`} project (use of
        Microsoft Lync program to answer questions asked by the store in
        real-time);
      </p>
      <br></br>
      <p>
        Just before i left, I was responsible for internal areas MEO Mobile and
        Fixed, MXO, Office Box.<span className="blink">▮</span>
      </p>
    </div>
  );
}

function CentralCervejas() {
  return (
    <div>
      <h2 className="noMarginCurriculum">Sociedade Central de Cervejas</h2>
      <h3 className="noMarginCurriculum">Front Office Support</h3>
      <p className="noMarginCurriculum">Vila Franca de Xira - Vialonga</p>
      <p className="noMarginCurriculum">(Oct/2017 - Oct/2019)</p>
      <br></br>
      <br></br>
      <p>Provided customer support on SCC’s B2B client helpline.</p> <br></br>
      <p>
        Processed requests in the Back-Office and supported the supervision
        team.
        <span className="blink">▮</span>
      </p>
    </div>
  );
}

function Globaldata() {
  return (
    <div>
      <h2 className="noMarginCurriculum">Globaldata</h2>
      <h3 className="noMarginCurriculum">Custumer Service</h3>
      <p className="noMarginCurriculum">Lisbon - Areeiro & Sintra</p>
      <p className="noMarginCurriculum">(Oct/2019 - Jan/2023)</p>
      <br></br>
      <br></br>
      <p>
        Handled direct client e-mails, inbound line of support and technical
        issues including B2B clients.
      </p>
      <br></br>
      <p>
        Rectified billing issues on PHC, oversaw order management, provided
        front desk assistance.
      </p>
      <br></br>
      <p>Managed warehouse operations including stock control.</p>
      <br></br>
      <p>
        Assembling and repairing computers, along with assisting the technical
        team.<span className="blink">▮</span>
      </p>
    </div>
  );
}

function CRJLDA() {
  return (
    <div>
      <h2 className="noMarginCurriculum">César Roberto & Jasmim</h2>
      <h3 className="noMarginCurriculum">Business Partner</h3>
      <p className="noMarginCurriculum">Loures - Sacavém</p>
      <p className="noMarginCurriculum">(Jan/2023 - Apr/2023)</p>
      <br></br>
      <br></br>
      <p>
        Following the passing of my father, I took charge of his bed headboard
        business for four months to ensure continuity in the business.
      </p>
      <br></br>
      <p>
        This involved fulfilling pending customer and reseller orders,
        overseeing the manufacturing staff, managing stock and equipment, and
        addressing incoming reseller orders through to the closure of the
        business.<span className="blink">▮</span>
      </p>
    </div>
  );
}

function CaraveltaTech() {
  return (
    <div>
      <h2 className="noMarginCurriculum">Caravela Tech</h2>
      <h3 className="noMarginCurriculum">Front End Developer</h3>
      <p className="noMarginCurriculum">Tomar - Remote</p>
      <p className="noMarginCurriculum">(Feb/2024 - Jan/2025)</p>
      <br></br>
      <br></br>
      <p>
        {`"Gestor de bolso"`}: Developed and deployed a comprehensive React.js
        application, enabling clients to manage product catalogs, customer and
        retail lists, sales and purchase transactions, inventory, and task
        management, for tech companies. Full optimized with back-end.
      </p>
      <br></br>
      <p>
        {`"Dental Stock"`}: Developed a React.js application for dental clinics,
        integrating inventory. Appointment, retail, customer, and doctor
        management systems. Implemented a inventory management system, enabling
        real-time tracking of clinic supplies and automated inventory reduction
        upon appointment completion.
      </p>
      <br></br>
      <p>
        {`"Vyrto Clothing"`}: Developed and customized a Shopify e-commerce
        website for a clothing company, resulting in a user-friendly and
        visually appealing online store.<span className="blink">▮</span>
      </p>
    </div>
  );
}

function Freelancer() {
  return (
    <div>
      <h2 className="noMarginCurriculum">Freelancer</h2>
      <h3 className="noMarginCurriculum">Developer</h3>
      <p className="noMarginCurriculum">Remote</p>
      <p className="noMarginCurriculum">(Jan/2025)</p>
      <br></br>
      <br></br>
      <p>
        <a
          href="https://www.artstudiolemonpepper.com/"
          style={{ style: "none" }}
        >{`"Lemon & Pepper Art Studio"`}</a>
        : A Shopify e-commerce website for a print art studio company, finished
        in 03-05-2025<br></br>
        Used HTML, CSS and Liquid to configure this website.
        <span className="blink">▮</span>
      </p>
    </div>
  );
}
