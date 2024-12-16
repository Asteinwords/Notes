exports.homepage = async (req, res) => {
    const locals = {
     'title':"Notes",
     "description":"Notes using backend"
    }
    res.render('index', {
      locals,
      layout: '../views/layouts/front-page'
    });
  }
exports.about=async(req,res)=>{
    const locals = {
       'title':"Notes",
        "description":"Notes using backend"
      }
      res.render('about',locals)
}  