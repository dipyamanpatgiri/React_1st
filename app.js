 
//const heading = React.createElement("h1", { id: "heading" }, "Hello React!");
// its still cont converted to h1 tag
//console.log(heading)//its an object
//const root = ReactDOM.createRoot(document.getElementById("roots"));
//root.render(heading);// its convert to h1 tag, and put in roots,in html

//-----------------------------------------------------------------------------//

//how to create this div elements in react

/*
<div id="parent">
<div id="child">
<h1></h1>
</div>
</div>*/
const root = ReactDOM.createRoot(document.getElementById("roots"));
const parents = React.createElement("div", { id: "parent" },
               React.createElement("div", { id: "child" },
               //if u want to add more sublink of h1 ,like h2,h3..use []
               [React.createElement("h1",{},"im a hi tag"),
                React.createElement("h2",{},"hello im h2")]
            ));

root.render(parents);
//parents is not a html element,its a object of react element
//React.createElement is create an object
                 