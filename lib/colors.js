const colors = [
    {
        label: "green",
        hex: "#008000",
        get:() => {
            return `\x1b[32m`
        }
    },
    {
        label: "red",
        hex: "#ff0000",
        get:() => {
            return `\x1b[31m`
        }
    },
    {
        label: "yellow",
        hex: "#ffff00",
        get:() => {
            return `\x1b[33m`
        }
    },
    {
        label: "blue",
        hex: "#0000ff",
        get:() => {
            return `\x1b[34m`
        }
    },
    {
        label: "Magenta",
        hex: "#ff00ff",
        get: () => {
            return "\x1b[35m"
        }
    },
    {
        label: "Cyan",
        hex: "#00ffff",
        get: () => {
            return "\x1b[36m"
        } 
    }
]
module.exports = colors;