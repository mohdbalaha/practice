function kebabize(str) {
    // return
return str.replace(/([A-Z])/g,'-$1')
}

console.log(kebabize('Stream3Arrow'));