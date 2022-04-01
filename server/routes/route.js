const express = require("express");
const app = express();

const router = express.Router();
const {getOrders,getOrderDetails} = require("../controller/index");
router.get("/getorders/:status", getOrders);
router.get("/getorderdetails/:project_name", getOrderDetails);

module.exports = router;