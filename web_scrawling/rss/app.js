const express = require("express")
const app = express()
const port = 3000

const Parser = require("rss-parser")
const parser = new Parser()


async function rss_reader() {

    let feed = await parser.parseURL("https://daily-dev-tips.com/sitemap.xml")
    console.log(feed.title)
    feed.items.forEach(item => {
        console.log(item.title)
    })


}
app.get('/', (req, res) => {

    rss_reader()
    res.send("This is skyler ")
})


app.post('/:keyword', (req, res) => {

})


app.listen(port, () => {
    console.log(`App is ready at http://localhost:${port}`)
})