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
import section_3_1_img from "../assets/Nikandish/section-3-1.png";
import section_3_2_img from "../assets/Nikandish/section-3-2.png";
import section_3_3_img from "../assets/Nikandish/section-3-3.png";
import section_3_4_img from "../assets/Nikandish/section-3-4.png";
import section_3_5_img from "../assets/Nikandish/section-3-5.png";
import section_3_6_img from "../assets/Nikandish/section-3-6.png";
import section_3_7_img from "../assets/Nikandish/section-3-7.png";
import section_3_8_img from "../assets/Nikandish/section-3-8.png";
import section_4_0_img from "../assets/Nikandish/section-4-0.png";
import section_4_1_img from "../assets/Nikandish/section-4-1.png";
import section_4_2_img from "../assets/Nikandish/section-4-2.png";
import section_4_3_img from "../assets/Nikandish/section-4-3.png";
import section_4_4_img from "../assets/Nikandish/section-4-4.png";
import section_4_5_img from "../assets/Nikandish/section-4-5.png";
import section_4_6_img from "../assets/Nikandish/section-4-6.png";

export default function NickandishPage() {
  scrollToHash();

  return (
    <div className={styles["nik-page"]}>
      <div className={styles["header-container"]}>
        <Header />
      </div>
      <main className={styles.main}>
        <section
          className={`${styles["nik-section"]} {styles["section-1-intro"]}`}
        >
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
              <pre>
                {`<Multiselect
selectedValues={[1, 2]}
onSelectedValuesChange={newValues => /* ... */}/>
<Option optionValue={1}>One</Option>
<Group header="The best numbers">
<Option optionValue={2}>Two</Option>
<Option optionValue={3}>Three</Option>
</Group>
</Multiselect>`}
              </pre>
              <p>{`The <Multiselect /> is the base component while the <Option /> and <Group /> components are the specific components`}</p>
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
        <section
          className={`${styles["nik-section"]} {styles["section-2-team-structure"]}`}
        >
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
        <section
          className={`${styles["nik-section"]} {styles["section-3-multi-brand"]}`}
        >
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
          <div className={`${styles["design-tokens-imgs-grid"]}`}>
            <h4>Problems Design Tokens Solve:</h4>
            <div>
              <div>
                <div>
                  <p>Consistency</p>
                  <img src={section_3_1_img} alt="Consistency" />
                </div>
                <div>
                  <p>Maintenance</p>
                  <img src={section_3_2_img} alt="Maintenance" />
                </div>
              </div>
              <div>
                <div>
                  <p>Logical Pairs</p>
                  <img src={section_3_3_img} alt="Logical Pairs" />
                </div>
                <div>
                  <p>Reducing QA Time</p>
                  <img src={section_3_4_img} alt="Reducing QA Time" />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles["design-tokens-imgs-grid"]}`}>
            <h4>Types of Design Tokens:</h4>
            <div>
              <div>
                <div>
                  <p>Choice / Reference Tokens</p>
                  <img src={section_3_5_img} alt="Choice / Reference Tokens" />
                </div>
                <div>
                  <p>Decision / System Tokens</p>
                  <img src={section_3_6_img} alt="Decision / System Tokens" />
                </div>
              </div>
              <div>
                <div>
                  <p>Component Tokens</p>
                  <img src={section_3_7_img} alt="Component Tokens" />
                </div>
              </div>
              <div>
                <img src={section_3_8_img} alt="Component Tokens" />
              </div>
            </div>
          </div>
        </section>
        <section
          className={`${styles["nik-section"]} {styles["section-4-road-map"]}`}
        >
          <h2>Design system roadmap</h2>
          <div>
            <p>
              I defined the roadmap for our design system early on and made it
              available to all key stakeholders to achieve a better clarity in
              terms of our communication within the organization. It also helped
              us with the alignment and direction of various departments and
              their efforts mainly design, product and engineering.
            </p>
            <img src={section_4_0_img} alt="roadmap" />
          </div>
        </section>
        <section
          className={`${styles["nik-section"]} {styles["section-5-style-guide"]}`}
        >
          <h2>Unified style guides</h2>
          <div>
            <p>
              First step in our design system journey was to define a style
              guide that could serve all products across the organization. I
              started with an in-depth analysis of successful and well adopted
              design systems of all different sizes and scales. Here is what I
              ended up with, in terms of our style guides.
              <br />
              <br />
              Later on, with the addition of the Figma variables support, we
              were able to easily add most of our design tokens inside our style
              guides files in Figma. Hopefully, with later Figma updates, we can
              migrate rest of our tokens such as typography tokens, elevations
              etc. into Figma as well.
            </p>
          </div>
          <a href="">Style Guides</a>
          <div>
            <img src={section_4_1_img} alt="Style Guides" />
          </div>
          <h4>EXAMPLE - TYPOGRAPHY DESIGN TOKENS</h4>
        </section>
        <section
          className={`${styles["nik-section"]} {styles["section-6-figma-structure"]}`}
        >
          <h2>Figma file structure</h2>
          <div>
            <p>
              One of the challenges I needed to resolve, was the Figma file
              structure. We needed a structure that could cater to all of our
              products and made sense to both designers and engineers.
            </p>
            <div id={`${styles["path-img-container"]}`}>
              <p>Each file includes these pages:</p>
              <img src={section_4_2_img} alt="path" />
            </div>
            <ul>
              <li>Cover: to easily navigate the files from project view</li>
              <li>
                Documentation: all documentation including research and findings
                would be here
              </li>
              <li>Playground: this is the place for designers to experiment</li>
              <li>
                Design Approval: this is where stakeholders review design
                outputs
              </li>
              <li>
                Production: designs in this page have been finalized and are
                production ready. ideally, this is what’s currently live.
              </li>
              <li>Preview: this page is useful for components’ preview</li>
              <li>Deprecated: all of our deprecated versions go here</li>
            </ul>
            <a href="">File Structure</a>
          </div>
        </section>
        <section
          className={`${styles["nik-section"]} {styles["section-7-Governance-model"]}`}
        >
          <h2>Governance and Contribution Model</h2>
          <div>
            <p>Design systems are products, not one-off projects. </p>
            <ul>
              <li>
                Governance is important, but design system team should focus on
                the success of product teams within their organizations.
              </li>
              <li>
                Contribution process should be simple, transparent, and
                collaborative, and document all communication.
              </li>
              <li>
                Designers and developers should work together on changes to the
                system, thus fostering a shared system language.
              </li>
              <li>Accessibility issues should be identified and documented.</li>
              <li>Proper task management and ticketing process</li>
              <li>
                Support and communication channels should be established for the
                entire organization
              </li>
            </ul>
          </div>
          <div className={`${styles["box"]} ${styles["box-bg-color-1"]}`}>
            <div>
              <h4>Why do we need governance model?</h4>
              <p>
                For a design system to thrive and scale within a larger product
                ecosystem, central system team members can’t make all the
                decisions, design all design, code all code. Instead, a system
                practice must model and foster a federated community, opening
                the door to contributions far and wide starting from within the
                organization and wider community later on.
              </p>
            </div>
            <div>
              <h4>Let’s define “contribution”</h4>
              <p>
                Contributions taking tangible form are obvious. Completing an
                annotated component design as “ready to code” is a contribution.
                Merging a code fix for a defect is a contribution. Authoring and
                publishing a Do/Don’t guideline is a contribution. All are
                measurable, tangible changes to move a system forward.
                <br />
                Yet, so many people frame softer activities as contributions
                too. Is offering verbal feedback during a design critique a
                “contribution?” Is influencing technical architecture a
                “contribution?” Is attending a meeting and nodding tacit
                agreement a “contribution?” These soft, unmeasurable examples
                are important. They lead to tangible change. However, they
                muddle conversations of contribution. We distinguish untraceable
                collaborative acts as participation, not contribution.
              </p>
            </div>
          </div>
          <div className={`${styles["box"]} ${styles["box-bg-color-2"]}`}>
            <h2>Components</h2>
            <div>
              <div>
                <h3>Definitions</h3>
                <div>
                  <h4>Design system component</h4>
                  <p>
                    Accordion! Button! Card! Dropdown! Table! Design system
                    components are shared, content-agnostic, and
                    context-agnostic built for maximal reuse. These are the
                    components you see in all the publicly-available design
                    systems in the wild.
                  </p>
                </div>
                <div>
                  <h4>Recipes</h4>
                  <p>
                    Recipe components are specific compositions of design system
                    components (for the most part) that are to be consistently
                    used across a product, but aren’t agnostic enough to live in
                    the design system. Some examples: ProductCard, ContactCard,
                    NameField (e.g. a collection of first name, middle initial,
                    last name, suffix), AddressField, and so on. These are
                    valuable, reusable components but may only apply to one
                    product. Recipes are often organisms in atomic design speak.
                  </p>
                </div>
                <div>
                  <h4>Snowflakes</h4>
                  <p>
                    “special snowflakes” are one-off components that are needed
                    to build a product, but don’t really get reused outside of
                    their first use case. When we worked with an airline, there
                    was a Seat component that only really made sense for the
                    “Select your seat” functionality on the website.
                  </p>
                </div>
                <img
                  id={styles["box-component-img"]}
                  src={section_4_3_img}
                  alt="components"
                />
              </div>
            </div>
          </div>
          <div className={`${styles["box"]} ${styles["box-bg-color-3"]}`}>
            <h2>Non-web implementations</h2>
            <p>
              iOS and Android mobile apps are certainly some of the more common
              non-web digital products, but there can be a vast array of other
              software interfaces floating around an organization. You may deal
              with airplane seat-back UIs, banking ATM UIs, kiosk UIs, medical
              equipment UIs, scientific equipment UIs, and more. All of these
              UIs come to life somehow, and the technologies that power these
              experiences vary widely (and often frighteningly!). Regardless of
              the specific tech employed for these experiences, the same
              guidance applies: create a dedicated repository for common
              UI-specific code, and deploy that code using some form of software
              registry.
            </p>
          </div>
          <div className={`${styles["box"]} ${styles["box-bg-color-2"]}`}>
            <h2>Introduction</h2>
            <div>
              <div>
                <div>
                  <h4>Welcome to NDS Component Library</h4>
                  <p>
                    Welcome to NDS component library, a place where we put our
                    designers and developers needs at the forefront. NDS
                    provides a unified design language for designers and
                    developers to form a common language in terms of components
                    name, design tokens, semantic versioning, component props
                    and foundational style guides. We understand the critical
                    role that product teams play in bringing our applications to
                    life, and our library is designed to make everyone’s job
                    easier and more efficient.
                  </p>
                </div>
                <h3>NDS Principles</h3>
                <div>
                  <h4>Favor Usability</h4>
                  <p>
                    Our primary focus is the end-user. We design and implement
                    with their satisfaction and mental model in mind. Every
                    component is created with the goal of making interactions
                    intuitive and delightful.
                  </p>
                </div>
                <div>
                  <h4>Consistency</h4>
                  <p>
                    Consistency is key to a harmonious user experience. We try
                    our best to maintain consistent and cohesive solutions,
                    standards, implementation, syntax, and more. This ensures
                    that products leveraging NDS look and feel coherent and
                    polished.
                  </p>
                </div>
                <div>
                  <h4>Clarity and Team Alignment</h4>
                  <p>
                    We believe that transparency and clear communication are
                    essential for effective collaboration. NDS is designed to
                    help teams align effortlessly and work seamlessly together.
                    Our component library promotes clear and open communication,
                    facilitating the best team alignment possible.
                  </p>
                </div>
                <div>
                  <h4>Always Improving</h4>
                  <p>
                    Design is an iterative journey, and there's always room for
                    improvement. We embrace criticism and encourage constructive
                    collaboration. With NDS, you're part of a community that's
                    dedicated to constant enhancement and growth.
                  </p>
                </div>
                <div>
                  <h4>Efficiency</h4>
                  <p>
                    NDS is rooted in the idea of reducing workloads and
                    minimizing duplicate efforts. We provide modular and
                    flexible solutions, with system thinking in mind at all
                    times, to help you work smarter, not harder.
                  </p>
                </div>
              </div>
            </div>
            <h2>Journey Starts Here</h2>
            <p>
              Whether you're a designer, developer, or product manager, the NDS
              Component Library is your go-to resource for creating excellent
              digital experiences. Dive in, explore NDS components, and let NDS
              be your partner in crime on your design and development journey.
            </p>
          </div>
          <div className={`${styles["box"]} ${styles["box-bg-color-2"]}`}>
            <h2>Contributing</h2>
            <div>
              <h4>Contributing to Design System Component Library</h4>
              <p>
                NDS Component Library is a collaborative project that is built
                on top of the contributions of designers and developers like
                you. We appreciate your interest in making NDS better. Whether
                you've discovered a bug, have a feature request, or want to
                contribute your skills to enhance our library, there are several
                ways to get involved:
              </p>
            </div>
            <img id={styles["contrib-img"]} src={section_4_4_img} alt="d/e" />
            <div className={styles["flex-row"]}>
              <div>
                <h4>Reporting Issues</h4>
                <div>
                  <p>
                    If you come across any issues, bugs, or unexpected behavior
                    while using NDS components, please let us know. By reporting
                    these issues, you help everyone maintain and improve the
                    quality of the component library. Best way to report these
                    issues is communicating via “NDS Support and Comms” on
                    Telegram or Zoho Cliq. Keep in mind the following when you
                    are writing the issues:
                  </p>
                  <ul>
                    <li>
                      Start your message with the word “Issue-Component”
                      followed by a colon “:”
                    </li>
                    <li>Then add your message directly after the colon</li>
                    <li>Be as specific as you can</li>
                    <li>
                      State the version of the component you are reporting is
                      it’s applicable
                    </li>
                    <li>Insert the link of the Figma file to your message</li>
                    <li>Avoid reporting what already has been reported</li>
                  </ul>
                  <p>
                    Here’s an example: Issue-Component: Trading Table v1.0.2 has
                    problems regarding the boolean prop that controls the filter
                    chips. Here’s the link of the master component: Figma file
                  </p>
                  <p>
                    NDS design team will regularly reviews and addresses issues,
                    and your input is invaluable in ensuring a seamless
                    experience for all users.
                  </p>
                </div>
              </div>
              <div>
                <h4>Reporting Issues</h4>
                <div>
                  <p>
                    If you come across any issues, bugs, or unexpected behavior
                    while using NDS components, please let us know. By reporting
                    these issues, you help everyone maintain and improve the
                    quality of the component library.
                  </p>
                  <ol>
                    <li>Go to our GitHub repository for NDS.</li>
                    <li>Click on the "Issues" tab.</li>
                    <li>
                      Create a new issue and provide as much detail as possible.
                      Be sure to include a clear title, description, and any
                      relevant screenshots or code samples.
                    </li>
                  </ol>
                  <p>
                    NDS engineering team will regularly reviews and addresses
                    issues, and your input is invaluable in ensuring a seamless
                    experience for all users.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles["box"]} ${styles["box-bg-color-3"]}`}>
            <h2>Component Library</h2>
            <div>
              <div>
                <h3>Governance Process</h3>
                <div>
                  <p>
                    Product teams’ primary concern is getting work out the door,
                    not to uphold the integrity of the design system. Teams get
                    creative and will find ways of getting things done, which
                    may involve hacking styles, creating a slew of one-off
                    components. This is why it is so incredibly important for
                    the makers of the design system to establish a crystal-clear
                    governance process that helps users understand what to do
                    when:
                  </p>
                  <ul>
                    <li>
                      They can’t find a component that does what they need
                    </li>
                    <li>
                      A design system component gets them 90% of the way there,
                      but not 100%
                    </li>
                    <li>
                      They have questions or concerns about the design system
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            id={styles["senarios"]}
            className={`${styles["box"]} ${styles["box-bg-color-2"]}`}
          >
            <div>
              <h4>
                Scenario 1: product teams use the design system to help design
                and build new work
              </h4>
              <p>
                Teams should default to using the design system’s components to
                help create new product work. The best case scenario is that a
                team comes to the library, finds the component they need and
                finds that it fulfills all their requirements. They plug in the
                component and carry on with more pressing matters. Hooray for
                best case scenarios!
              </p>
            </div>
            <div>
              <h4>
                Scenario 2: what happens when the design system’s components
                don’t exist or don’t fulfill requirements?
              </h4>
              <div>
                <p>
                  If the team comes to the design system and doesn’t find the
                  component they need, if an existing component doesn’t fulfill
                  all the requirements, or if they’re just not sure if the
                  system has what they need, the first step is for the product
                  team to reach out to the design system team via design system
                  support protocol which means they should contact DS group chat
                  on either Telegram or Zoho cliq. The teams will have a
                  conversation to better understand the issue, and then
                  determine whether or not new work needs to happen. Often the
                  design system team can help guide the product team to an
                  existing solution that meets the requirements. Cheers to
                  constructive conversation!
                </p>
                <img src={section_4_5_img} alt="s-2" />
                <img src={section_4_6_img} alt="arrow" />
              </div>
            </div>
          </div>
          <div className={styles["steps"]}></div>
        </section>
      </main>
    </div>
  );
}
