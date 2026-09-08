export const ctsProjectData = {
  title: "Correspondence Tracking System (CTS)",
  subtitle: "Enterprise Correspondence & Document Workflow Mobile Platform",
  platform: ["Flutter", "Android", "iOS"],
  status: "Production",
  development: "Built from Scratch",
  role: "Senior Flutter Developer / Mobile Developer",
  scope: "End-to-End Mobile Application Development",
  clientDeployments: "18+",
  overview: "CTS is an enterprise Correspondence Tracking System designed to digitize and streamline correspondence, document management, approvals, signing, tracking, and organizational workflows across government and enterprise environments.\n\nI developed the Flutter mobile application from scratch for Android and iOS and have worked across the mobile application's development and production lifecycle.\n\nMy involvement includes mobile development, architecture, requirements discussions, client meetings, backend/API coordination, testing and UAT support, application releases, production troubleshooting, and ongoing support.\n\nThe platform supports multiple client deployments and configurations while maintaining a shared mobile application foundation.",
  myRole: "Responsible for end-to-end Flutter mobile development, including application architecture, feature implementation, REST API integration, Android/iOS delivery, client collaboration, UAT support, releases, and production troubleshooting.",
  engineeringChallenges: [
    {
      title: "MULTI-CLIENT DELIVERY",
      description: "Maintaining a shared mobile foundation while supporting client-specific configurations and deployment environments."
    },
    {
      title: "COMPLEX ENTERPRISE WORKFLOWS",
      description: "Handling correspondence states, permissions, signing, transfers, delegation, routing, and context-dependent actions."
    },
    {
      title: "BILINGUAL EXPERIENCE",
      description: "Supporting English and Arabic interfaces with RTL behavior throughout enterprise workflows."
    },
    {
      title: "CROSS-PLATFORM DELIVERY",
      description: "Maintaining consistent functionality across Android and iOS."
    },
    {
      title: "ENTERPRISE INTEGRATION",
      description: "Integrating the mobile application with REST APIs and CTS/DMS/IAM-related enterprise services."
    },
    {
      title: "SECURITY",
      description: "Supporting enterprise mobile security requirements, secure storage, session management, screen protection, network security configuration, and security assessment requirements."
    },
    {
      title: "PRODUCTION EVOLUTION",
      description: "Continuously introducing functionality while maintaining existing client deployments and production stability."
    }
  ],
  capabilities: [
    {
      category: "CORRESPONDENCE MANAGEMENT",
      items: ["Inbox", "Sent", "Archive", "Incoming correspondence", "Outgoing correspondence", "Internal correspondence", "Correspondence tracking", "Correspondence metadata"]
    },
    {
      category: "WORKFLOW & ACTIONS",
      items: ["Rules-based workflows", "Transfer", "Reply to Sender", "Sign and Transfer / Sign and Send", "E-Sign", "Handwritten Signature", "Approval-related workflows", "Status-dependent actions"]
    },
    {
      category: "DOCUMENT EXPERIENCE",
      items: ["Document Viewer", "Document Thumbnails", "Attachments", "Document Versions", "Download", "Print", "Zoom", "Fit Width", "Fit Height", "Notes", "Digital Notes", "Voice Notes"]
    },
    {
      category: "PRODUCTIVITY",
      items: ["Dashboard", "Correspondence statistics", "Filtering", "Search criteria", "Reports", "Report Export", "Delegation"]
    },
    {
      category: "DELEGATION",
      items: ["Create delegation", "Edit delegation", "Delete delegation", "Delegated Inbox", "Delegated Sent", "Delegated Archive", "Date-based delegation", "Can Sign permission", "Allow access to old correspondence", "Signature impersonation permissions where configured"]
    },
    {
      category: "PROFILE / ORGANIZATION",
      items: ["Structure switching", "Multiple organizational structures", "Profile management", "Barcode-based application configuration"]
    },
    {
      category: "LOCALIZATION",
      items: ["English", "Arabic", "RTL support", "Dynamic language switching"]
    },
    {
      category: "MOBILE PLATFORM",
      items: ["Android", "iOS", "Firebase", "Push Notifications", "Authentication", "Session Management", "REST API integration"]
    }
  ]
};

export const ctsScreenshots = [
  {
    image: "/images/cts/dashboard/dashboard_1.png",
    alt: "CTS Mobile Dashboard",
    category: "Dashboard",
    title: "Executive Dashboard",
    description: "Overview of correspondence workload and status metrics.",
    safeForPublic: true,
  },
  {
    image: "/images/cts/correspondence/inbox_1.png",
    alt: "CTS Inbox View",
    category: "Inbox",
    title: "Correspondence Inbox",
    description: "Task-oriented view of received correspondence and workflow status.",
    safeForPublic: true,
  },
  {
    image: "/images/cts/viewer/document_1.png",
    alt: "Document Viewer",
    category: "Document Viewer",
    title: "Document Viewer",
    description: "Integrated document viewing with enterprise document controls.",
    safeForPublic: true,
  },
  {
    image: "/images/cts/details/details_1.png",
    alt: "Correspondence Details",
    category: "Details",
    title: "Correspondence Details",
    description: "Structured metadata, sender/recipient information, and workflow context.",
    safeForPublic: true,
  },
  {
    image: "/images/cts/localization/arabic_1.png",
    alt: "Arabic Interface",
    category: "Localization",
    title: "Arabic RTL Interface",
    description: "Full Arabic localization with right-to-left interface support.",
    safeForPublic: true,
  }
];
