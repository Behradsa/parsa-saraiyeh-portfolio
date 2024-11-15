import React from "react";
import { Helmet } from "react-helmet";
import styles from "./NebuloxPage.module.css";
import Header from "../components/Header";
import scrollToHash from "../functions/scrollToHash";
import think_process_img_1 from "../assets/Nebulox/thinkproccess-1.png";
import think_process_img_2 from "../assets/Nebulox/thinkproccess-2.png";
import think_process_img_3 from "../assets/Nebulox/thinkproccess-3.png";
import documentation_icon_img from "../assets/Nebulox/documentation-icon.svg";
import main_img_1 from "../assets/Nebulox/main-img-1.png";
import logo_img_1 from "../assets/Nebulox/logo-img-1.png";
import logo_img_2 from "../assets/Nebulox/logo-img-2.png";
import logo_img_3 from "../assets/Nebulox/logo-img-3.png";
import logomark_img_1 from "../assets/Nebulox/logomark-1.png";
import logomark_img_2 from "../assets/Nebulox/logomark-2.png";
import logomark_img_3 from "../assets/Nebulox/logomark-3.png";
import logomark_img_4 from "../assets/Nebulox/logomark-4.png";
import logomark_img_5 from "../assets/Nebulox/logomark-5.png";
import nebulox_img_1 from "../assets/Nebulox/nebulox-img-1.png";
import nebulox_img_2 from "../assets/Nebulox/nebulox-img-2.png";
import logo_type_desktop from "../assets/Nebulox/logotype-desktop.png";
import arch_img_1 from "../assets/Nebulox/arch-1.png";
import arch_img_2 from "../assets/Nebulox/arch-2.png";
import arch_img_3 from "../assets/Nebulox/arch-3.png";
import main_img from "../assets/Nebulox/main-img.png";

