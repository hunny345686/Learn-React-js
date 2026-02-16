// Way 1
const el = React.createElement("h1", { id: "Hello" }, "Hello dat")
const el2 = React.createElement("h1", { id: "Hello" }, React.createElement("p", { id: "p" }, React.createElement("h3", { id: "h3" }, "Hello H3")))

/* <div><h1>Hello</h1></div> (JSX )=>   
    Babel will convert to Javascript object =>
     ("div", { id: "Hello" }, ` div", { id: "Hello" },)  =>
    React Dom will convert it in acual HTML 
=> <div><h1>Hello</h1></div>(Actual HTML)
 */
// Way 2
const html = (<div>
    <h2>Hello H2</h2>
    <p>Hello p</p>
    <h2>Hello H2</h2>
    <h2>Hello H2</h2>
</div>);

// Con not use in this way we need a wrapper for this
// const html2 = (
//     <h2>Hello H2</h2>
//     <p>Hello p</p>
//     <h2>Hello H2</h2>
//     <h2>Hello H2</h2>
// );

// React Component  are Function which will return JSX 

function App(propes) {
    return (
        <div>
            <h2>Hello H2 {propes.name}</h2>
            <div>
                {propes.children}
            </div>
        </div>
    )
}

// react will convert propers in object
// {
//      name: "Prem"
// }
const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(app())
// root.render(App("Prem"))
root.render(<App name="Prem"><h2>Hello Children</h2></App>)