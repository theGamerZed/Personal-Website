import sitemap from "/static/sitemap-1.xml?raw";
export async function get() {
  try {
    const data = sitemap;
    return {
      headers: {
        "Content-Type": "application/xml",
      },
      body: data,
    };
  } catch (e) {
    return {
      body: "Error",
    };
  }
}
