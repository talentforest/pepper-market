import twilio from 'twilio';
import client from '@/libs/server/client';
import smtpTransport from '@/libs/server/email';
import withHandler, { ResponseType } from '@/libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';

const myPhoneNum = process.env.MY_PHONE_NUM;
const msgSID = process.env.MESSAGING_SERVICE_SID;
const twilioSid = process.env.TWILIO_SID;
const twilioToken = process.env.TWILIO_TOKEN;
const twilioClient = twilio(twilioSid, twilioToken);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = `${Math.floor(100000 + Math.random() * 900000)}`;
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: 'Anonymous',
            ...user,
          },
        },
      },
    },
  });
  if (phone) {
    await twilioClient.messages.create({
      messagingServiceSid: msgSID,
      to: myPhoneNum!,
      body: `Hi! Your login token is ${payload}. from Pepper Market`,
    });
  }
  if (email) {
    const mailOptions = {
      from: process.env.MAIL_ID,
      to: process.env.MAIL_ID,
      subject: 'Pepper Market Authentication Email',
      text: `Your Authentication Code : ${payload}`,
    };
    await smtpTransport.sendMail(mailOptions, (error, responses) => {
      if (error) {
        console.log(error);
        return null;
      } else {
        console.log(responses);
        return null;
      }
    });
    smtpTransport.close();
  }
  return res.json({ ok: true });
}

export default withHandler('POST', handler);

// STEP 진행 순서

/* 
1. 유저가 핸드폰 번호를 전송하면 데베에서 유저 번호가 존재하는지 검사 
    -> 존재한다면 데베에서 정보를 가져온다.
    -> 없다면 계정을 만든다.
   ✅ complete
  ---------------------------------------------------------
2. 다음 유저에게 줄 토큰을 발급한다. 서버에서 토큰은 유저와 연결된다.
    -> prisma.schema 수정 Token model
   ✅ complete
  --------------------------------------------------------
3. 인증번호로 쓸 랜덤 숫자를 만든다. (Twillo 사용)
   ✅ complete
  ---------------------------------------------------------
4. 발급받은 토큰 숫자를 입력할 수 있는 화면을 만들고, 유저가 토큰을 발급받으면 입력해서 전송할 수 있게 만든다.
   ✅ complete
  ---------------------------------------------------------
5. 프론트엔드에서 전송했다면 백엔드에서 이 토큰과 연결된 유저 정보를 가져오고, 로그인을 시켜준다. 
    iron session
     -> 유저 정보를 가진 객체를 만들면 이 payload를 암호화한다. 
    그리고 이 암호화된 정보를 유저에게 쿠키로 전송한다.
    쿠키는 유저가 백엔드로 요청을 보낼 때마다 요청과 함께 전송된다.
    유저가 이 쿠키를 받으면 이 쿠키를 복호화하고 이 아이디가 맞는지 확인하는 것이다.
   ✅ complete
*/
