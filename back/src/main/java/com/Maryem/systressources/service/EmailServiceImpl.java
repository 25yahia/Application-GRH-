package com.Maryem.systressources.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.Maryem.systressources.entities.Mail;

@Service
public class EmailServiceImpl {
	@Autowired
	JavaMailSender emailsender;
	public void envoyermail(Mail mail) {
		SimpleMailMessage message= new SimpleMailMessage();
		message.setSubject(mail.getObjet());
		message.setFrom(mail.getDe());
		message.setTo(mail.getDestinataires());
		message.setText(mail.getContenue());
		emailsender.send(message);
		
	}

}
