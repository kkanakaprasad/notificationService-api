const express = require("express");
const router = express.Router();
const { checkSchema } = require("express-validator");
const service = require("../services/emailNotification.service");
const requestResponsehelper = require("@baapcompany/core-api/helpers/requestResponse.helper");
const ValidationHelper = require("@baapcompany/core-api/helpers/validation.helper");
const templteService = require("../services/emailNotification.service");

router.post(
    "/",
    async (req, res, next) => {
        const serviceResponse = await templteService.sendMail(req.body,)
        requestResponsehelper.sendResponse(res, serviceResponse);
       
    }
);

router.delete("/:id", async (req, res) => {
    const serviceResponse = await service.deleteById(req.params.id);

    requestResponsehelper.sendResponse(res, serviceResponse);
});

router.put("/:id", async (req, res) => {
    const serviceResponse = await service.updateById(req.params.id, req.body);

    requestResponsehelper.sendResponse(res, serviceResponse);
});

router.get("/:id", async (req, res) => {
    const serviceResponse = await service.getById(req.params.id);

    requestResponsehelper.sendResponse(res, serviceResponse);
});

router.get("/all/templte", async (req, res) => {
    const serviceResponse = await service.getAllByCriteria({});

    requestResponsehelper.sendResponse(res, serviceResponse);
});

module.exports = router;
