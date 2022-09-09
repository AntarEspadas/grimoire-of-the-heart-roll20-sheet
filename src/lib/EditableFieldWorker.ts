export function attachRepeatingListeners(...sections: string[]) {
    sections = sections.map(section => `clicked:repeating_${section}:editbutton`)
    on(sections.join(" "), (e) => {
        console.log(e)
        const sectionId = e.sourceAttribute?.replace("editbutton", "") as string
        const attr = sectionId + "editmode"
        toggle(attr)
    })
}

export function attachListeners(...sections: string[]) {
    sections = sections.map((section) => `clicked:${section}editbutton`)
    console.log("sections", sections)
    on(sections.join(" "), (e) => {
        const sourceAttribute = e.triggerName.replace("clicked:", "")
        const attr = sourceAttribute.replace("editbutton", "editmode") as string
        console.log(attr)
        // console.log(attr)
        toggle(attr)
    })
}

function toggle(attr: string) {
    getAttrs([attr], (attrs) => {
        let value = attrs[attr]
        value = value === "true" ? "false" : "true"
        console.log(value)
        setAttrs({ [attr]: value })
    })
}