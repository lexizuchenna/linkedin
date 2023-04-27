module.exports = {
    getHome: async (req, res) => {
        return res.render("home")
    },
    getProfile: async (req, res) => {
        return res.render("profile")
    }
}