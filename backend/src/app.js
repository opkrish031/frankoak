const express = require('express');
const adminPanelRouter = require('./routes/routes');

const appRouter = express.Router();

appRouter.use('/admin-panel',adminPanelRouter);

module.exports = appRouter