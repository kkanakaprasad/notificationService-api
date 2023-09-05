const otpTemplate = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
    "{{kids.length}} kids:</p>" +
    "<ul>{{#kids}}<li>{{name}} is {{age}} </li>{{/kids}}</ul>" +
    "<h1>otp is {{otpCode}}</h1>";

const welcomeTemplate = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
    "{{kids.length}} kids:</p>" +
    "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";

const templates={
    otpTemplate:otpTemplate,
    welcomeTemplate:welcomeTemplate
}
module.exports = templates