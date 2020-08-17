package com.sauriengmientay.Service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ImageService {

	public String uploadFile(String uploadRootPath, MultipartFile file) {
		String filename = file.getOriginalFilename();
		filename= filename.replace("\\", "-");
		String[] parts=filename.split("-");
		if(parts.length>0) {
			filename=parts[parts.length-1];
		}
		try {
			if(filename.contains(System.getProperty("user.dir"))) {
				filename=filename.replace(System.getProperty("user.dir"),"");
			}
            InputStream fis = file.getInputStream();
            byte[] data = new byte[fis.available()];
            fis.read(data);

            FileOutputStream out = new FileOutputStream(new File(uploadRootPath + "/" + filename));

            out.write(data);
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("That bai");
        }

        System.out.println("Thanh cong : " + uploadRootPath + filename);

        return filename;
	}
}
