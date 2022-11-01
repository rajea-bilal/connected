
const Quote = require("../models/Quote");

module.exports = {

    getQuote: async (req, res) => {
        console.log(req.body)
        try {
          const quote = await Quote.find({ user: req.user.id });
          res.render("quote.ejs", { quote: quote, user: req.user });
        } catch (err) {
          console.log(err);
        }
      },
    
    createQuote: async (req, res) => {
        console.log(req.body)
        try {
          
            await Quote.create({ 
              title: req.body.title, 
              quote: req.body.quote,
              likes: 0,
              user: req.user.id,
              userName: req.user.userName,
              
            })
            console.log("Quote has been added")
            res.redirect(`/quote`)
        }
        catch (err) {
            console.log(err);
        }
      },


};
