import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import scrollToHash from "../functions/scrollToHash";
import styles from "./Nikandish.module.css";
import section_1_0_img from "../assets/Nikandish/section-1-0.png";
import section_1_1_img from "../assets/Nikandish/section-1-1.png";
import section_1_2_img from "../assets/Nikandish/section-1-2.png";
import section_2_0_img from "../assets/Nikandish/section-2-0.png";
import section_2_1_img from "../assets/Nikandish/section-2-1.png";
import section_2_2_img from "../assets/Nikandish/section-2-2.png";
import section_3_0_img from "../assets/Nikandish/section-3-0.png";

export default function NickandishPage() {
  scrollToHash();

  return (
    <div className={styles["page"]}>
      <div className={styles["header-container"]}>
        <Header />
      </div>
      <main>
        <section className={`${styles["section-1-intro"]}`}>
          <div>
            <h2>Introduction</h2>
            <p>
              I was tasked with building a design system for the organization in
              order to raise the bar in terms of the quality of end-to-end to
              production pipeline of all products from design environment to
              codebase of each application.
              <br />
              <br />
              My Role in the team: Visual Designer, Design Chapter Lead
              Assistance
              <br />
              <br />
              Dev Team: x1 front-end developer <br />
              <br />
              Product Team: Design Chapter Lead as PM of design system and
              myself
            </p>
          </div>
          <div>
            <h3>Background</h3>
            <p>
              My client was in need of a design system that could support all of
              their products. All design and front-end (web) and Android
              engineering efforts were sporadic, random and without any clear
              direction. There were no standards in place and no particular way
              of tackling tasks and challenges.
            </p>
          </div>
          <div>
            <h3>My Responsibilities</h3>
            <ul>
              <li>
                Educating executive management about design system benefits and
                getting the stakeholders buy-in
              </li>
              <li>
                Advocating quality and excellence in design and engineering
                departments
              </li>
              <li>
                Creation and implementation of processes, resources, tools and
                documentation that supports the design system
              </li>
              <li>Defining the scope and structure of the design system </li>
              <li>
                Devising token names and architecture for multi-brand and
                multi-theming purposes
              </li>
              <li>
                Defining the roadmap for design system modules and documentation
                based on the priorities
              </li>
              <li>
                Constructing component and pattern libraries structure and
                semantic versioning in Figma and code
              </li>
              <li>
                Identifying priorities through cross functional collaboration
                with various product teams
              </li>
              <li>
                Task management and Jira ticket estimations for design system
                tasks (design and front-end)
              </li>
              <li>
                Recruitment of product designers, brand designers and UX writers
              </li>
              <li>
                Communicating guidelines and processes along with educating and
                aligning different product teams on how to{" "}
              </li>
              <li>
                use the design system or migrate from a legacy UI kit or
                codebase to the latest version of the design system{" "}
              </li>
              <li>
                Encouraging the adoption of the design system across the
                organization
              </li>
              <li>
                Keeping track of important metrics and analytics in order to
                make conscious decisions
              </li>
              <li>
                Giving reports on the current state and progress of the design
                system
              </li>
            </ul>
          </div>
          <div>
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
                Static pages including a simple home page and terms and
                conditions
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
          </div>
          <div>
            <h3>Challenges</h3>
            <div>
              <h4>Visuals inconsistencies across products</h4>
              <p>
                Without a proper style guides, guidelines, component and pattern
                libraries, visual inconsistencies are inevitable.{" "}
              </p>
            </div>
            <div>
              <h4>Not Enough Resources</h4>
              <p>
                Ideally we needed a small team to get the ball rolling but one
                front-end developer was all I had in terms of human resources so
                I had to manage the executive management expectations regarding
                deadlines and timeframes.
              </p>
            </div>
            <div>
              <h4>Duplicated work efforts</h4>
              <p>
                Different product teams build a lot of the same components and
                similar user flows (e.g. authentication flow, user
                management,...) in their application codebase that can be stored
                in a shared repository so everyone can contribute to a stand
                alone repository outside their application codebase. I’ve
                outlined the contribution model as a part of the design system
                governance model that comes further down this document.
              </p>
            </div>
            <div>
              <h4>No Design System Knowledge Across the Organization</h4>
              <p>
                My client never had their own design system so there were no
                legacy system to work off of and everything had to be mapped out
                and developed from scratch. <br />
                <br />I conducted 6 workshop sessions to educate the team and
                management on the fundamentals of design systems and its
                benefits for better cross department alignment and also to build
                a common language among key stakeholders.
              </p>
            </div>
            <div>
              <h4>Multi-brand, Multi Platform, Multiple Modes and Languages</h4>
              <p>
                Goal was to develop a system that can cater to all of our
                product teams for Web and Android and iOS down the road. My
                approach was to build a tokenized design system that stores all
                design tokens in a tech and platform agnostic format such as
                json or yaml so we could use a design token integration tool
                like Salesforce’s Theo or Style dictionary in order to get
                different builds for different environments and truly have a
                SSOT (single source of truth) for our design tokens. Tokenizing
                the design system, also helped us with supporting multiple modes
                such as light mode, dark mode, high contrast mode and any other
                modes as required plus supporting basically any number of
                languages with their own particular specifications as any of the
                products would’ve required.
              </p>
            </div>
            <div>
              <h4>Modularity and Scalability</h4>
              <p>
                All solutions should have been implemented with scalability in
                mind for example our token architecture, naming and aliasing
                workflow should support changes in scale or when defining
                scales, it should be carefully implemented as in when to use a
                nominal, interval, ratio or ordinal scales. <br />
                <br />
                We decided to go for a modular design approach in terms of our
                solutions which had an impact on everything we were doing in our
                day to day design activities from building a simple component to
                more UX heavy artifacts and decisions like user flows and
                information architecture.
              </p>
            </div>
          </div>
          <div>
            <h3>Objectives</h3>
            <div>
              <h4>Being %100 on brand all the time across all products</h4>
              <p>
                This is only possible with a well documented and well maintained
                tokenized design system.
              </p>
            </div>
            <div>
              <h4>Speed up design and development process</h4>
              <p>
                With a proper design and development infrastructure in place,
                speed and quality of the production pipeline increases
                immensely. With a modular approach and a suitable team structure
                I tried to avert major bottlenecks. This means, product team can
                always maintain a continuous delivery without any delay times
                from design system side.
              </p>
            </div>
          </div>
          <div>
            <h3>Design System Concepts</h3>
            <p>
              As my client business and user base expanded and the future plans
              became more clear, we needed to have a structure so we could adapt
              to the market needs and rapid changes as well as being able to
              deliver a better and more consistent experience to our end users.
              In order to do this, we had no choice but to increase the quality
              and the efficiency of our production pipeline by having a closer
              look at our processes and the way we were getting things done.{" "}
              <br />
              <br />
              For some, it will just be a library of reusable components and
              styles (like a pattern library or a library of reusable UI
              elements). For others, there will be extensive detailed
              documentation of style guides containing rules for good and bad
              practices for building GUI (Graphical User Interface) often
              including code elements. <br />
              <br />
              The truth is that any design system, when you start working on it,
              is useful as much as it needs to be. When the needs change in the
              future, there is no problem with extending it, because a design
              system is never done. It’s a living organism that evolves as the
              product and the team working on it grow and expand their design
              principles.
            </p>
          </div>
          <div>
            <p>Building Blocks - How a design system differs from a UI kit</p>
            <img src={section_1_0_img} alt="ui_kit" />
            <p>
              A Component API is the props of a component. When we design APIs
              at the right level of flexibility we reduce refactors, encourage
              code reuse, and increase UI consistency.
            </p>
          </div>

          <div className={`${styles["component-table"]}`}>
            <div className={`${styles["head"]}`}>
              <h3>React component APIs</h3>
            </div>
            <div>
              <h4>Strict Props</h4>
              <p>
                Strict props involves well-defined props. They have input props
                for data, and use callbacks for output:
              </p>
              <pre>{`<Select 
options={[1, 2, 3]}
selectedOption={1}
onSelectedOptionChange={() => /* ... */}
/>`}</pre>
            </div>
            <div>
              <h4>Component Props</h4>
              <p>
                Component props involve a data structure which includes a
                component reference somewhere in that structure:
              </p>
              <pre>{`<Multiselect
options={[
{ title: 1, component: MyOptionComponent, text: "One" }
]}
/>`}</pre>
            </div>
            <div>
              <h4>Compound Components</h4>
              <p>
                Involves defining specific components to be used with a base
                component:
              </p>
              <pre>{`<Multiselect
selectedValues={[1, 2]}
onSelectedValuesChange={newValues => /* ... */}/>
<Option optionValue={1}>One</Option>
<Group header="The best numbers">
<Option optionValue={2}>Two</Option>
<Option optionValue={3}>Three</Option>
</Group>
</Multiselect>

The <Multiselect /> is the base component while the <Option /> and <Group /> components are the specific components`}</pre>
            </div>
          </div>
          <div>
            <h3>How do UI Kits and design systems differ?</h3>
            <p>
              If you want to create internal prototypes or purely visual
              designs, a UI kit is an ideal option. However, if you want
              something that works at a larger scale and works for both
              designers and developers, a design system is a must.
            </p>
            <div className={`${styles["component-table"]}`}>
              <div>
                <h4>Scale</h4>
                <p>
                  Working on a short term project? A UI kit is quick to set-up
                  and will likely work out well for you. After all, if
                  developers aren’t creating more than a few pages or a limited
                  app, the extra development work isn't outweighed by the
                  benefits of a design system. That said if you’re looking for
                  long term projects, or even a project you wish to adapt,
                  expand, or otherwise shape over time, a design system is
                  significantly better. The extra investment at the start will
                  come back in the form of rapid changes and a greater assurance
                  of consistency.
                </p>
              </div>
              <div>
                <h4>Multi-Purpose</h4>
                <p>
                  If you want to build across platforms and software, a design
                  system can do that. Its central components can be implemented
                  across apps, websites, and other materials - because there’s
                  only one copy of everything, there’s no need to replicate
                  code. <br />A UI kit, on the other hand, isn’t focused on
                  recalling UI assets with flawless perfection, so some manual
                  adjustments will always be needed.
                </p>
              </div>
              <div>
                <h4>Rapid changes</h4>
                <p>
                  With an already built and ready to use component library and
                  pattern library, you can craft UIs in the intended environment
                  pretty quickly and also changes will be applied centrally, so
                  you can have changes to all components kept in a different
                  repository and have them update and be propagated throughout
                  the product.
                </p>
              </div>
              <div>
                <h4>Rapid prototyping</h4>
                <p>
                  Want to put a visual prototype together quickly? A UI kit can
                  do this, as it’s created for taking visual rules and
                  templates, tweaking them slightly to fit new needs. <br />{" "}
                  That being said, design systems are also great for
                  prototyping. Because internal projects don’t want to spend too
                  much time on visuals, a design system recalls this code and
                  cuts down frontend development significantly.
                </p>
              </div>
              <div>
                <h4>Sources of Truth</h4>
                <p>
                  Both design systems and UI kits represent singular sources of
                  truth - however, only design systems ensure developers aren’t
                  able to make mistakes. UI kits require developers to manually
                  implement elements over and over again, which leads to minor
                  mistakes and inconsistencies. With a design system, they
                  simply recall existing elements, so there’s no room for such
                  errors.
                </p>
              </div>
              <div id={`${styles["human-resource-distro"]}`}>
                <h4>Human Resource Distribution</h4>
                <div>
                  <img src={section_1_1_img} alt="distro-1" />
                  <img src={section_1_2_img} alt="distro-2" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles["section-2-team-structure"]}`}>
          <h2>Team Structure</h2>
          <div>
            <p>Here are some common design system’s team structures:</p>
            <div id={`${styles["design-system-team-structures"]}`}>
              <div>
                <h4>Centralized</h4>
                <img src={section_2_0_img} alt="system-1" />
                <p>
                  A central delivery team, responsible for the direction and
                  growth of the system. As consumers scale the centralized team
                  must also scale. Consumers are essentially customers that have
                  a passive engagement with the design system.
                </p>
              </div>
              <div>
                <h4>Decentralized / Federated</h4>
                <img src={section_2_1_img} alt="system-2" />
                <p>
                  There is no central team. Every consumer team is responsible
                  for growing and shaping the system.
                </p>
              </div>
              <div>
                <h4>Hybrid</h4>
                <img src={section_2_2_img} alt="system-3" />
                <p>
                  The central team is lean and responsible for the direction.
                  Growth is pushed to the consumers, who drive the evolution of
                  the system.
                </p>
              </div>
            </div>
            <p>
              After thorough considerations, I made the decision to form a
              hybrid team structure for my client’s design system team based on
              the context of their organization. There are a lot of factors that
              come to play when it comes to strategic decisions like this and I
              had to take into account the resources, time constraints, budget
              and the roadmap of the design system. This approach helped us with
              the development of the foundational design system to be driven by
              a small contingent of enthusiasts. As the system developed and
              adoption grew, the core team took a strategic role in guiding
              evolution. Through contribution, consumers became the driving
              force for growth including product designers and developers from
              different product teams.
            </p>
          </div>
        </section>
        <section className={`${styles["section-3-multi-brand"]}`}>
          <div>
            <h2>Multi-Brand Design System</h2>
            <p>
              <em>
                “Your branding is like water. Let it soak your products. Let it
                flood your market. Let it bring life to your whole
                organization.”
              </em>
              <br />
              Louis Chenais, co-founder of Specify
            </p>
            <h4>Levers you can pull to adapt a multi-brand design system:</h4>
            <ol>
              <li>Typography</li>
              <li>Image art direction</li>
              <li>Tone of voice</li>
              <li>Animation</li>
              <li>Audio guidelines</li>
              <li>Content density</li>
              <li>Color system</li>
              <li>Iconography</li>
            </ol>
            <img src={section_3_0_img} alt="steps" />
          </div>
          <div>
            <h3>Design Tokens</h3>
            <p>
              Design tokens enable us to communicate and implement design
              decisions throughout the product on any platform from a central
              hub.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
