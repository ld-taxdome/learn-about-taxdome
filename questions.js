/* ==========================================================================
   TaxDome tour: content file
   Edit questions here; index.html never needs to change for content updates.

   Question types
     mc     Multiple choice.   options[], answer = index of the correct option
     tf     True / false.      answer = true | false
     ms     Select all.        options[], answer = [indices of correct options]
     match  Matching.          pairs = [[left, right], ...]  (left/right are the correct partners)
                               leftLabel / rightLabel = column headings
     seq    Ordering.          steps[] listed in the CORRECT order (shown shuffled)

   Options, pairs and steps are shuffled on screen, so the order here doesn't matter
   (except for `steps`, which defines the right order).
   The last question of every stage is a match or seq "stage challenge" worth 2x points.
   Sources are listed in README.md. Facts marked (refresh) can change: re-check them
   against taxdome.com/company-information before each new cohort.
   ========================================================================== */

window.TOUR = {
  version: "2026-09",

  stops: [
    { name: "Meet TaxDome", short: "Company",
      intro: "Start at the beginning: who we are and what we make.",
      takeaway: "TaxDome is a founder-led, cloud-based practice management platform for tax, bookkeeping and accounting firms. It is not tax preparation software." },
    { name: "Who we build for", short: "Customers",
      intro: "The firms we serve, the problems they have, and why one platform beats a patchwork.",
      takeaway: "Our best-fit customers are multi-person, full-service firms tired of juggling tools and doing manual work. The promise: one platform instead of many." },
    { name: "Clients and CRM", short: "CRM",
      intro: "Every firm starts with knowing its clients.",
      takeaway: "One client record ties together contacts, conversations, documents, billing and jobs. Enter it once and it works everywhere." },
    { name: "Documents", short: "Documents",
      intro: "Where tax season is won or lost: getting the right files, signed, in one safe place.",
      takeaway: "Documents flow in, get organized, signed and delivered in one secure system, with audit trails and virus scanning on every file." },
    { name: "Workflows", short: "Workflows",
      intro: "The heart of TaxDome, and the reason the job card in your header moves by itself.",
      takeaway: "Pipelines turn a firm’s process into stages. Automations and Automove keep jobs moving so people only handle what needs judgment." },
    { name: "Billing", short: "Billing",
      intro: "From “yes, we’ll do it” to “paid”.",
      takeaway: "Billing is connected to the work itself: proposals, invoices, time and payments live beside jobs and documents, so firms get paid faster with less chasing." },
    { name: "Team and clients", short: "Team",
      intro: "Two audiences, one platform: the people who run the firm and the clients they serve.",
      takeaway: "Managers get visibility and control. Clients get a branded portal and mobile app. Both sides of the relationship are our users." },
    { name: "Trust, AI and what’s next", short: "What’s next",
      intro: "Security first, AI where it helps, and what our teams have been shipping.",
      takeaway: "Security is foundational, AI targets tedious document work, and newer capabilities (Payments, Juno, Bookkeeping Hub, Kiosk) extend the platform." }
  ],

  questions: [

    /* ------------------------------------------------------------------ 1 · Meet TaxDome */
    { stop: 0, type: "mc",
      q: "Which description fits TaxDome best?",
      options: [
        "An all-in-one practice management platform for tax, bookkeeping and accounting firms",
        "Tax preparation software that completes and files returns for accounting clients",
        "A general-purpose cloud storage and file-sharing service for small businesses",
        "A payroll and benefits service that pays the employees of small businesses"
      ],
      answer: 0,
      why: "TaxDome helps a firm run its practice: CRM, documents, workflows, billing, team management and reporting in one place. It is not tax preparation software. Firms still prepare returns in tools like Drake or Lacerte, which TaxDome connects to. Getting this distinction right is the foundation for everything else in this quiz." },

    { stop: 0, type: "tf",
      q: "TaxDome is designed to replace the software that firms use to prepare tax returns.",
      answer: false,
      why: "Firms keep their tax preparation software and TaxDome connects to it. Integrations include Drake, Lacerte, ProConnect, ProSeries, CCH Axcess Tax, TaxAct and TaxSlayer. What TaxDome replaces is the patchwork around it: separate CRM, file storage, e-signature, invoicing and messaging tools." },

    { stop: 0, type: "mc",
      q: "How did TaxDome begin?",
      options: [
        "Brothers Victor and Ilya Radzinsky launched it in 2017, building on custom software they had made for a tax practice",
        "A venture-funded team of former Big Four partners launched it in 2012 to modernize audit work",
        "It was spun out of a legacy tax-software vendor in 2019 as a cloud version of its desktop product",
        "It began as a 2015 hackathon project at a cloud-storage company and was later spun off"
      ],
      answer: 0,
      why: "TaxDome launched in March 2017 from a Brooklyn coworking space, founded by brothers Victor (CEO) and Ilya Radzinsky. Years earlier they had built a custom system for a tax practice, which is why the product reflects how accounting firms actually work. The company describes itself as founder-led, headquartered in New York." },

    { stop: 0, type: "ms",
      q: "Which statements about TaxDome as a company are true? Select all that apply.",
      options: [
        "It is headquartered in New York",
        "It serves firms in more than 25 countries",
        "Its team works mostly remotely, spread across 40+ countries",
        "It sells one-time perpetual licenses",
        "It only serves solo practitioners"
      ],
      answer: [0, 1, 2],
      why: "TaxDome is a US company headquartered in New York with customers in 25+ countries, and a largely remote team of 400+ people across 40+ countries (refresh). It sells an annual per-seat subscription in three tiers (Essentials, Pro and Business) to firms from solo practitioners to 100+ staff, so neither the perpetual-license nor the solo-only statement holds." },

    { stop: 0, type: "match",
      q: "Match each term you’ll hear at TaxDome to what it means.",
      leftLabel: "Term", rightLabel: "What it means",
      pairs: [
        ["Practice management software", "Software that helps a firm run its whole practice: clients, documents, workflows and billing"],
        ["SaaS", "Software delivered online through a subscription, not bought once and installed"],
        ["B2B2C", "We sell to businesses (firms), and those firms’ own clients also use the product"],
        ["White-labeling", "Showing the firm’s brand to its clients instead of TaxDome’s"]
      ],
      why: "These four terms come up constantly. TaxDome is SaaS sold to firms (B2B), but the firms’ clients live in the portal and mobile app too, which is why the company calls it a B2B2C platform. White-labeling, from a branded login page and custom domain to a fully branded client app, is what makes the portal feel like the firm’s own." },

    /* ------------------------------------------------------------------ 2 · Who we build for */
    { stop: 1, type: "tf",
      q: "TaxDome’s ideal customer is a solo practitioner with no team.",
      answer: false,
      why: "TaxDome serves everyone from solo practitioners to firms with 100+ staff, but its ideal customer is a full-service accounting firm with a team of five or more. Those firms offer several services, have managers who need visibility, and feel the pain of multiple platforms, cost, low efficiency and manual work. That is where an all-in-one, automated platform pays off most." },

    { stop: 1, type: "mc",
      q: "Which set of separate tools can TaxDome typically replace for a firm?",
      options: [
        "CRM, cloud file storage, PDF editing, e-signatures, invoicing and client messaging",
        "Tax preparation software, payroll processing and the firm’s business bank account",
        "Only the firm’s email provider, calendar app and video-meeting tool",
        "Office hardware such as printers and scanners, plus the firm’s internet service"
      ],
      answer: 0,
      why: "All of the first list, and even a simple firm website, live inside one subscription. The tax preparation software stays; TaxDome connects to it. Fewer logins and fewer subscriptions is the core value story: saving money, and saving time by not switching between platforms." },

    { stop: 1, type: "ms",
      q: "Which pain points push firms toward an all-in-one platform like TaxDome? Select all that apply.",
      options: [
        "Data and work scattered across too many separate platforms",
        "Paying for a stack of separate subscriptions",
        "Hours lost to repetitive manual work",
        "Clients who prefer to communicate only by paper mail",
        "Regulations that forbid cloud software"
      ],
      answer: [0, 1, 2],
      why: "TaxDome’s positioning for its ideal customer names four pain points: multiple platforms, cost, low efficiency and manual work. Each maps to product value: a single platform, consolidated spend, and automation with bulk actions. The other two options are invented; nothing in TaxDome’s positioning is about paper mail or avoiding regulation." },

    { stop: 1, type: "mc",
      q: "In TaxDome’s internal training, features are grouped into six main areas. Which of these is NOT one of them?",
      options: [
        "Customer relationship management",
        "Billing",
        "Team management",
        "Tax preparation"
      ],
      answer: 3,
      why: "The six groups are Customer Relationship Management, Document Storage, Workflows, Billing, Team Management and Reporting. Tax preparation isn’t there because TaxDome is practice management software. On taxdome.com the same features are arranged under four product pillars (Firm management, Client management, Revenue operations and Client experience), which is just a different lens on the same platform." },

    { stop: 1, type: "seq",
      q: "After a firm first hears about TaxDome, put the rest of the customer journey in order.",
      steps: [
        "Books a demo",
        "Purchases",
        "Goes through onboarding",
        "Uses TaxDome day to day (utilization)",
        "Refers other firms"
      ],
      why: "The journey begins with outreach from the sales team or a firm simply hearing about TaxDome, then moves through demo, purchase, onboarding and everyday utilization. The final stage is the goal: firms that succeed with TaxDome tell other firms. Different teams touch different stages, but they all serve the same journey." },

    /* ------------------------------------------------------------------ 3 · Clients and CRM */
    { stop: 2, type: "mc",
      q: "In TaxDome’s CRM, what is the difference between an account and a contact?",
      options: [
        "An account is a client (a person, family or business); contacts are the people linked to it",
        "An account is a team member’s login; contacts are the email addresses clients use to sign in",
        "An account is a paid invoice; contacts are the individual payments recorded against it",
        "They are two names for the same thing, used differently depending on the plan"
      ],
      answer: 0,
      why: "A client account might be the Johnson Family, with three linked contacts. One contact can belong to several accounts, for example an owner and each of their businesses. A contact with an email address linked to an account is what gives that person access to the client portal." },

    { stop: 2, type: "ms",
      q: "Which channels can a firm use to talk with clients inside TaxDome? Select all that apply.",
      options: [
        "Secure chats",
        "Synced email",
        "Two-way SMS",
        "Instagram direct messages"
      ],
      answer: [0, 1, 2],
      why: "Global communication brings secure chats, email and SMS into one inbox, and every conversation is stored on the client’s record. Chats can carry attachments and client tasks, and files clients send land in their documents. Social media DMs are not part of the platform." },

    { stop: 2, type: "tf",
      q: "A firm can log in as a client to see exactly what that client sees in their portal.",
      answer: true,
      why: "The read-only “log in as account” view lets a team member follow a client’s steps, such as paying an invoice or downloading a document, from the client’s side. It’s invaluable for troubleshooting and a good example of a product designed for both sides of the relationship." },

    { stop: 2, type: "mc",
      q: "Why is TaxDome’s CRM more powerful than a standalone client database?",
      options: [
        "It connects to workflows, billing and documents, so client data is entered once and used everywhere",
        "It is the only tool that can store client names, emails and phone numbers securely",
        "It automatically scores clients and decides which ones a firm should keep",
        "It replaces the client portal, so clients no longer need to log in anywhere"
      ],
      answer: 0,
      why: "TaxDome’s CRM is one part of an integrated system: a client record holds contacts, notes, messages, documents, invoices and jobs together. That is why tags and filters can drive automation, and why firms stop switching between email, spreadsheets and a separate client database. It powers the client portal rather than replacing it." },

    { stop: 2, type: "seq",
      q: "A new client joins a firm. Put the onboarding steps in order.",
      steps: [
        "The client is imported or added to the CRM",
        "Tags, folders and team members are assigned to the account",
        "An engagement letter or welcome email goes out",
        "The client logs in to the secure portal",
        "Client and firm exchange messages and upload files"
      ],
      why: "This is the flow from the CRM overview: import or add the client, organize the account with tags, folder templates and assigned team members, send an engagement letter or welcome email, then let the client into the portal to message the firm and upload documents. A pipeline can automate much of it, which is where the next stages pick up." },

    /* ------------------------------------------------------------------ 4 · Documents */
    { stop: 3, type: "ms",
      q: "Which of these are true about e-signatures in TaxDome? Select all that apply.",
      options: [
        "They are legally binding, like a pen-and-paper signature",
        "A document can be sent to more than one person to sign",
        "Knowledge-based authentication (KBA) can be added, as required for IRS Form 8879",
        "Clients must print and scan the document to sign it"
      ],
      answer: [0, 1, 2],
      why: "E-signatures are built in, so firms don’t need a separate e-sign subscription. Firms can place signature fields for a taxpayer and spouse, set signing priority, turn on reminders and add KBA, which the IRS requires for Form 8879. Once signed, a document is final and can’t be altered." },

    { stop: 3, type: "mc",
      q: "What is an organizer in TaxDome?",
      options: [
        "An interactive questionnaire sent to a client to collect information and documents",
        "A folder template that sets up the same subfolders for every new client account",
        "A team calendar that tracks each client’s filing deadlines across the firm",
        "A report that summarizes a client’s invoices, payments and outstanding balance"
      ],
      answer: 0,
      why: "Organizers replace long email threads and PDF checklists: a firm builds a template once, sends it manually or through a pipeline automation, and clients answer online. Conditional logic hides irrelevant questions (only ask about a spouse if the client is married), answers can pre-fill next year, and a submitted organizer can even tag the account and move the job forward." },

    { stop: 3, type: "tf",
      q: "Every file uploaded to TaxDome, by the firm or by a client and on web or mobile, is automatically scanned for viruses and malware.",
      answer: true,
      why: "The same safety check applies no matter who uploads or how: the portal, desktop app, TaxDome Drive or the mobile app. It is one layer of a broader security story that includes encryption, role-based access and audit trails, the kind of detail that builds trust with firms handling sensitive tax data." },

    { stop: 3, type: "mc",
      q: "What does “locking a document to an invoice” do?",
      options: [
        "Clients see the document but can’t open it until they pay; it then unlocks automatically",
        "It permanently deletes the document from the client’s account once the invoice is paid",
        "It hides the document from the client and from every team member until year-end",
        "It attaches the invoice to the document and sends both to the IRS for review"
      ],
      answer: 0,
      why: "Locked documents encourage prompt payment without awkward reminders, and payment unlocks the file on its own. It’s a good example of TaxDome connecting features (documents, billing and the client portal) that are separate products elsewhere." },

    { stop: 3, type: "seq",
      q: "Follow a document through its life. Put the steps in order.",
      steps: [
        "The firm requests documents from the client",
        "The client uploads them through the portal or mobile app",
        "The team reviews and organizes the files (AI can rename and tag them)",
        "The firm sends the prepared documents for e-signature or approval",
        "The signed document is stored with a full audit trail"
      ],
      why: "Document management has three phases: intake (gathering), organization (checking, tagging, preparing) and delivery (signing, approval, storage). Centralizing all three means the whole chain happens inside TaxDome instead of across email, cloud storage and a separate e-sign tool." },

    /* ------------------------------------------------------------------ 5 · Workflows */
    { stop: 4, type: "mc",
      q: "How do pipelines, jobs and tasks relate to each other?",
      options: [
        "A pipeline is the set of stages for a service; a job is one client’s work moving through it; tasks are the actions inside",
        "A task is the set of stages for a service; a job is one client’s work inside it; pipelines are the actions in each stage",
        "A job is the set of stages for a service; a pipeline is one client’s work moving through it; tasks are the actions inside",
        "A pipeline is one client’s to-do list; a job is a single checkbox; tasks are the stages that jobs move through"
      ],
      answer: 0,
      why: "Think of a pipeline as the recipe for a service such as “1040 Tax Preparation” or “Monthly Bookkeeping”, with stages like Onboarding, Preparation and Review. Each client’s work becomes a job that sits in a stage and moves along; tasks are the specific actions (“prepare the return”, “review”) assigned to team members. Workflow is called the heart of TaxDome because everything else plugs into it." },

    { stop: 4, type: "tf",
      q: "Firms have to build every pipeline from scratch.",
      answer: false,
      why: "TaxDome provides a template library and a Marketplace, a bit like an app store for templates, where firms can copy pipelines, proposals, organizers and more created by TaxDome experts or by other firms, then customize them. Templates save a huge amount of setup time, which is why they matter so much when a new firm is getting started." },

    { stop: 4, type: "mc",
      q: "What does the Automove feature do?",
      options: [
        "Moves a job to the next stage automatically once everything required in the current stage is done",
        "Moves a client’s uploaded files into a different folder automatically every night",
        "Reassigns a job to another team member automatically when someone is out of office",
        "Moves a job back to the first stage whenever the client sends a new message"
      ],
      answer: 0,
      why: "If a stage contains a proposal, an invoice and a task, the job advances by itself once the client signs, the client pays and the task is completed. That removes manual dragging of cards and leaves people to handle only what needs their judgment. Automove is switched on per stage, in every stage except the last." },

    { stop: 4, type: "ms",
      q: "Which of these can a pipeline do automatically when a job enters a stage? Select all that apply.",
      options: [
        "Send a proposal or engagement letter for e-signature",
        "Create and send an invoice",
        "Send an organizer for the client to complete",
        "File the client’s tax return with the IRS"
      ],
      answer: [0, 1, 2],
      why: "Stage automations include sending proposals, invoices, organizers, emails, chats and client requests, creating tasks, applying folder templates, updating account tags, and changing who is assigned or has access. Filing returns isn’t one of them; that happens in the firm’s tax preparation software, which TaxDome connects to." },

    { stop: 4, type: "match",
      q: "Each stage automation has a “done” signal that triggers Automove. Match them.",
      leftLabel: "Automation in the stage", rightLabel: "What moves the job forward",
      pairs: [
        ["Send proposal", "The client signs it"],
        ["Create invoice", "The client pays it"],
        ["Create organizer", "The client submits it"],
        ["Create task", "A team member marks it complete"]
      ],
      why: "Each automation has a natural “done” signal: a signature, a payment, a submitted questionnaire or a completed task. A chat message only triggers Automove if it includes a client task that the client checks off. Once you know the signal, you can read any pipeline and predict how a job will move through it." },

    /* ------------------------------------------------------------------ 6 · Billing */
    { stop: 5, type: "tf",
      q: "With recurring invoices, a firm can bill a client automatically on a schedule once the client authorizes payment.",
      answer: true,
      why: "Recurring invoices suit repeat services like monthly bookkeeping: they are generated on a schedule, payment authorization is requested from the client, and payments are tracked automatically. Firms get predictable revenue, clients get a predictable experience, and nobody re-types the same invoice every month." },

    { stop: 5, type: "mc",
      q: "What is the job of proposals and engagement letters in TaxDome?",
      options: [
        "To set the scope and price of a service and get it e-signed, often triggering the next pipeline step",
        "To track how many hours each team member has worked on a client’s engagement this month",
        "To reconcile the firm’s bank accounts against its clients’ paid invoices",
        "To collect a client’s tax documents and organize them into folders"
      ],
      answer: 0,
      why: "A proposal sets expectations (what’s included, what it costs) and, once signed, can automatically move the job forward and trigger an invoice. Firms can itemize services and even offer up to three tiers per proposal, each with its own name, scope and price." },

    { stop: 5, type: "ms",
      q: "Which of these are part of TaxDome’s billing toolkit? Select all that apply.",
      options: [
        "One-time and recurring invoices",
        "Built-in time tracking that can be turned into invoices",
        "Automatic reminders for unpaid invoices",
        "Automatic preparation of the client’s tax return"
      ],
      answer: [0, 1, 2],
      why: "Billing in TaxDome covers invoices (one-time, recurring and scheduled), billable time entries, reminders, refunds and syncing with QuickBooks Online. Tax return preparation isn’t part of it; that remains the job of the firm’s tax software." },

    { stop: 5, type: "mc",
      q: "What does TaxDome Payments add to the platform?",
      options: [
        "Payment collection built into TaxDome and the client portal, tracked in real time",
        "A business bank account, opened through TaxDome, that holds the firm’s client funds",
        "Direct payment of clients’ tax bills to the IRS from inside the portal",
        "A marketplace where firms buy paid add-on features and pay for them monthly"
      ],
      answer: 0,
      why: "TaxDome Payments lets firms collect card and ACH payments (where available), offer installment plans, charge saved payment methods with authorization, issue refunds and monitor receivables, all inside the system where the work already happens. Firms have processed over $900 million in payments through TaxDome (as of 2025), so this is a big part of how we deliver value." },

    { stop: 5, type: "seq",
      q: "From proposal to paid: put the steps in order.",
      steps: [
        "The firm sends a proposal or engagement letter",
        "The client e-signs it",
        "The job moves on and an invoice is created and sent",
        "The client pays in the portal",
        "Documents that were locked to the invoice unlock"
      ],
      why: "This is the payoff of connected features: the signature triggers the invoice, the payment triggers the next stage, and the payment unlocks the deliverable. The firm sets it up once in a pipeline and then mostly watches it happen. Fewer manual steps means fewer forgotten invoices and faster cash flow." },

    /* ------------------------------------------------------------------ 7 · Team and clients */
    { stop: 6, type: "mc",
      q: "When a firm’s client logs in to their portal, whose brand do they see?",
      options: [
        "The firm’s own: logo, description and even a custom web address",
        "TaxDome’s logo and branding, shown on every client-facing screen",
        "A neutral, unbranded page that doesn’t show any logo at all",
        "The logo of whichever tax software the firm uses to prepare returns"
      ],
      answer: 0,
      why: "Firms can white-label the portal so clients see the firm’s logo, description, owner photo and custom domain; some go further with a fully branded iOS and Android client app, built and maintained by TaxDome. It matters because the client experience is the firm’s reputation, and TaxDome’s mission is software that accountants and their clients love." },

    { stop: 6, type: "ms",
      q: "Which of these help a firm’s leaders see how the firm is performing? Select all that apply.",
      options: [
        "Reports on pipelines and job progress",
        "Staff workload and time tracking",
        "Invoice, payment and accounts-receivable reports",
        "A live feed of every client’s bank balance"
      ],
      answer: [0, 1, 2],
      why: "Reporting is one of TaxDome’s six feature groups. Leaders can see where every job stands, who is overloaded, what has been billed and what is outstanding, and AI-powered reporting lets them ask questions about firm data. Client bank balances are not something TaxDome tracks." },

    { stop: 6, type: "mc",
      q: "Why does team management matter as a firm grows?",
      options: [
        "Owners and admins control who can access which client accounts, and assign the work",
        "It automatically recruits and schedules seasonal staff when tax season gets busy",
        "It sets each employee’s salary based on the hours they log in TaxDome",
        "It lets clients pick which staff member will work on their return"
      ],
      answer: 0,
      why: "Team members only see what they are assigned or given access to. Owners and admins can grant access by account, in bulk, or temporarily through a pipeline automation (handy for seasonal staff). Work can be assigned to people or to roles like “Tax Preparer”, and followers get notifications for accounts they care about." },

    { stop: 6, type: "tf",
      q: "TaxDome has one mobile app for clients and a separate mobile app for the firm’s own team.",
      answer: true,
      why: "The client app (rated 4.9 on the iOS App Store from 30,000+ reviews, refresh) lets clients upload, sign, message and pay. The firm app helps staff handle messages, contacts, notes and notifications on the go. Staff also have a desktop app and TaxDome Drive for uploading, printing and scanning documents." },

    { stop: 6, type: "match",
      q: "Different people use different doors into the same platform. Match each tool to what it does.",
      leftLabel: "Tool", rightLabel: "What it’s for",
      pairs: [
        ["Client portal and client mobile app", "Clients upload documents, sign, message the firm and pay"],
        ["Firm mobile app", "Team members handle client messages, contacts and notes on the go"],
        ["Desktop app and TaxDome Drive", "Staff upload, print and scan documents and keep client folders in sync"],
        ["Inbox+", "The team’s notification center for client and team activity"]
      ],
      why: "Clients get the portal and app; staff get the web app plus mobile, desktop and Drive; and Inbox+ pulls notifications into one place. Everything stays in sync because it is one system underneath, so what a client does in the app shows up instantly for the team." },

    /* ------------------------------------------------------------------ 8 · Trust, AI and what's next */
    { stop: 7, type: "tf",
      q: "TaxDome AI automatically prepares clients’ tax returns.",
      answer: false,
      why: "TaxDome AI renames and tags the documents clients upload, turning a pile of “IMG_2043.jpg” files into properly named, tagged documents so the team can start work immediately. Separately, AI-powered reporting lets leaders query firm data. Preparing returns stays with the firm’s tax software, which newer intake and delivery workflows connect to through the Juno integration." },

    { stop: 7, type: "mc",
      q: "What does SOC 2 Type II certification tell a firm about TaxDome?",
      options: [
        "Independent auditors confirmed that its security controls are well designed and work over time",
        "The IRS has approved it to e-file tax returns on behalf of its customers",
        "It passed a one-time review and can never suffer a software outage",
        "Its client mobile app has earned a 4.9-star rating from thousands of users"
      ],
      answer: 0,
      why: "SOC 2 is an AICPA auditing standard, and a Type II report checks not just how controls are designed but that they operate consistently over a period of time. It sits alongside other standards TaxDome lists (ISO 27001, PCI DSS, GLBA, HITRUST), plus encryption, two-factor authentication for staff and clients, role-based access and audit trails. For firms handling sensitive tax data, that trust is a buying criterion." },

    { stop: 7, type: "ms",
      q: "Which of these are recent additions to what TaxDome offers? Select all that apply.",
      options: [
        "An intake and delivery workflow that works with Juno for tax returns",
        "Bookkeeping Hub for managing recurring bookkeeping clients",
        "Global communication: SMS, secure chats and email in one inbox",
        "A built-in engine that prepares and e-files tax returns"
      ],
      answer: [0, 1, 2],
      why: "Summer 2025 brought end-to-end intake and delivery workflows, the Bookkeeping Hub and global communication. More recently TaxDome Payments and TaxDome Kiosk were released, and the Spring 2026 update added a redesigned Intake with AI. TaxDome does not prepare or e-file returns; the theme is connecting tax software, bookkeeping and communication inside one platform (refresh)." },

    { stop: 7, type: "mc",
      q: "What is the shared goal behind every team’s work at TaxDome?",
      options: [
        "Making software that accountants and their clients love to use",
        "Winning the longest feature checklist on every comparison chart",
        "Replacing accountants with AI",
        "Maximizing the number of paid add-ons per customer"
      ],
      answer: 0,
      why: "TaxDome states its mission as making software that accountants and their clients love to use, which covers both the firm and the firm’s client. Whether you work in engineering, support, finance, people or marketing, the work ultimately shows up as less manual effort, less stress and better experiences for firms and their clients." },

    { stop: 7, type: "match",
      q: "The whole tour in one question: match each firm problem to the TaxDome capability that solves it.",
      leftLabel: "Firm problem", rightLabel: "TaxDome capability",
      pairs: [
        ["Clients upload messy files named like IMG_2043", "TaxDome AI renames and tags documents"],
        ["Nobody is sure where each client’s work stands", "Pipelines and job tracking"],
        ["Staff keep chasing clients for signatures and payments", "Automated reminders and Automove"],
        ["Clients keep asking how to use the portal", "Client Care, where TaxDome answers platform questions (Business plan)"],
        ["A bookkeeping firm juggles dozens of monthly closes", "Bookkeeping Hub"]
      ],
      why: "Each capability exists because a firm has a real problem. AI tackles tedious document sorting, pipelines create visibility, reminders and Automove remove chasing, Client Care hands platform questions to TaxDome, and Bookkeeping Hub gives recurring-service firms one view. When you describe your own work, try starting with the problem it helps a firm solve." }
  ],

  links: [
    { label: "TaxDome company overview", url: "https://taxdome.com/company-information" },
    { label: "Product overview", url: "https://taxdome.com/overview" },
    { label: "Product updates", url: "https://taxdome.com/product-updates" },
    { label: "Help Center", url: "https://help.taxdome.com/" }
  ]
};
