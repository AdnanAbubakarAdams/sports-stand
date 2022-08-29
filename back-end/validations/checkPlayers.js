const validateUrl = (req, res, next) => {
    if (
        req.body.url.substring(0, 7) === "http://" || 
        req.body.url.substring(0, 8) === "https://"
    ) {
        console.log("to confirm url is checked")
        next();
    } else {
        res.status(400).json({ error: "url does not match 'http://' or 'https://' "})
    }
}




module.exports = { validateUrl}