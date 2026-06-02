const routes = [
  { path: "/", content: "content for home page", needsLogin: false },
  { path: "/dashboard", content: "content for dashboard", needsLogin: true },
  { path: "/messages", content: "content for messages", needsLogin: true }
];

const request = "/dashboard";
const isLoggedIn = true;

for (let i = 0; i < routes.length; i++) {
    if (routes[i].path === request) {

        if (routes[i].needsLogin && !isLoggedIn) {
            console.log("საჭიროა ავტორიზაცია");
        } else {
            console.log("გადავდივართ:", routes[i].path);
            console.log(routes[i].content);
        }

    }
}