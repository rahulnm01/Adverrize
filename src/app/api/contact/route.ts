import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, website } = body;

        // ✅ SEND EMAIL
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "adverrize@gmail.com", // your email
            subject: "🚀 New Lead from Adverrize",
            html: `
        <h2>New Lead Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
      `,
        });

        console.log("Email sent successfully");

        // ✅ SEND DATA TO GOOGLE SHEET
        await fetch("https://script.google.com/macros/s/AKfycbziGSiFKYZJuSkq2S4hDc3p-lMDMH0kKqkIMifgPX2R8ZDWzFDpqsPvHy6rjIebWMXF/exec", {
            method: "POST",
            body: JSON.stringify({
                name,
                email,
                website,
            }),
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}


