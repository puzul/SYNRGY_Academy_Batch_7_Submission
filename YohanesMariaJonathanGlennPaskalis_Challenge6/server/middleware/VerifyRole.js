const verifySuperadmin = (req, res, next) => {
  if (req.role==='superadmin') next(); 
  else return res.sendStatus(403);
}

const verifyAdmin = (req, res, next) => {
  if (req.role==='superadmin' || req.role==='admin') next();
  else return res.sendStatus(403);
} 

module.exports = { verifySuperadmin, verifyAdmin }