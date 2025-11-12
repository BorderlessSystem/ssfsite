import { Resend } from 'resend';
import { ENV } from './env';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactNotification(data: {
  name: string;
  email: string;
  phone: string;
  ownerEmail?: string;
}) {
  try {
    const result = await resend.emails.send({
      from: 'noreply@sistemasemfronteira.com.br',
      to: data.ownerEmail || 'contato@sistemasemfronteira.com.br',
      subject: `Novo Contato Recebido - ${data.name}`,
      html: `
        <h2>Novo Contato Recebido</h2>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Telefone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          Este é um email automático do Sistema Sem Fronteira. Por favor, não responda este email.
        </p>
      `,
    });

    if (result.error) {
      console.error('[Email] Erro ao enviar notificação de contato:', result.error);
      return false;
    }

    console.log('[Email] Notificação de contato enviada com sucesso');
    return true;
  } catch (error) {
    console.error('[Email] Erro ao enviar email de contato:', error);
    return false;
  }
}

export async function sendJobApplicationNotification(data: {
  name: string;
  email: string;
  phone: string;
  resumeUrl: string;
  ownerEmail?: string;
}) {
  try {
    const result = await resend.emails.send({
      from: 'noreply@sistemasemfronteira.com.br',
      to: data.ownerEmail || 'contato@sistemasemfronteira.com.br',
      subject: `Nova Candidatura Recebida - ${data.name}`,
      html: `
        <h2>Nova Candidatura Recebida</h2>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Telefone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
        <p><strong>Currículo:</strong> <a href="${data.resumeUrl}" target="_blank">Baixar Currículo</a></p>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          Este é um email automático do Sistema Sem Fronteira. Por favor, não responda este email.
        </p>
      `,
    });

    if (result.error) {
      console.error('[Email] Erro ao enviar notificação de candidatura:', result.error);
      return false;
    }

    console.log('[Email] Notificação de candidatura enviada com sucesso');
    return true;
  } catch (error) {
    console.error('[Email] Erro ao enviar email de candidatura:', error);
    return false;
  }
}
