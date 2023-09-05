const TemplteModel = require("../schema/emailNotification.schema");
const BaseService = require("@baapcompany/core-api/services/base.service");
const Handlebars = require("handlebars");
let templates = require("../notificationTemplates/template")
const sgMail = require("@sendgrid/mail");
const ApiKey = "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"
sgMail.setApiKey(ApiKey);

class TemplteService extends BaseService {
    constructor(dbModel, entityName) {
        super(dbModel, entityName);
    }

    generateOTP() {
        const length = 6;
        const charset = "0123456789";
        let otp = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            otp += charset[randomIndex];
        }
        return otp;
    }

    async sendMail(templateData) {
        if (templateData.templateName === "otpTemplate") {
            var subject = "OTP For Registration Of Eduffirm"
            templates = templates.otpTemplate
            const otpCode = await this.generateOTP()
            templateData.otpCode = otpCode
        }
        else if(templateData.templateName === "welcomeTemplate"){
            var subject = "Welcome Message From Eduffirm"
            templates = templates.welcomeTemplate
        }
        const template = await Handlebars.compile(templates)

        const html = await template(templateData)

        const emailRequest = {
            to: templateData.to,
            from: {
                name: 'villageTech',
                email: 'prasad.consultant@axivise.in'
            },
            subject: subject,
            html: html,
            text: 'Hello this is text'
        }


        return this.execute(async () => {
            const sendGridResponse = await sgMail.send(emailRequest)
            return sendGridResponse;
        })
    }
}

module.exports = new TemplteService(TemplteModel, 'templte');

