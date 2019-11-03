import Mail from '../../lib/Mail';

class InvitationMail {
  get key() {
    return 'InvitationMail';
  }

  async handle({ data }) {
    const { user, family, provider, url } = data;

    await Mail.sendMail({
      to: `${user.name} <${user.email}>`,
      subject: `Convite familia ${family.name}`,
      template: 'invitation',
      context: {
        family: family.name,
        user: user.name,
        provider: provider.name,
        url,
      },
    });
  }
}

export default new InvitationMail();
