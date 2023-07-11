class ContactMailer < ApplicationMailer
    def send_email(contact)
      @contact = contact
      mail(to: 'jdmimporthouse@gmail.com', subject: 'New contact form submission')
    end
  end
  