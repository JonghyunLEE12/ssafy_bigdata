package com.ssafy.nopo.common.util;

public class CommonUtils {

    private static final String FILE_EXTENSION_SEPARATOR = ".";

    public static String buildFileName(String category, String originalFileName) {
        int fileExtensionIndex = originalFileName.lastIndexOf(FILE_EXTENSION_SEPARATOR);
        String fileExtension = originalFileName.substring(fileExtensionIndex);
        String fileName = originalFileName.substring(0, fileExtensionIndex);
        String now = String.valueOf(System.currentTimeMillis());

        return category + "/" + fileName + "_" + now + fileExtension;
    }

}
