const Flight = require('../models/flight')

module.exports = {
    index,
    show,
    new: newFlight,
    create
  };

  async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: 'All Flights', flights });
  }

  async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    // console.log(flight)
    res.render('flights/show', { title: 'Flight Detail', flight });
  }

  function newFlight(req, res) {
    // We'll want to be able to render an errorMsg if the create action fails
    res.render('flights/new', { title: 'Add Flight', errorMsg: '' });
  }

  async function create(req, res) {
    const flight = await Flight.create(req.body);
    console.log(req.body);

    res.redirect(`flights/${flight._id}`)

  // catch 
  //   res.redirect('flights/new')
  // };
  }
    