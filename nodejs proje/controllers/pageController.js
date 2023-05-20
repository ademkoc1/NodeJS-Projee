const getIndexPage = (req,res)=>{
    res.render('index')
}

const getAboutPage = (req,res)=>{
    res.render('about')
}

const getRegisterPage = (req,res)=>{
    res.render('register')
}

const getLoginPage = (req,res)=>{
    res.render('login')
}


const getLogout = (req, res) => {
    res.cookie('jwt', '', {
      maxAge: 1,
    });
    res.redirect('/');
  };

//   const getDashboardPage = async (req, res) => {
//     const photos = await Photo.find({ user: res.locals.user._id });
   
//     res.render('dashboard', {

//       photos,
    
//     });
//   };


export {getIndexPage,
    getAboutPage,
    getRegisterPage,
    getLoginPage,
    getLogout,
    }