const featuresController = require('../controllers').features;
const featureItemsController = require('../controllers').featureItems;

module.exports = (app) => {
  // logger function to debug through middleware
  var myLogger = function (req, res, next) {
    console.log(req.body)
    console.log('LOGGED')
    next()
  }
  // run logger every time a middleware is called
  // app.use(myLogger)
  // Save one feature title and the deadline to the database
  app.post('/api/features', featuresController.create);

  // Return all of the features currently in the database along with the feature list
  app.get('/api/features', featuresController.list);

  // Add a Feature List Item to the inputted feature ID
  app.post('/api/features/:featureId/items', featureItemsController.create);

  // get list of all featureItems associated with a feature
  app.get('/api/features/:featureId/items', featureItemsController.list);

  // Find a single feature based on ID
  app.get('/api/features/:featureId', featuresController.retrieve);

  // Update a single feature and return the (number completed/total)
  app.put('/api/features/:featureId', featuresController.update);

  // Delete a single feature
  app.delete('/api/features/:featureId', featuresController.destroy);

  // Delete a single feature list items
  app.delete('/api/features/:featureId/items/:featureItemId', featureItemsController.destroy);

  // Update a single feature list items
  app.put('/api/features/:featureId/items/:featureItemId', featureItemsController.update);
};
