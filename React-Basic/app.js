


const React = {
    createElement: function (tag, attributs, children) {

        const elem = document.createElement(tag)
        elem.textContent = children

        for (let attr in attributs) {
            if (attr === "style") {
                // elem.setAttribute(attr, { ...attributs.attr })
                Object.assign(elem.style, attributs[attr])
                // elem.style = { ...attributs.style }
            } else {
                // One Way to do it 
                // elem[attr] = attributs[attr]
                elem.setAttribute(attr, attributs[attr])
            }
        }
        return elem
    }
}


const elem1 = React.createElement("h1", { className: "H1", id: "H1", style: { background: "red", color: "#fff" } }, "Hello Word")

document.getElementById("root").append(elem1)