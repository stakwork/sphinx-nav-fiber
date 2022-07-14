function getFakeGraphData() {

    let data:any = {
        nodes: [],
        links:[]
    }
    
    for (let i = 0; i < 100; i++){
        data.nodes.push({
            color: "#a6cee3",
            id: i,
            index: i,
            name: "Search for something",
            text: "Search the universe",
            type: "podcast",
        })
    }

    data.nodes.forEach((n:any,i:number)=> {
        if (n > 0) {
            data.links.push({
                source: i - 1,
                target: i
              })
        }
    })

    return data
}

export { getFakeGraphData }