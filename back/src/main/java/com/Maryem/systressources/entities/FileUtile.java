package com.Maryem.systressources.entities;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

public class FileUtile {
	public static byte[]convertMultipartFileToByteArray(MultipartFile file) throws IOException{
		return file.getBytes();

}
}
