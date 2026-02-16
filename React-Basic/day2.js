

const ReactObj = {
    createElement: function (type, props, children) {
        return {
            type: type,
            props: {
                ...props.
                    children
            }
        }
    }
}

const reactelem = {
    type: "H1",
    props:
    {
        className: "H1",
        id: "H1",
        style: {
            background: "red",
            color: "#fff",
        },
        children: "Hello Word"
    }

}

const ReactDOM = {
    render: function (reactelem, root) {
        root.innerHTML = "";
        const elem = document.createElement(reactelem.type)
        const { props } = reactelem

        for (let key in props) {
            if (key === "style") {
                Object.assign(elem[key], props[key])
            }
            else if (key === "children") {
                elem.textContent = props[key]
            } else {
                elem[key] = props[key]
            }
        }

        root.append(elem)
    }

}
const elem1 = React.createElement("h1", { className: "H1", id: "H1", style: { background: "red", color: "#fff" } }, "Hello Word")
const root = document.getElementById("root")

ReactDOM.render(reactelem, root)