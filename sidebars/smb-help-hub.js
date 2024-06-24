module.exports = [
//    {
//      type: "link",
//      href: "/",
//      label: "All Docs",
//      className: "back",
//    }, 
    {
        type: "doc",
        label: "Business Help Hub",
        id: "smb-help-hub/overview",
        className: "header",
    },
//    {
//      type: "doc",
//      label: "What is Codat?",
//      id: "smb-help-hub/codat/faq",
//      customProps: {
//        hr: true,
//      },
//    },
    {
      type: "category",
      label: "NetSuite",
      collapsed: true,
      customProps: {
        hr: true,
        section: "Software support",
      },
      items: [
              "smb-help-hub/integrations/netsuite/suitecloud",
              "smb-help-hub/integrations/netsuite/bundles",
            ],
    },
  ]