class ContactsController < ApplicationController
    def create
      contact = Contact.new(contact_params)
  
      if contact.save
        # Send email without using a mailer
        send_email(contact)
  
        render json: { message: 'Email sent successfully' }, status: :ok
      else
        render json: { error: 'Failed to save contact' }, status: :unprocessable_entity
      end
    end
  
    private
  
    def contact_params
      params.require(:contact).permit(:name, :email, :phone, :message)
    end
  
    def send_email(contact)
      # Define the email content
      email_content = <<~CONTENT
        New Contact Form Submission
  
        Name: #{contact.name}
        Email: #{contact.email}
        Phone: #{contact.phone}
        Message: #{contact.message}
      CONTENT
  
      # Send the email
      # Replace 'your-email@example.com' with the actual recipient email address
      ActionMailer::Base.mail(to: 'jdmimporthouse@gmail.com', subject: 'New Contact Form Submission', body: email_content).deliver_now
    end
  end
  