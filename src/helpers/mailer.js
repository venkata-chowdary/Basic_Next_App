import nodemailer from 'nodemailer'
import User from '@/models/User.model'
import bcrypt from 'bcryptjs'


export async function sendEmail({ email, emailType, userId }) {
    try {
        console.log(userId)
        const hashedToken = await bcrypt.hash(userId, 10)

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, { verifyToken: hashedToken, verifyTokenExpiry: new Date(Date.now() + 3600000) });
        }
        else if (emailType === "FORGOT") {
            await User.findByIdAndUpdate(userId, { forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: new Date.now() + 3600000 })
        }

        // Looking to send emails in production? Check out our Email API/SMTP product!
        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "7f19b899d18a60",
                pass: "113e49ad1a9a3e"
            }
        });

        console.log(hashedToken)

        const mailOptions = {
            from: "chowdaryimmanni@gmail.com",
            to: email,
            subject: emailType === "VERIFY" ? "verify email" : "reset password",
            html: `<p>Click 
            <a href=${process.env.DOMAIN}verifyemail?token=${hashedToken}>
            here to ${emailType === "VERIFY" ? "verify email" : "reset password"}</a>
            </p>`
        }

        const mailResponse = await transport.sendMail(mailOptions)
        console.log(mailResponse)
        return mailResponse
    } catch (err) {
        console.log(err)
        // throw new Error(err.message)
    }

}