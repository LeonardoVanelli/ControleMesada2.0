import Mail from '../../lib/Mail';

class InvitationMail {
  get key() {
    return 'InvitationMail';
  }

  async handle({ data }) {
    const { email, family, provider, url } = data;

    await Mail.sendMail({
      to: `${email} <${email}>`,
      subject: `Convite família ${family.name}`,
      template: 'invitation',
      context: {
        family: family.name,
        provider: provider.name,
        url,
      },
    });
  }
}

export default new InvitationMail();
