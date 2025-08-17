module.exports = function cafeOnly(req, res, next) {
    if (!req.user)
        return res.status(401).json({ message: 'Not Authorized' })

    if (req.user.role !== 'cafe')
        return res.status(403).json({ message: 'Access Denied' })
    next()
}

module.exports = function userOnly(req, res, next) {
    if (!req.user)
        return res.status(401).json({ message: 'Not Authorized' })
    
    if (req.user.role !== 'user')
        return res.status(403).json({ message: 'Access Denied' })
    next()
}
