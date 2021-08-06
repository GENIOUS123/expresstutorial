//Configuration
const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require("path");
const templatepath = path.join(__dirname,"./templates/views");
const templatepathpartials = path.join(__dirname, "./templates/views/partials");
app.set("view engine",hbs);
app.use(express.static(path.join(__dirname, 'public')));
app.set("views" , templatepath);
hbs.registerPartials(templatepathpartials);
// start router
app.get("/", (req , res)=>{
res.render("home.hbs",{header:"Home page Header"});
})
app.get("/about", (req , res)=>{
res.render("about.hbs",{header:"About page Header"});
})
app.get("/contact", (req , res)=>{
res.render("contact.hbs",{header:"Contact page Header"});
})

app.get("*", (req , res)=>{
res.render("404.hbs");
})
//end router


app.listen(3000)