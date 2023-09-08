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
        if (templateData.templateName === "registrationOtp") {
            var subject = "OTP For Registration Of Eduffirm"
            templates = templates.registrationOtp
            const otpCode = await this.generateOTP()
            templateData.otpCode = otpCode
        }
        else if (templateData.templateName === "ForgotOtp") {
            var subject = `OTP For Reset Password`
            templates = templates.ForgotOtp
            const otpCode = await this.generateOTP()
            templateData.otpCode = otpCode
        }
        else if (templateData.templateName === "tutorRejectsStudent") {
            var subject = `Decline Mail From Tutor`
            templates = templates.tutorRejectsStudent
        }
        else if (templateData.templateName === "invitationTemplate") {
            var subject = `Invitation From Eduffirm`
            templates = templates.invitationTemplate
        }
        else if (templateData.templateName === "paymentAlert") {
            var subject = `Payment Related Information From Eduffirm`
            templates = templates.paymentAlert
        }
        else if (templateData.templateName === "bookingAlert") {
            var subject = `Booking Releted Alert From Eduffirm`
            templates = templates.bookingAlert
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
        }


        return this.execute(async () => {
            const sendGridResponse = await sgMail.send(emailRequest)
            return sendGridResponse;
        })
    }
}

module.exports = new TemplteService(TemplteModel, 'templte');

