import React from "react";
import styles from "./NebuloxPage.module.css";
import Header from "../components/Header";
import scrollToHash from "../functions/scrollToHash";
import think_process_img_1 from "../assets/Nebulox/thinkproccess-1.png";
import think_process_img_2 from "../assets/Nebulox/thinkproccess-2.png";
import think_process_img_3 from "../assets/Nebulox/thinkproccess-3.png";

function NebuloxPage() {
  scrollToHash();

  return (
    <div className={styles["page"]}>
      <div className={styles["header-container"]}>
        <Header />
      </div>
      <div className={`${styles["main-container"]}`}>
        <section className={`${styles["introduction-section"]}`}>
          <h2>Introduction</h2>
          <p>
            Me and the team at Nebulox were tasked with designing a brand new
            product from scratch for an overarching brand consists of multiple
            sub brands and products that provides crypto payment solutions to
            other businesses. There was nothing to work off of in terms of brand
            identity and creative direction, not even a product name.
            <br />
            <br />
            My Role in the team: Visual Designer <br />
            <br />
            Design Team: We started with one lead designer and 1 product
            designer plus myself as the hands-on visual designer, but a little
            bit down the road we borrowed another product designer from another
            product team for couple of sprints in order to speed things up.
            <br />
            <br />
            Dev Team: x6 developers <br />
            <br />
            Product Team: x1 product manager, x1 product lead
          </p>
          <h3>Background and Mission Statement</h3>
          <p>
            Our client decided to build their own cryptocurrency marketplace /
            trading platform that can cater to a wide range of users around the
            globe with hassle free KYC (Know Your Customer) processes and free
            access to the wider crypto community regardless of their location.
            <br />
            <br />
            First module that we were tasked to develop was a crypto payment
            gateway as a standalone product so we can generate revenue in order
            to build the rest of the modules. Crypto payment gateway was set to
            be a B2B product that empowers small to large businesses including
            entrepreneurs, medium and large sized organizations and enterprises
            to accept crypto as their payment method for their products and
            services.
            <br />
            <br />
            Building a brand new product from scratch is always challenging yet
            rewarding at the same time. <br />
            <br />
          </p>
          <h3>My Responsibilities</h3>
          <ul>
            <li>
              Devising the brand identity and visual guidelines for an
              all-encompassing crypto marketplace with crypto gateway as the
              first module being developed in mind
            </li>
            <li>
              Defining the scope of the product and identifying requirements
            </li>
            <li>
              Leading (beside Lead Designer) and delivering all design
              deliverables from style guides to finalized UI
            </li>
            <li>
              Setting the standards and ensuring cross functional alignment
              between various departments including design, engineering,
              product, sales and marketing
            </li>
            <li>
              Giving product design team direction, processes and proper tooling
              in order to deliver their best work possible
            </li>
            <li>
              Managing and delegating incoming work load and assigning tasks to
              team members
            </li>
          </ul>
          <h3>Executive Management Expectations</h3>
          <p>
            MVP version of the product was planned to deliver the following:
          </p>
          <ul>
            <li>
              Brand Identity including name, logo, style guides, UI components
              and patterns
            </li>
            <li>User payment flow</li>
            <li>Authentication (login/register)</li>
            <li>
              Merchant dashboard including a full-fledged “Create a Gateway”
              user flow
            </li>
            <li>
              Static pages including a simple home page and terms and conditions
            </li>
          </ul>
          <p>And the MMP version should’ve included:</p>
          <ul>
            <li>
              Back office dashboard including gateway management,
              authentication, merchant management
            </li>
            <li>Merchant manual invoice creation and invoice management</li>
            <li>
              More static pages including cookie policy, invoice landing page
              and privacy policy
            </li>
            <li>Email templates</li>
          </ul>
          <h3>Challenges</h3>
          <p>
            <b>No Vision, No Roadmap</b>
            <br />
            <br />
            One of the biggest challenges we’ve had initially was not having a
            product mission and vision along with any product roadmap so it was
            difficult to align the product design team with the executive
            management. It also made it difficult for us when we were trying to
            get a grasp of the product scope and future requirements. <br />
            <br />
            In order to rectify the situation, I’ve conducted multiple workshops
            with the PM and the product lead regarding product scoping and
            roadmap and we were able to land on a roadmap, vision and mission of
            our new product.
            <br />
            <br />
            <b>Time Constraints</b>
            <br />
            <br />
            Another challenge was the fact that we needed to get things done in
            the shortest time possible.
            <br />
            <br />
            We made a decision to borrow another product designer to get things
            rolling. As designers, we are very familiar with tight deadlines but
            sometimes we have to use some creative problem solving to get the
            result we are after even in terms of the team structure.
            <br />
            <br />
            <b>Wide Range of User Demographics</b>
            <br />
            <br />
            This product must be easy to use and cater to the needs of both our
            direct clients, meaning businesses (called merchants) and their
            users (called merchant’s customers) which means there’s a wide range
            of users from tech savvy and crypto experts to casuals who just want
            to use crypto for payment purposes.
            <br />
            <br />
            We planned for a design that is inclusive and does a lot of
            hand-holding in our onboarding process, empty states and the way we
            convey important information like transaction fees and network fees
            and decisions like choosing proper network when a merchant or their
            customers transferring money.
            <br />
            <br />
            <b>Scalability</b>
            <br />
            <br />
            It is crucial yet challenging to stay ahead of the ever changing
            crypto ecosystem as it is very new and there are a lot of things to
            consider and prepare for.
            <br />
            <br />
            We decided to go for a modular design approach in terms of our
            solutions which had an impact on everything we were doing in our day
            to day design activities from building a simple component to more UX
            heavy artifacts and decisions like user flows and information
            architecture.
          </p>
          <p>
            Thanks to the design system we’ve developed for the organization a
            little bit before this, product design team had a structure to lay
            their style guide and components on top of a solid foundation which
            helped us immensely particularly with efficiency, quality and speed.
          </p>
          <h3>Design Process Documentation</h3>
          <p>Design thinking process overview</p>
          <div className={`${styles["design-circles-container"]}`}>
            <div>
              <img src={think_process_img_1} alt="think_proccess_1" />
              <p>
                I usually recommend starting with design thinking process when
                there is a lot of ambiguity and unreliability around the work
                being done. This gives me a flexibility around the solutions and
                decisions that are being made. Design thinking process usually
                starts as a linear process but soon enough it changes to a
                non-linear process which is the intended way of going about
                conceptualization, exploration and implementation of the
                solutions.
              </p>
            </div>
            <div>
              <img src={think_process_img_2} alt="think_proccess_2" />
              <p>
                This approach gave us a direction in terms of our next steps and
                requirements. For starters, we tackled the conceptualization
                phase and preliminary research to understand our users, market
                trends, competitors and then defining the product we are working
                on and the ways it should meet all the needs of our customers.
                Next, we jumped to the exploration phase with ideation and low
                fidelity wireframes and prototyping to validated our solutions
                and lastly we finished with early high fidelity comps and
                prototyping to simulate the real product as much as we can.
              </p>
            </div>
            <div>
              <img src={think_process_img_3} alt="think_proccess_3" />
              <p>
                After initial studies we dug deeper for more insights and more
                refinements and this is the phase where design thinking process
                gets a non-linear form and we went back and forth between our
                low-fi prototyping and empathizing stages in order to make sure
                this is as close as it can get to the ideal product while
                considering all the other tangible and non-tangible factors like
                time constraints and resources, team’s state and remaining task
                tickets on our Jira board.
              </p>
            </div>
          </div>
        </section>
        <section className={`${styles["introduction-section"]}`}>
          <h2>Research & Insights</h2>
          <h3>Competitor analysis and industry trends</h3>
          <p>Competitor has been analyzed in following categories;</p>
          <ul>
            <li>User Payment Research</li>
            <li>Authentication (login / register)</li>
            <li>Invoice Landing Research</li>
            <li>Merchant Dashboard</li>
          </ul>
          <p>
            by analyzing different flows some of the key findings in merchant
            dashboard defined as below:
          </p>
          <div className={`${styles["research_grid_1"]}`}>
            <div>
              <p>Your homepage should address four essential user questions:</p>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>1. What is this?</b>
                  <br />
                  <br />
                  Clearly explain what the website or product is.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>2. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>2. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>2. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <p>
                Before designing a dashboard, here are some essential questions
                to ask:
              </p>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>1. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>2. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>3. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>4. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>5. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>6. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
            </div>
            <div>
              <div className={styles.title}>
                Merchant Dashboard Design Brief
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>1. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>2. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>3. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>4. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>5. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
            </div>
            <div>
              <div className={styles.title}>
                Merchant Dashboard Design Brief
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>1. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>1. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>1. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={styles.title}>
                Merchant Dashboard Design Brief
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>1. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>1. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>1. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>1. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>1. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>1. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <p>
                  <b>1. What can I do here?</b>
                  <br />
                  <br />
                  Highlight key actions or interactions available.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default NebuloxPage;
