const favs = []
let id = 0

module.exports = {
    fav: (req, res) => {
        console.log(req.body)
        const favorite = {...req.body}
        favs.push(favorite)
        id++
        res.status(200).json(favs)

    },
    getFav: (req, res) => {
        res.status(200).json(favs)
    },
    newSkin: (req, res) => {
        const {id} = req.params
        const {name} = req.body
        const index = favs.findIndex(el => el.id == id)
        favs[index].name = name
        res.status(200).send(favs)
    },
    delete: (req, res) => {
        const {id} = req.params 
        const index = favs.findIndex(el => el.id == id)
        favs.splice(index, 1)
        res.status(200).json(favs)
    }
}