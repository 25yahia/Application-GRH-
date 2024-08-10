package com.Maryem.systressources.service;


import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.Maryem.systressources.entities.Image;
import com.Maryem.systressources.repos.UtilisateurRepository;
import com.Maryem.systressources.repos.imageRepository;

import jakarta.transaction.Transactional;
@Transactional
@Service
public class ImageServiceImpl implements ImageService {
	@Autowired
	private imageRepository imagerepository;

	@Override
	public Image uplaodImage(MultipartFile file) throws IOException {
		
		return imagerepository.save(Image.builder().name(file.getOriginalFilename()).type(file.getContentType())
				.images(file.getBytes()).build());
	}
	
	@Override
	public Image getImageDetails(Long id) throws IOException {
		final Optional<Image> dbImage = imagerepository.findById(id);
		return Image.builder().idImage(dbImage.get().getIdImage()).name(dbImage.get().getName())
				.type(dbImage.get().getType()).images(dbImage.get().getImages()).build();
	}
	@Override
	public ResponseEntity<byte[]> getImage(Long id) throws IOException {
		final Optional<Image> dbImage = imagerepository.findById(id);
		return ResponseEntity.ok().contentType(MediaType.valueOf(dbImage.get().getType()))
				.body(dbImage.get().getImages());
	}
	@Override
	public void deleteImage(Long id) {
		imagerepository.deleteById(id);
	}


}
