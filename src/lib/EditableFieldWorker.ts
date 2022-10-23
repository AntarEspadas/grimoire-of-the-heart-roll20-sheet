export function attachRepeatingListeners(...sections: string[]) {
    sections = sections.map(section => `clicked:repeating_${section}:editbutton`)
    on(sections.join(" "), (e) => {
        const sectionId = e.sourceAttribute?.replace("editbutton", "") as string
        const attr = sectionId + "editmode"
        toggle(attr)
    })
}

export function attachListeners(...sections: string[]) {
    sections = sections.map((section) => `clicked:${section}editbutton`)
    on(sections.join(" "), (e) => {
        const sourceAttribute = e.triggerName.replace("clicked:", "")
        const attr = sourceAttribute.replace("editbutton", "editmode") as string
        toggle(attr)
    })
}

function toggle(attr: string) {
    getAttrs([attr], (attrs) => {
        let value = attrs[attr]
        value = value === "true" ? "false" : "true"
        setAttrs({ [attr]: value })
    })
}