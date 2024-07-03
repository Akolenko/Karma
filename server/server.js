require("dotenv").config();
const express = require("express");
const serverConfig = require("./config/serverConfig");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router/index");
const http = require('http');
const { Server } = require('socket.io');

const authMiddleware = require("./middleware/auth-middleware");
//GET
const bidsRouter = require("./routes/views/bids.router");
const profileRouter = require("./routes/views/profile.bio.router");
const profileActiveBidsRouter = require("./routes/views/profile.active.bid.router");
const likeRouter = require("./routes/views/likes.router");
const responsesRouter = require("./routes/views/myResponses.router");
const profileProgressBidsRouter = require("./routes/views/profile.progress.bid.router");
const profileCompleteBidsRouter = require("./routes/views/profile.complete.bid.router");
const chatRouter = require("./routes/chat/chat.route");
const ordersRouter = require("./routes/views/profile.bio.order.router")
const namesRouter = require('./routes/views/names.bid.router')
//API
const bidApiRouter = require("./routes/API/bid.api.route");
const responseApiRouter = require("./routes/API/response.api.route");
const changeStatusBIdRouter = require("./routes/API/changeStatusBid.api.route");
const likeApiRouter = require("./routes/API/like.api.route");
const profileActiveBidsApiRouter = require("./routes/API/activeBid.api.route");
// const profileBidApiRouter = require("./routes/API/profile.bid.api.router")
const userEditProfileRouter = require("./routes/API/user.api.route");
const certificatesRouter = require("./routes/views/certificates.router");

const app = express();
const PORT = process.env.PORT || 3000;

serverConfig(app);
//GET
app.use("/api", bidsRouter, likeRouter, responsesRouter, chatRouter,namesRouter);
app.use("/api/profile", profileRouter);
app.use("/api/profile/bids/active", profileActiveBidsRouter);
app.use("/api/profile/bids/progress", profileProgressBidsRouter);
app.use("/api/profile/bids/complete", profileCompleteBidsRouter);
app.use("/api/profile/bio", ordersRouter)
//API
app.use("/api/profile", userEditProfileRouter);
app.use("/api", router);
app.use(
  "/api",
  bidApiRouter,
  responseApiRouter,
  changeStatusBIdRouter,
  likeApiRouter,
  profileActiveBidsApiRouter
);
app.use("/api/certificates", certificatesRouter);

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
