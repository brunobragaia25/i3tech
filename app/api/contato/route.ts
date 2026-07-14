import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nome, email, celular, endereco, empresa, produto, mensagem } = body;

  if (!nome || !email || !mensagem) {
    return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "i3TECH Site <notificacoes@devzdesign.com.br>",
    to: ["comercial@i3tech.digital"],
    replyTo: email,
    subject: `Novo contato de ${nome} — ${produto || "Sem produto selecionado"}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0052e6;">Novo contato via site</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #555; width: 140px;"><strong>Nome</strong></td><td style="padding: 8px 0;">${nome}</td></tr>
          <tr><td style="padding: 8px 0; color: #555;"><strong>E-mail</strong></td><td style="padding: 8px 0;">${email}</td></tr>
          <tr><td style="padding: 8px 0; color: #555;"><strong>Celular</strong></td><td style="padding: 8px 0;">${celular || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #555;"><strong>Endereço</strong></td><td style="padding: 8px 0;">${endereco || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #555;"><strong>Empresa</strong></td><td style="padding: 8px 0;">${empresa || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #555;"><strong>Produto</strong></td><td style="padding: 8px 0;">${produto || "—"}</td></tr>
        </table>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
        <h3 style="color: #0052e6;">Mensagem</h3>
        <p style="white-space: pre-wrap; color: #333;">${mensagem}</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Erro ao enviar mensagem." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
