const router = require("express").Router()

const { getHome, getProfile } = require("../controllers")

router.route("/").get(getHome)
router.route("/profile").get(getProfile)

module.exports = router
