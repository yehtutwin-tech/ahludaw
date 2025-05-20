import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASSWORD;
// const emailTo = process.env.EMAIL_TO || '';
// to: [emailTo, info.to],
const emailSignature = process.env.EMAIL_SIGNATURE;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});

type Info = {
  to: string;
  subject: string;
  text: string;
}

export async function mailSend(info: Info) {
  await transporter.sendMail({
    from: `iorCareer <${email}>`,
    to: [info.to],
    subject: `iorCareer - ${info.subject}`,
    html: `
      <div>
        <div>မင်္ဂလာပါရှင့်။</div>
        <br>
        <div><b>iorCareer</b> ရဲ့ <b>${info.text}</b> မှ လူကြီးမင်းပေးပို့သောအချက်အလက်များကို လက်ခံရရှိပါတယ်ရှင်။</div>
        <br>
        <br>
        <div>ကျေးဇူးတင်စွာဖြင့်၊</div>
        <br>
        <img src="${emailSignature}" width="70">
      <div>
    `,
  });
}
