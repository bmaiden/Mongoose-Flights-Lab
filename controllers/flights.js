const Flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    create
  };

  async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { flights });
  }

  function newFlight(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    res.render('flights/new', { errorMsg: '' });
  }

  async function create(req, res) {
    await Flight.create(req.body);
    console.log(req.body);
    res.redirect('flights/new');
  }
    