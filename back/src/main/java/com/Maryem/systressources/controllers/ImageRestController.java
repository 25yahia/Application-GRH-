package com.Maryem.systressources.controllers;



import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.Maryem.systressources.entities.Employe;
import com.Maryem.systressources.entities.Image;
import com.Maryem.systressources.entities.Utilisateur;
import com.Maryem.systressources.service.EmployeService;
import com.Maryem.systressources.service.ImageService;
import com.Maryem.systressources.service.UtilisateurService;

@RestController
@RequestMapping("/api/image")
@CrossOrigin(origins = "*")
public class ImageRestController {
	@Autowired
	private ImageService imageService;
	
	@Autowired
	private EmployeService employeService;
	
	
	 @RequestMapping(value = "/upload" , method = RequestMethod.POST)
	 public Image uploadImage(@RequestParam("image")MultipartFile file) throws IOException {
		 	return imageService.uplaodImage(file);
	 }
	/* @RequestMapping(value = "/getImagesProd/{idProd}" , method = RequestMethod.GET)
	 public List<Image> getImagesProd(@PathVariable("idProd") Long idProd) 
			 throws IOException {
		 return imageService.getImageParProd(idProd);
	 }*/
	 @RequestMapping(value = "/get/info/{id}" , method = RequestMethod.GET)
	 public Image getImageDetails(@PathVariable("id") Long id) throws IOException {
	 return imageService.getImageDetails(id) ;
	 }
	 
	 @RequestMapping(value = "/load/{id}" , method = RequestMethod.GET)
	 public ResponseEntity<byte[]> getImage(@PathVariable("id") Long id) throws IOException 
	{
	 return imageService.getImage(id);
	 }
	 @RequestMapping(value = "/delete/{id}" , method = RequestMethod.DELETE)
	 public void deleteImage(@PathVariable("id") Long id){
	 imageService.deleteImage(id);
	 }
	 
	 @RequestMapping(value="/update",method = RequestMethod.PUT)
	 public Image UpdateImage(@RequestParam("image")MultipartFile file) throws IOException {
	 return imageService.uplaodImage(file);
	 }
	 
	 
	 
	 @RequestMapping(value = "/uploadFS/{id}" , method = RequestMethod.POST)
	 public void uploadImageFS(@RequestParam("image") MultipartFile
	file,@PathVariable("id") Long id) throws IOException {
		 Employe e = employeService.findByIdEmpl(id).get();
;	 e.setImagePath(id+".jpg");

	Files.write(Paths.get(System.getProperty("custom.images.path", "C:\\Users\\USER\\OneDrive\\Bureau")+"/image/"+e.getImagePath())
	, file.getBytes());
	employeService.saveEmploye(e);

	 }
	
	 
	 
	 @RequestMapping(value = "/loadfromFS/{id}" ,
	  method = RequestMethod.GET,
		produces = MediaType.IMAGE_JPEG_VALUE)
			 public byte[] getImageFS(@PathVariable("id") Long id) throws IOException {

		 Employe e = employeService.findByIdEmpl(id).get();
			 return Files.readAllBytes(Paths.get(System.getProperty("custom.images.path", "C:\\Users\\USER\\OneDrive\\Bureau")+"/image/"+e.getImagePath()));
			 }

}
