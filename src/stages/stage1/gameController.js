let IgameController = {
    test: CreateGrid

}
function CreateGrid(client){
    let c = new fabric.Circle({
        radius: 30, fill: 'red', left: Math.random() * 200, top: Math.random() * 500
    })
    let r = new fabric.Rect({
        width: 50, height: 50, fill: 'green', left: Math.random() * 200, top: Math.random() * 500
    })

    client.getCanvas().add(c)
    client.getCanvas().add(r)
    let objects = client.getCanvas().getObjects()
    console.log(JSON.stringify(objects))
}
export default IgameController