function NebuloxPage() {
  scrollToHash();

  return (
    <div className={styles["page"]}>
      <Helmet>
        <meta name="viewport" content="width=10آنلیز عددی00" />
        <title>Parsa Saraiyeh | Nebulox</title>
        <meta
          name="description"
          content="Nebulox Case Study. A crypto payment gateway for businesses of various scales from entrepreneurs to enterprises."
        />
        <meta property="og:title" content="Parsa Saraiyeh | Nebulox" />
        <meta
          property="og:description"
          content="Nebulox Case Study. A crypto payment gateway for businesses of various scales from entrepreneurs to enterprises."
        />
        <meta
          property="og:image"
          content="https://parsa-sa.com/src/assets/logos/parsa-logo.svg"
        />
        <meta name="twitter:title" content="Parsa Saraiyeh | Nebulox" />
        <meta
          name="twitter:description"
          content="Nebulox Case Study. A crypto payment gateway for businesses of various scales from entrepreneurs to enterprises."
        />
        <meta
          name="twitter:image"
          content="https://parsa-sa.com/src/assets/logos/parsa-logo.svg"
        />
      </Helmet>
      <Header />
      <div className={`${styles["main-container"]}`}>
        <a href="https://nebulox.io/">
          <img className={styles["main-img"]} src={main_img} alt="main" />
        </a>
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
                <b>1. What is this?</b>
                <p>Clearly explain what the website or product is.</p>
              </div>
              <div className={`${styles["box"]}`}>
                <b>2. What can I do here?</b>
                <p>Highlight key actions or interactions available.</p>
              </div>
              <div className={`${styles["box"]}`}>
                <b>3. What do you offer?</b>
                <p>Showcase the core offerings or features.</p>
              </div>
              <div className={`${styles["box"]}`}>
                <b>4. Why should I be here (and not elsewhere)?</b>
                <p>
                  Provide unique value propositions that set you apart from
                  alternatives.
                </p>
              </div>
              <p>
                Before designing a dashboard, here are some essential questions
                to ask:
              </p>
              <div className={`${styles["box"]}`}>
                <b>1. Who are the visitors?</b>
                <p>Merchants, freelancers, developers.</p>
              </div>
              <div className={`${styles["box"]}`}>
                <b>2. Do they have different needs?</b>
                <p>
                  Yes, freelancers need quick access to deposits, withdrawals,
                  and invoices, while developers mainly need access to technical
                  documentation.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <b>3. What problem are they solving?</b>
                <p>Quickly accessing vital financial information.</p>
              </div>
              <div className={`${styles["box"]}`}>
                <b>4. How does my solution address this?</b>
                <p>Through charts and data visualizations.</p>
              </div>
              <div className={`${styles["box"]}`}>
                <b>5. What content communicates the solution effectively?</b>
                <p>Chart-based content.</p>
              </div>
              <div className={`${styles["box"]}`}>
                <b>6. What’s the next action?</b>
                <p>Navigation through interactive dashboard sections.</p>
              </div>
            </div>
            <div>
              <div className={styles.title}>
                Merchant Dashboard Design Brief
              </div>
              <div className={`${styles["box"]}`}>
                <b>Description:</b>
                <p>Design merchant dashboard page</p>
              </div>
              <div className={`${styles["box"]}`}>
                <b>Design feature:</b>
                <ul>
                  <li>shows actionable and useful information at a glance.</li>
                  <li>
                    It simplifies the visual representation of complex data and
                    helps Merchants understand, analyze, and present key
                    insights.
                  </li>
                  <li>communicate information quickly.</li>
                  <li>design empty states</li>
                </ul>
              </div>
              <div className={`${styles["box"]}`}>
                <b>Competitors:</b>
                <ul>
                  <li>coingate</li>
                  <li>coin remitter</li>
                  <li>coin payment</li>
                  <li>triple A</li>
                  <li>now payments</li>
                  <li>cryptomus</li>
                </ul>
              </div>
              <div className={`${styles["box"]}`}>
                <b>The main goals of users:</b>
                <ul>
                  <li>Quick access to important parts</li>
                  <li>
                    can see financial stuff (income and deposit and withdrawal
                    transactions) on the graph
                  </li>
                </ul>
              </div>
              <div className={`${styles["box"]}`}>
                <b>Expectation for the final output:</b>
                <ul>
                  <li>
                    The core objective of a dashboard is to make complex
                    information accessible and easy to digest.
                  </li>
                  <li>All essential information is immediately accessible.</li>
                </ul>
              </div>
            </div>
            <div>
              <div className={styles.title}>Analyses Data Convert</div>
              <div className={`${styles["box"]}`}>
                <b>Personas</b>
                <ul>
                  <li>exchangers</li>
                  <li>Business owners</li>
                  <li>freelancers</li>
                </ul>
              </div>
              <div className={`${styles["box"]}`}>
                <b>Value Proposition</b>
                <p>
                  increase the speed at which decisions can be made by reducing
                  information fatigue
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <b>Call To Action</b>
                <ul>
                  <li>create new gateway</li>
                  <li>create invoice</li>
                  <li>deposit</li>
                  <li>export excel, ...</li>
                </ul>
              </div>
              <div className={styles.title}>Wireframe</div>
              <div className={`${styles["box"]}`}>
                <b>Quick access</b>
                <ul>
                  <li>deposit</li>
                  <li>withdraw</li>
                  <li>create gateway</li>
                  <li>create invoice</li>
                </ul>
              </div>
              <div className={`${styles["box"]}`}>
                <b>Currency rate</b>
              </div>
              <div className={`${styles["box"]}`}>
                <b>Gateway</b>
                <ul>
                  <li>Total income</li>
                  <li>Total gateway</li>
                  <li>Total order count</li>
                </ul>
              </div>
              <div className={`${styles["box"]}`}>
                <b>Wallet</b>
                <ul>
                  <li>Total income</li>
                  <li>Total gateway</li>
                  <li>Total Spending</li>
                </ul>
              </div>
              <div className={`${styles["box"]}`}>
                <b>Transaction / Chart</b>
                <ul>
                  <li>Deposit</li>
                  <li>Withdraw</li>
                  <li>Invoice</li>
                </ul>
              </div>
              <div className={`${styles["box"]}`}>
                <b>Downloading Data</b>
              </div>
            </div>
          </div>
          <h3>Persona research and documentation</h3>
          <p>
            We decided to conduct user interviews in order to gain more precise
            insights about different personas and also get a better grasp of
            their challenges and worries.
          </p>
          <div className={`${styles["blue-container"]}`}>
            <img src={documentation_icon_img} alt="doc" />
            <p>
              Persona Research <br />
              Documentation
            </p>
          </div>
          <div className={`${styles["list-container"]}`}>
            <h3>Exchanger</h3>
            <ul>
              <li>Does not hold a significant share of the market.</li>
              <li>Has a good understanding of cryptocurrency.</li>
              <li>Limited ability to spend large amounts.</li>
              <li>
                Has a small to medium-sized technical and human resources team.
              </li>
              <li>Values details and statistics.</li>
              <li>
                Trust is difficult to establish due to the financial nature of
                the business.
              </li>
            </ul>
          </div>
          <div className={`${styles["list-container"]}`}>
            <h3>Background & Behavior</h3>
            <p>
              Due to the static nature of their wallet address, it has been
              misused several times. They explored other gateways and tried one
              for a while, but trust issues and the risk of holding
              cryptocurrency led them to withdraw assets after a few
              transactions. As a small business, their transaction amounts are
              low, and because the transfer fees are fixed regardless of the
              amount, high fees made continued use of the previous gateway
              unsustainable.
            </p>
          </div>
          <div className={`${styles["list-container"]}`}>
            <h3>Challenges</h3>
            <ul>
              <li>
                Having one wallet address for all transactions leads to misuse
                and financial losses.
              </li>
              <li>
                Human errors make distinguishing real transactions from
                fraudulent ones difficult.
              </li>
              <li>
                Struggles to convince users to share images of assets, resulting
                in lost customers.
              </li>
              <li>
                High fees from reviewed gateways are not sustainable for
                frequent transfers and conversions.
              </li>
              <li>
                Lacks confidence in the technical team’s ability to implement a
                gateway.
              </li>
              <li>
                Needs multi-network support, which reviewed gateways do not
                provide.
              </li>
              <li>Reviewed gateways don’t support all required tokens.</li>
              <li>
                Storing cryptocurrency poses a risk due to price fluctuations.
              </li>
            </ul>
          </div>
          <div className={`${styles["list-container"]}`}>
            <h3>Concerns</h3>
            <ul>
              <li>
                Lacks sufficient familiarity with blockchain structure and is
                unsure about asset management and transfer methods.
              </li>
              <li>Distrustful of entrusting assets to third parties.</li>
              <li>Concerned about potential technical challenges.</li>
              <li>
                Worries about regulatory changes, restrictions, and account
                freezes.
              </li>
            </ul>
          </div>
          <div className={`${styles["list-container"]}`}>
            <h3>Needs</h3>
            <ul>
              <li>
                A cost-effective method for generating unique wallet addresses
                for each transaction.
              </li>
              <li>Secure wallet for storing assets safely.</li>
              <li>No risk of asset value fluctuation as cryptocurrency.</li>
              <li>Support for multiple networks and tokens.</li>
            </ul>
          </div>
          <div className={`${styles["blue-container"]}`}>
            <img src={documentation_icon_img} alt="doc" />
            <p>
              Persona Research <br /> Interview Questions
            </p>
          </div>
          <h3>STAKEHOLDERS</h3>
          <div className={`${styles["list-container"]}`}>
            <div className={styles["list-container-title"]}>
              Product Questions
            </div>
            <ul>
              <li>
                Can you describe the process of achieving problem-solution fit
                for this product?
              </li>
              <li>How does this project align with your business strategy?</li>
              <li>What will set this product apart in the market?</li>
              <li>
                How do users typically discover, select, and purchase similar
                products or services?
              </li>
              <li>
                What are the main customer acquisition channels for our product?
              </li>
            </ul>
          </div>
          <div className={`${styles["list-container"]}`}>
            <div className={styles["list-container-title"]}>User Questions</div>
            <div>
              <h3>Understanding & Learning</h3>
              <ul>
                <li>
                  Who are your customers and users? Have you created any
                  segments for targeting?
                </li>
              </ul>
            </div>
            <div>
              <h3>Goals, Motivation, and Context</h3>
              <ul>
                <li>What is the main goal of using our product?</li>
                <li>In what situations do they need our product?</li>
                <li>What motivations might they have for using our service?</li>
                <li>
                  What are the fundamental needs that our service is built on?
                </li>
                <li>Why do users or customers choose a product like ours?</li>
              </ul>
            </div>
            <div>
              <h3>Current Methods</h3>
              <ul>
                <li>
                  What percentage of your target users use competitor sites, and
                  how many haven’t tried similar products?
                </li>
                <li>What is their current method for meeting these needs?</li>
                <li>What challenges do they face without our product?</li>
                <li>
                  What concerns do they have before and after using our service?
                </li>
                <li>What are the most common complaints from users?</li>
              </ul>
            </div>
            <div>
              <h3>Expectations</h3>
              <ul>
                <li>
                  What are their minimum and maximum expectations for our
                  product?
                </li>
              </ul>
            </div>
            <div>
              <h3>Our Product</h3>
              <ul>
                <li>
                  What issues do users encounter when using our product or
                  service?
                </li>
                <li>
                  Is there something we haven’t asked that you believe would be
                  valuable for us to know?
                </li>
              </ul>
            </div>
          </div>
          <h3>MERCHANTS</h3>

          <div className={`${styles["list-container"]}`}>
            <div className={styles["list-container-title"]}>
              Product Questions
            </div>
            <ul>
              <li>
                What specific value or solution is this product expected to
                bring to your business?
              </li>
              <li>
                How does using our product align with and support your overall
                business strategy?
              </li>
            </ul>
          </div>

          <div className={`${styles["list-container"]}`}>
            <div className={styles["list-container-title"]}>User Questions</div>
            <div>
              <h3>Understanding & Learning</h3>
              <ul>
                <li>Have you used cryptocurrencies before?</li>
                <li>
                  Which channels or media do you use to learn about crypto
                  payment systems?
                </li>
                <li>
                  Does our product remind you of others on the market? If so,
                  which ones and why?
                </li>
              </ul>
            </div>
            <div>
              <h3>Goals, Motivation, and Context</h3>
              <ul>
                <li>
                  What is your primary goal for using our crypto payment
                  gateway? Do you have any secondary goals?
                </li>
                <li>What are your motivations for using our product?</li>
                <li>What fundamental needs does our service address?</li>
                <li>
                  Can you share a scenario where you needed a product like ours?
                </li>
              </ul>
            </div>
            <div>
              <h3>Current Methods</h3>
              <ul>
                <li>
                  What payment systems have you used in the past? What were
                  their pros and cons?
                </li>
                <li>
                  Are you currently using a crypto payment gateway? If so, what
                  are the advantages and disadvantages?
                </li>
                <li>If not, how are you currently meeting this need?</li>
                <li>
                  What are the easiest and hardest parts of your current
                  solution?
                </li>
                <li>
                  What issues or challenges do you face with or without using a
                  crypto gateway?
                </li>
                <li>
                  Can you describe the last issue you faced in this area and how
                  you resolved it?
                </li>
              </ul>
            </div>
            <div>
              <h3>Concerns & Expectations</h3>
              <ul>
                <li>
                  What are your concerns before and after using our service?
                </li>
                <li>
                  Do your users find it easy to use crypto payment systems for
                  purchases?
                </li>
                <li>Are there any expectations or concerns from your users?</li>
                <li>
                  What minimum and maximum expectations do you have for our
                  product?
                </li>
                <li>What security and privacy factors are most important?</li>
              </ul>
            </div>
            <div>
              <h3>Challenges & Limitations</h3>
              <ul>
                <li>
                  Are there any specific conditions that affect how you use our
                  product?
                </li>
                <li>What limitations do you face in using our service?</li>
                <li>What could prevent you from using our product?</li>
                <li>
                  Do you foresee any potential problems in using our solution?
                </li>
              </ul>
            </div>
            <div>
              <h3>Future Outlook</h3>
              <ul>
                <li>
                  Do you think this product will be beneficial for you? Why or
                  why not?
                </li>
                <li>
                  What improvements could make digital crypto payments easier or
                  better?
                </li>
                <li>
                  Is there anything we haven’t asked that you believe would be
                  valuable for us to know?
                </li>
                <li>
                  What feedback or suggestions do you have for improving the
                  user experience?
                </li>
              </ul>
            </div>
          </div>
          <h3>DEVELOPERS</h3>
          <div className={`${styles["list-container"]}`}>
            <div className={styles["list-container-title"]}>User Questions</div>
            <div>
              <h3>Understanding & Learning</h3>
              <ul>
                <li>Have you or your team used cryptocurrencies before?</li>
              </ul>
            </div>
            <div>
              <h3>Goals, Motivation, and Context</h3>
              <ul>
                <li>
                  What essential needs does our service address for your team?
                </li>
              </ul>
            </div>
            <div>
              <h3>Current Methods</h3>
              <ul>
                <li>
                  Do you currently use a crypto payment gateway? What are its
                  pros and cons?
                </li>
                <li>If not, how do you currently solve this need?</li>
                <li>
                  What challenges do you face with or without a digital payment
                  gateway?
                </li>
                <li>
                  Can you describe the last issue and how you resolved it?
                </li>
                <li>
                  What concerns do you have before and after using our service?
                </li>
              </ul>
            </div>
            <div>
              <h3>Expectations</h3>
              <ul>
                <li>
                  What security and privacy factors are crucial in a crypto
                  payment system?
                </li>
                <li>
                  What are your general expectations and requirements from our
                  product?
                </li>
                <li>How can we make the integration process easier for you?</li>
              </ul>
            </div>
            <div>
              <h3>Challenges, Concerns & Limitations</h3>
              <ul>
                <li>
                  Are there any specific conditions that affect your use of our
                  product?
                </li>
                <li>What limitations or barriers do you face?</li>
                <li>
                  What concerns or warnings should we address when using our
                  service?
                </li>
                <li>
                  Are there reasons you might choose not to use our product?
                </li>
              </ul>
            </div>
            <div>
              <h3>Future Outlook</h3>
              <ul>
                <li>
                  What improvements could make digital crypto payments better or
                  easier?
                </li>
                <li>
                  Is there anything we haven't asked that you think we should
                  know?
                </li>
                <li>
                  Any feedback or suggestions to improve the user experience?
                </li>
              </ul>
            </div>
          </div>
        </section>
        <img src={main_img_1} alt="main-img-1" />
        <section className={`${styles["introduction-section"]}`}>
          <h2>Ideation</h2>
          <p>
            First we had to construct a brand identity for this new product and
            then form a style guide that could enable us to bring our wireframes
            to life.
          </p>
          <h3>Logo Ideation</h3>
          <p>
            These are the ideas that our graphic designer had in mind based on
            the direction we agreed upon, but none of them were memorable enough
            and some of them were designed too literal and in a very descriptive
            way. I believe logo should be memorable more than anything else, not
            necessarily descriptive.
          </p>
          <div className={styles["logo-img-container"]}>
            <img src={logo_img_1} alt="logo-img-1" />
            <img src={logo_img_2} alt="logo-img-2" />
            <img src={logo_img_3} alt="logo-img-3" />
          </div>
          <p>
            Unfortunately I didn’t have enough time to go back and forth with
            our graphic designer to achieve the desired result so I had to
            design the logo myself and these are the final touches I made to the
            logo before I call it a day.
          </p>
          <p>
            Goal was to simplify the logo as much as possible and make it easy
            to be identifiable and memorable. It’s a playful reiteration on the
            composition consisting two circles forming an optical illusion of a
            pipe (referring to a Nebulox as a passageway for all kinds of crypto
            tokens). It also depicts an astronaut helmet from a side angle view.
            This is based on the brand story we devised for Nebulox which is
            merchants’ safe comrade in the crypto galaxy. We finished the
            process by adding our merchants to the composition; symbolized by a
            rectangle next to the logotype signifies our merchants. Nebulox
            should feel like a trusted safe for all businesses. They can do
            business feeling assured all transactions are safe and accessible to
            them at any time.
          </p>
          <h3>Logomark</h3>
          <div className={styles["logomark-img-container"]}>
            <img src={logomark_img_1} alt="logomark_1" />
            <img src={logomark_img_2} alt="logomark_2" />
            <img src={logomark_img_3} alt="logomark_3" />
            <img src={logomark_img_4} alt="logomark_4" />
            <img src={logomark_img_5} alt="logomark_5" />
          </div>
          <h3>Logotype</h3>
          <img src={logo_type_desktop} alt="logotype" />
          <h3>Nebulox Logo v1.0.0</h3>
          <div className={styles["logomark-img-container"]}>
            <img src={nebulox_img_1} alt="nebulox_1" />
            <img src={nebulox_img_2} alt="nebulox_2" />
          </div>
        </section>
        <section className={`${styles["introduction-section"]}`}>
          <h2>Style guides</h2>
          <p>
            Luckily we’ve already built our in house design system by the time
            we started working on Nebulox, so we’ve had a good foundation to
            define our style guides. We had access to light mode and dark mode
            without any extra efforts inside Figma and code and also a robust
            design token architecture enabled us to handle all sort of wider
            requirements for web, Android and ios like various modes, contexts
            (LTR,RTL, multi language support etc.) and environments. Here’s a
            snapshot of the style guide I designed for Nebulox.
          </p>
          <a href="https://www.figma.com/design/6ey4Fa5SD7M1SQ1mMbUekr/Parsa's-Case-Studies?node-id=418-71003&t=YyVNW980GZZlxBkk-1">
            Style guides
          </a>
        </section>
        <section className={`${styles["introduction-section"]}`}>
          <h2>Information architecture</h2>
          <p>
            I’ve started with some educational prep work for the team so they
            have a clear direction on how to devise the Information Architecture
            and then we started with some card sorting and tree testing
            activities to categorize different sections of the app. Here’s a
            snapshot of our document.
          </p>
          <div className={styles["grid-2"]}>
            <div>
              <div className={styles["bluebox"]}>Preparation</div>
              <p>
                A UX sitemap is a hierarchical diagram of a website or
                application, that shows how pages are prioritized, linked, and
                labeled. If a user flow is like the street view details, the
                sitemap is like the bird’s eye view.
              </p>
              <div className={styles["steps"]}>
                <div>1</div>
                <div>
                  <h3>Understand User Goals</h3>
                  <div>
                    <p>You need to find the answer to the questions:</p>
                    <ul>
                      <li>Who will be using a product?</li>
                      <li>What are they going to do?</li>
                      <li>What do they want to achieve?</li>
                      <li>What are their mental models?</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles["steps"]}>
                <div>2</div>
                <div>
                  <h3>Define Business Objectives</h3>
                </div>
              </div>
              <div className={styles["steps"]}>
                <div>3</div>
                <div>
                  <h3>Competitor Analysis</h3>
                </div>
              </div>
              <div className={styles["steps"]}>
                <div>4</div>
                <div>
                  <h3>Define Content</h3>
                </div>
              </div>
              <div className={styles["steps"]}>
                <div>5</div>
                <div>
                  <h3>Categorize & Prioritize Content</h3>
                  <ul>
                    <li>Card sorting</li>
                    <li>Tree testing</li>
                  </ul>
                </div>
              </div>
              <div className={styles["steps"]}>
                <div>6</div>
                <div>
                  <h3>Create a Sitemap</h3>
                  <div>
                    <p>You need to find the answer to the questions:</p>
                    <ul>
                      <li>Who will be using a product?</li>
                      <li>What are they going to do?</li>
                      <li>What do they want to achieve?</li>
                      <li>What are their mental models?</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles["steps"]}>
                <div>7</div>
                <div>
                  <h3>Label Content</h3>
                  <p>
                    A label can be a page name, the name of a category in the
                    menu, or a section name.
                  </p>
                </div>
              </div>
              <div className={styles["steps"]}>
                <div>8</div>
                <div>
                  <h3>Navigation System & User flows</h3>
                  <p>
                    A navigation system will include menus, breadcrumbs, and
                    internal links.
                  </p>
                </div>
              </div>
              <div className={styles["steps"]}>
                <div>9</div>
                <div>
                  <h3>Prototype User Flow</h3>
                </div>
              </div>
              <div className={styles["steps"]}>
                <div>10</div>
                <div>
                  <h3>Validate Your Design</h3>
                </div>
              </div>
              <img src={arch_img_1} alt="arch-1" />
            </div>
            <div>
              <div className={styles["steps"]}>
                <div>1</div>
                <div>
                  <h3>Understand User Goals</h3>
                  <div>
                    <p>You need to find the answer to the questions:</p>
                  </div>
                </div>
              </div>
              <div className={styles["steps"]}>
                <div>2</div>
                <div>
                  <h3>User organizes topics into groups</h3>
                  <div>
                    <p>
                      Some piles can be big, others small. If the participant
                      isn’t sure about a card, it’s ok to leave it off to the
                      side. It’s better to have a set of “unknown” or “unsure”
                      cards. Users should be aware that it’s OK change their
                      mind and their sorting as they work
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles["steps"]}>
                <div>3</div>
                <div>
                  <h3>User names the groups</h3>
                  <div>
                    <p>
                      It’s important to do this naming step after all the groups
                      have been created, so that the user doesn’t lock herself
                      in to categories while she’s still working
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles["steps"]}>
                <div>4</div>
                <div>
                  <h3>Debrief the user</h3>
                  <div>
                    <p>Additional questions may include:</p>
                    <ul>
                      <li>
                        Were any items especially easy or difficult to place?
                      </li>
                      <li>
                        Did any items seem to belong in two or more groups?
                      </li>
                      <li>
                        What thoughts do you have about the items left unsorted
                        (if any)?
                      </li>
                    </ul>
                    <p>You can also ask the user to think out loud</p>
                  </div>
                </div>
              </div>
              <div className={styles["steps"]}>
                <div>5</div>
                <div>
                  <h3>
                    If needed, ask the user for more-practical group sizes
                  </h3>
                  <div>
                    <p>
                      You should not impose your own wishes or biases upon the
                      participant during (steps 1–3), but after the initial
                      debrief, you can definitely ask the participant to break
                      up large groups into smaller subgroups. Or to group small
                      groups into larger categories.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles["steps"]}>
                <div>6</div>
                <div>
                  <h3>Analyze the data</h3>
                </div>
              </div>
              <img src={arch_img_2} alt="arch-2" />
            </div>
          </div>

          <h3>Preliminary Site Map</h3>
          <img src={arch_img_3} alt="" />
          <h3>Feedbacks and iterations</h3>
          <p>
            As a part of our design thinking process, we experimented a lot with
            different parts of the app. This process usually goes something like
            wireframing and prototyping, getting insights from user testing and
            key stakeholders’ feedback followed by making amendments and repeat
            to get to a point where we could be certain that users can navigate
            the app efficiently and use different features of the app
            conveniently. Since it was a new app that hadn’t been launched at
            that stage we leaned in towards qualitative studies as we had no
            analytics or quantitative data available to us.
          </p>
        </section>
        <section className={`${styles["introduction-section"]}`}>
          <h2>Design Deliverables</h2>
          <p>
            These are the design deliverables and comps we ended up with at this
            stage and obviously we refine them as we get more data on the app
            usage from qualitative insights and analytics data.
          </p>
          <a href="https://www.figma.com/design/6ey4Fa5SD7M1SQ1mMbUekr/Parsa's-Case-Studies?node-id=417-116171&t=YyVNW980GZZlxBkk-1">
            Design Deliverables Repository{" "}
          </a>
        </section>

        <section className={`${styles["introduction-section"]}`}>
          <h2>What is next?</h2>
          <p>These are the modules we are going to tackle next:</p>
          <ul>
            <li>
              Back office user management, roles management, tokens management,
              settings, wallet management
            </li>
            <li>
              Merchant settings, wallet management, sweep feature, transactions
            </li>
          </ul>
          <p>
            Now that we’ve launched the MMP version we can conduct quantitative
            research and utilize the data to optimize the experience. This will
            helps us immensely in terms of orchestrating a sublime experience at
            scale.
          </p>
        </section>
        <div className={styles["end"]}>Thank you for your time.</div>
      </div>
    </div>
  );
}

export default NebuloxPage;
