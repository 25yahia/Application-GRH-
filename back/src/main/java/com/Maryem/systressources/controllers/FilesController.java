package com.Maryem.systressources.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import com.Maryem.systressources.entities.FileInfo;
import com.Maryem.systressources.repos.FileInfoRepository;
import com.Maryem.systressources.service.FileStorageService;

import Message.ResponseMessage;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FilesController {

    @Autowired
    private FileStorageService storageService;

    @Autowired
    private FileInfoRepository fileInfoRepository;

  /*  @GetMapping("/files/candidat/{idCandidat}") //rajaa hedhi w oskot
    public ResponseEntity<FileInfo> getFileForCandidat(@PathVariable Long idCandidat) {
        FileInfo fileInfo = fileInfoRepository.findByCandidat(idCandidat);
        if (fileInfo != null) {
            String url = MvcUriComponentsBuilder
                .fromMethodName(FilesController.class, "downloadFile", fileInfo.getName()).build().toString();
            return ResponseEntity.status(HttpStatus.OK).body(new FileInfo(fileInfo.getName(), url));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }*/
    @GetMapping("/files/candidat/{idCandidat}")
    public ResponseEntity<List<FileInfo>> getFilesForCandidat(@PathVariable Long idCandidat) {
        List<FileInfo> fileInfos = fileInfoRepository.findAllByCandidatId(idCandidat);
        if (!fileInfos.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body(fileInfos);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @GetMapping("/files/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> downloadFile(@PathVariable String filename) {
        Resource file = storageService.load(filename);
        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }

    @PostMapping("/upload")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file,
                                                      @RequestParam("candidat_id") Long candidatId) {
        try {
            storageService.save(file, candidatId);
            String message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            String message = "Could not upload the file: " + file.getOriginalFilename() + ". Error: " + e.getMessage();
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }
}
