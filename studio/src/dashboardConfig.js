export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6082645528a9848e7d267dbd",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-qkyvshkm",
                  apiId: "db400e70-d1f9-4aff-9514-ce9a2b2769a6",
                },
                {
                  buildHookId: "608264551fa6ec892c4fad5f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-fr4srpoy",
                  apiId: "16b0da8d-0439-4ba9-942e-ecf06a144006",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/prakumar44/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-fr4srpoy.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
